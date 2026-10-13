/**
 * @jest-environment node
 */
import { resolveClientIp } from './client-ip';

const h = (init: Record<string, string>) => new Headers(init);

describe('resolveClientIp', () => {
  it('uses CF-Connecting-IP when the peer is a Cloudflare IPv4', () => {
    expect(
      resolveClientIp(
        h({
          'x-forwarded-for': '173.245.48.10',
          'cf-connecting-ip': '198.51.100.7',
        }),
      ),
    ).toEqual({ ip: '198.51.100.7', source: 'cf-connecting-ip' });
  });

  it('uses CF-Connecting-IP when the peer is a Cloudflare IPv6', () => {
    expect(
      resolveClientIp(
        h({
          'x-forwarded-for': '2606:4700::1',
          'cf-connecting-ip': '198.51.100.7',
        }),
      ),
    ).toEqual({ ip: '198.51.100.7', source: 'cf-connecting-ip' });
  });

  it('ignores CF-Connecting-IP when the peer is not Cloudflare', () => {
    expect(
      resolveClientIp(
        h({
          'x-forwarded-for': '203.0.113.5',
          'cf-connecting-ip': '198.51.100.7',
        }),
      ),
    ).toEqual({ ip: '203.0.113.5', source: 'x-forwarded-for' });
  });

  it('returns unknown without proxy headers', () => {
    expect(resolveClientIp(h({}))).toEqual({
      ip: 'unknown',
      source: 'unknown',
    });
  });

  it.each(['not-an-ip', '1.1.1.1, 2.2.2.2'])(
    'falls back to the peer when CF-Connecting-IP is invalid (%s)',
    (cf) => {
      expect(
        resolveClientIp(
          h({ 'x-forwarded-for': '173.245.48.10', 'cf-connecting-ip': cf }),
        ),
      ).toEqual({ ip: '173.245.48.10', source: 'x-forwarded-for' });
    },
  );

  it('recognises an IPv4-mapped Cloudflare peer', () => {
    expect(
      resolveClientIp(
        h({
          'x-forwarded-for': '::ffff:173.245.48.10',
          'cf-connecting-ip': '198.51.100.7',
        }),
      ),
    ).toEqual({ ip: '198.51.100.7', source: 'cf-connecting-ip' });
  });

  it.each([undefined, '198.51.100.7'])(
    'falls back to the X-Forwarded-For key when the peer is not an IP (CF-Connecting-IP: %s)',
    (cf) => {
      const init: Record<string, string> = { 'x-forwarded-for': 'basura' };
      if (cf) init['cf-connecting-ip'] = cf;
      expect(resolveClientIp(h(init))).toEqual({
        ip: 'basura',
        source: 'x-forwarded-for',
      });
    },
  );

  it('takes the peer from the last X-Forwarded-For value', () => {
    const xff = '203.0.113.5, 173.245.48.10';
    expect(
      resolveClientIp(
        h({ 'x-forwarded-for': xff, 'cf-connecting-ip': '198.51.100.7' }),
      ),
    ).toEqual({ ip: '198.51.100.7', source: 'cf-connecting-ip' });
    expect(resolveClientIp(h({ 'x-forwarded-for': xff }))).toEqual({
      ip: '203.0.113.5',
      source: 'x-forwarded-for',
    });
  });
});
