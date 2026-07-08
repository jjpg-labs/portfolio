import {
  bestEffortRateLimit,
  checkOrigin,
  isHoneypotTripped,
  validateContactPayload,
} from './guard';

const validPayload = {
  name: 'Juan',
  email: 'juan@mail.com',
  subject: 'Hola',
  message: 'Este es un mensaje válido.',
};

describe('validateContactPayload', () => {
  it('accepts a well-formed payload and returns trimmed data', () => {
    const result = validateContactPayload({
      name: '  Juan  ',
      email: '  juan@mail.com ',
      subject: ' Hola ',
      message: '  Este es un mensaje válido.  ',
    });
    expect(result).toEqual({
      ok: true,
      data: {
        name: 'Juan',
        email: 'juan@mail.com',
        subject: 'Hola',
        message: 'Este es un mensaje válido.',
      },
    });
  });

  it.each([
    ['non-object', null],
    ['array', []],
    ['string', 'nope'],
  ])('rejects a %s body', (_label, input) => {
    const result = validateContactPayload(input);
    expect(result.ok).toBe(false);
  });

  it('rejects an empty name', () => {
    const result = validateContactPayload({ ...validPayload, name: '   ' });
    expect(result).toMatchObject({ ok: false });
  });

  it('rejects a name longer than 80 chars', () => {
    const result = validateContactPayload({
      ...validPayload,
      name: 'a'.repeat(81),
    });
    expect(result).toMatchObject({ ok: false });
  });

  it('rejects an invalid email', () => {
    const result = validateContactPayload({
      ...validPayload,
      email: 'not-an-email',
    });
    expect(result).toMatchObject({ ok: false });
  });

  it('rejects an email over the length cap', () => {
    const longLocal = 'a'.repeat(250);
    const result = validateContactPayload({
      ...validPayload,
      email: `${longLocal}@mail.com`,
    });
    expect(result).toMatchObject({ ok: false });
  });

  it('rejects an empty subject', () => {
    const result = validateContactPayload({ ...validPayload, subject: '' });
    expect(result).toMatchObject({ ok: false });
  });

  it('rejects a subject longer than 120 chars', () => {
    const result = validateContactPayload({
      ...validPayload,
      subject: 'a'.repeat(121),
    });
    expect(result).toMatchObject({ ok: false });
  });

  it('rejects a message shorter than 10 chars', () => {
    const result = validateContactPayload({ ...validPayload, message: 'short' });
    expect(result).toMatchObject({ ok: false });
  });

  it('rejects a message longer than 2000 chars', () => {
    const result = validateContactPayload({
      ...validPayload,
      message: 'a'.repeat(2001),
    });
    expect(result).toMatchObject({ ok: false });
  });
});

describe('isHoneypotTripped', () => {
  it('is not tripped when company is absent', () => {
    expect(isHoneypotTripped(validPayload)).toBe(false);
  });

  it('is not tripped when company is empty or whitespace', () => {
    expect(isHoneypotTripped({ ...validPayload, company: '' })).toBe(false);
    expect(isHoneypotTripped({ ...validPayload, company: '   ' })).toBe(false);
  });

  it('is tripped when company is filled', () => {
    expect(
      isHoneypotTripped({ ...validPayload, company: 'Acme Corp' }),
    ).toBe(true);
  });

  it('is not tripped for non-object input', () => {
    expect(isHoneypotTripped(null)).toBe(false);
    expect(isHoneypotTripped('nope')).toBe(false);
  });
});

describe('checkOrigin', () => {
  const allowed = ['https://jjpg.dev'];

  it('allows a matching origin', () => {
    expect(checkOrigin('https://jjpg.dev', null, allowed)).toBe(true);
  });

  it('ignores the path on the origin/referer', () => {
    expect(
      checkOrigin(null, 'https://jjpg.dev/contact?ref=x', allowed),
    ).toBe(true);
  });

  it('falls back to referer when origin is null', () => {
    expect(checkOrigin(null, 'https://jjpg.dev/contact', allowed)).toBe(true);
  });

  it('rejects a foreign origin', () => {
    expect(checkOrigin('https://evil.example', null, allowed)).toBe(false);
  });

  it('rejects when neither origin nor referer is present', () => {
    expect(checkOrigin(null, null, allowed)).toBe(false);
  });

  it('always allows localhost regardless of port', () => {
    expect(checkOrigin('http://localhost:3000', null, allowed)).toBe(true);
    expect(checkOrigin('http://localhost:5173', null, allowed)).toBe(true);
    expect(checkOrigin('http://127.0.0.1:8080', null, allowed)).toBe(true);
  });

  it('rejects a malformed origin value', () => {
    expect(checkOrigin('not a url', null, allowed)).toBe(false);
  });
});

describe('bestEffortRateLimit', () => {
  it('allows requests up to the limit, then blocks', () => {
    const store = new Map<string, number[]>();
    const opts = { limit: 3, windowMs: 60_000, now: 1_000, store };

    expect(bestEffortRateLimit('1.1.1.1', opts)).toBe(true);
    expect(bestEffortRateLimit('1.1.1.1', opts)).toBe(true);
    expect(bestEffortRateLimit('1.1.1.1', opts)).toBe(true);
    expect(bestEffortRateLimit('1.1.1.1', opts)).toBe(false);
  });

  it('tracks IPs independently', () => {
    const store = new Map<string, number[]>();
    const opts = { limit: 1, windowMs: 60_000, now: 1_000, store };

    expect(bestEffortRateLimit('1.1.1.1', opts)).toBe(true);
    expect(bestEffortRateLimit('2.2.2.2', opts)).toBe(true);
    expect(bestEffortRateLimit('1.1.1.1', opts)).toBe(false);
  });

  it('lets requests through again once the window has passed', () => {
    const store = new Map<string, number[]>();

    expect(
      bestEffortRateLimit('1.1.1.1', {
        limit: 1,
        windowMs: 60_000,
        now: 1_000,
        store,
      }),
    ).toBe(true);
    expect(
      bestEffortRateLimit('1.1.1.1', {
        limit: 1,
        windowMs: 60_000,
        now: 1_000,
        store,
      }),
    ).toBe(false);
    // Same IP, but far enough in the future that the earlier hit has expired.
    expect(
      bestEffortRateLimit('1.1.1.1', {
        limit: 1,
        windowMs: 60_000,
        now: 1_000 + 60_001,
        store,
      }),
    ).toBe(true);
  });
});
