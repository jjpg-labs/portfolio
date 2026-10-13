import { BlockList, isIP } from 'node:net';

/**
 * Cloudflare's published edge ranges, snapshot 2026-10-13 from
 * https://www.cloudflare.com/ips-v4 and https://www.cloudflare.com/ips-v6.
 * Static on purpose: no runtime fetch, no new dependency, no env var. If
 * Cloudflare adds a range that is not listed yet, requests from that new POP
 * fall back to the `X-Forwarded-For` key (today's behavior); nothing opens up.
 */
const CLOUDFLARE_IPV4_RANGES = [
  '173.245.48.0/20',
  '103.21.244.0/22',
  '103.22.200.0/22',
  '103.31.4.0/22',
  '141.101.64.0/18',
  '108.162.192.0/18',
  '190.93.240.0/20',
  '188.114.96.0/20',
  '197.234.240.0/22',
  '198.41.128.0/17',
  '162.158.0.0/15',
  '104.16.0.0/13',
  '104.24.0.0/14',
  '172.64.0.0/13',
  '131.0.72.0/22',
] as const;

const CLOUDFLARE_IPV6_RANGES = [
  '2400:cb00::/32',
  '2606:4700::/32',
  '2803:f800::/32',
  '2405:b500::/32',
  '2405:8100::/32',
  '2a06:98c0::/29',
  '2c0f:f248::/32',
] as const;

const cloudflareBlockList = new BlockList();
for (const cidr of CLOUDFLARE_IPV4_RANGES) {
  const [address, prefix] = cidr.split('/');
  cloudflareBlockList.addSubnet(address, Number(prefix), 'ipv4');
}
for (const cidr of CLOUDFLARE_IPV6_RANGES) {
  const [address, prefix] = cidr.split('/');
  cloudflareBlockList.addSubnet(address, Number(prefix), 'ipv6');
}

/** Strips the IPv4-mapped IPv6 prefix so `BlockList` sees a plain IPv4. */
function normalizeIp(ip: string): string {
  const prefix = '::ffff:';
  return ip.startsWith(prefix) ? ip.slice(prefix.length) : ip;
}

function isCloudflarePeer(ip: string): boolean {
  const normalized = normalizeIp(ip);
  const family = isIP(normalized);
  if (family === 4) return cloudflareBlockList.check(normalized, 'ipv4');
  if (family === 6) return cloudflareBlockList.check(normalized, 'ipv6');
  return false;
}

export type ClientIpSource = 'cf-connecting-ip' | 'x-forwarded-for' | 'unknown';

/**
 * Resolves the key for the per-IP rate limit (jjpg-labs/portfolio#59).
 *
 * Behind Cloudflare's proxy, Traefik overwrites `X-Forwarded-For` with its
 * peer, i.e. the Cloudflare edge IP, so every visitor of the same edge node
 * would share one bucket. Cloudflare sends the real client in
 * `CF-Connecting-IP`; it is trusted only when the peer is a Cloudflare range.
 * The peer is the LAST `X-Forwarded-For` value (the one our proxy writes; the
 * first could be injected by a client). The origin is closed to non-Cloudflare
 * traffic (jjpg-labs/infra#18), but that is one more defense, not the
 * condition: the peer check stays even if Traefik's `ipAllowList` goes away.
 *
 * Falls back to today's key (first `X-Forwarded-For` value, or 'unknown')
 * when the peer is not Cloudflare, or the header is missing, invalid or
 * repeated (`Headers.get` joins repeats with ', ', which fails `isIP`).
 */
export function resolveClientIp(headers: Headers): {
  ip: string;
  source: ClientIpSource;
} {
  const forwardedFor = headers.get('x-forwarded-for');
  const values = (forwardedFor ?? '')
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean);
  const first = values[0];
  const peer = values[values.length - 1];

  if (peer && isCloudflarePeer(peer)) {
    const cf = headers.get('cf-connecting-ip')?.trim();
    if (cf && isIP(cf) !== 0) return { ip: cf, source: 'cf-connecting-ip' };
  }

  if (first) return { ip: first, source: 'x-forwarded-for' };
  return { ip: 'unknown', source: 'unknown' };
}
