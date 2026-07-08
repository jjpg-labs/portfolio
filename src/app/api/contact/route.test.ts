/**
 * @jest-environment node
 */
import { POST } from './route';

// Mock Resend so no real email is sent. `mockSend` is prefixed with `mock` so
// jest's hoisting of jest.mock allows referencing it inside the factory.
const mockSend = jest.fn();
jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: { send: mockSend },
  })),
}));

const ALLOWED_ORIGIN = 'https://jjpg.dev';

function makeRequest(
  body: unknown,
  {
    headers = {},
    ip = '203.0.113.1',
  }: { headers?: Record<string, string>; ip?: string } = {},
): Request {
  return new Request('https://jjpg.dev/api/contact', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      origin: ALLOWED_ORIGIN,
      'x-forwarded-for': ip,
      ...headers,
    },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
}

const validBody = {
  name: 'Juan',
  email: 'juan@mail.com',
  subject: 'Hola',
  message: 'Este es un mensaje válido.',
  company: '',
};

describe('POST /api/contact', () => {
  const originalKey = process.env.RESEND_API_KEY;

  beforeEach(() => {
    jest.clearAllMocks();
    mockSend.mockResolvedValue({ data: { id: 'mock-id' }, error: null });
    process.env.RESEND_API_KEY = 'dummy';
  });

  afterAll(() => {
    process.env.RESEND_API_KEY = originalKey;
  });

  it('sends the email for a legitimate submission', async () => {
    const res = await POST(makeRequest(validBody, { ip: '203.0.113.10' }));
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json.success).toBe(true);
    expect(mockSend).toHaveBeenCalledTimes(1);
    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({
        replyTo: 'juan@mail.com',
        subject: '[Portfolio] Hola',
      }),
    );
  });

  it('rejects an oversized body by content-length with 413 (before parsing)', async () => {
    const res = await POST(
      makeRequest(validBody, {
        ip: '203.0.113.11',
        headers: { 'content-length': '999999' },
      }),
    );

    expect(res.status).toBe(413);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it('rejects a foreign origin with 403', async () => {
    const res = await POST(
      makeRequest(validBody, {
        ip: '203.0.113.12',
        headers: { origin: 'https://evil.example' },
      }),
    );

    expect(res.status).toBe(403);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it('honours the honeypot: 200 success but no email sent', async () => {
    const res = await POST(
      makeRequest(
        { ...validBody, company: 'Acme Corp' },
        { ip: '203.0.113.13' },
      ),
    );
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json.success).toBe(true);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it('rejects an invalid payload with 400', async () => {
    const res = await POST(
      makeRequest(
        { ...validBody, email: 'not-an-email' },
        { ip: '203.0.113.14' },
      ),
    );

    expect(res.status).toBe(400);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it('rejects malformed JSON with 400', async () => {
    const res = await POST(
      makeRequest('{ not valid json', { ip: '203.0.113.15' }),
    );

    expect(res.status).toBe(400);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it('returns 503 when the email service is not configured', async () => {
    delete process.env.RESEND_API_KEY;
    const res = await POST(makeRequest(validBody, { ip: '203.0.113.16' }));

    expect(res.status).toBe(503);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it('rate-limits a burst from the same IP with 429', async () => {
    const ip = '203.0.113.99';
    let last: Response | undefined;
    // Default limit is 5/min; the 6th request from the same IP is blocked.
    for (let i = 0; i < 6; i++) {
      last = await POST(makeRequest(validBody, { ip }));
    }

    expect(last?.status).toBe(429);
  });
});
