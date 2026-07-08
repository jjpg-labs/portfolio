// Layered abuse-protection helpers for the contact endpoint.
//
// Everything here is dependency-free (hand-rolled validation, no zod) and mostly
// pure so it can be unit-tested in isolation from the route handler.

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string };

// Same shape the client form enforces, plus explicit upper bounds so a single
// oversized field can't slip through even under the body-size cap.
export const LIMITS = {
  name: { min: 1, max: 80 },
  email: { max: 254 },
  subject: { min: 1, max: 120 },
  message: { min: 10, max: 2000 },
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

/**
 * Strict server-side validation aligned with the client form. Returns the
 * trimmed, typed payload on success, or a human-readable error on failure.
 */
export function validateContactPayload(input: unknown): ValidationResult {
  if (typeof input !== 'object' || input === null) {
    return { ok: false, error: 'Cuerpo inválido' };
  }

  const record = input as Record<string, unknown>;
  const name = asString(record.name).trim();
  const email = asString(record.email).trim();
  const subject = asString(record.subject).trim();
  const message = asString(record.message).trim();

  if (name.length < LIMITS.name.min || name.length > LIMITS.name.max) {
    return { ok: false, error: 'Nombre inválido' };
  }
  if (
    email.length === 0 ||
    email.length > LIMITS.email.max ||
    !EMAIL_RE.test(email)
  ) {
    return { ok: false, error: 'Email inválido' };
  }
  if (
    subject.length < LIMITS.subject.min ||
    subject.length > LIMITS.subject.max
  ) {
    return { ok: false, error: 'Asunto inválido' };
  }
  if (
    message.length < LIMITS.message.min ||
    message.length > LIMITS.message.max
  ) {
    return { ok: false, error: 'Mensaje inválido' };
  }

  return { ok: true, data: { name, email, subject, message } };
}

/**
 * Honeypot check. The form renders a hidden `company` field that real users
 * never see or fill. If it arrives non-empty, the request is almost certainly a
 * bot that auto-filled every input.
 */
export function isHoneypotTripped(input: unknown): boolean {
  if (typeof input !== 'object' || input === null) return false;
  const company = (input as Record<string, unknown>).company;
  return typeof company === 'string' && company.trim().length > 0;
}

// Extracts the hostname from a `Host` request header (`hostname` or
// `hostname:port`), reusing URL parsing so ports/IPv6 literals are handled.
function hostnameFromHost(hostHeader: string): string | null {
  try {
    return new URL(`http://${hostHeader}`).hostname;
  } catch {
    return null;
  }
}

/**
 * Origin/Referer defense. Cheap CSRF-ish check: browsers send `Origin` on
 * cross-origin (and same-origin non-GET) requests, so a POST originating from an
 * unexpected site is rejected. Falls back to `Referer` when `Origin` is absent.
 *
 * A request is accepted when ANY of these hold:
 *   1. The candidate is a localhost origin (local dev, any port).
 *   2. Same-origin: the candidate's hostname equals the request's own `Host`
 *      hostname (`requestHost`). This makes the form's own POST always pass no
 *      matter which domain served it — apex, www, or a Vercel preview
 *      (`*.vercel.app`) — without needing an allowlist entry. Compared by
 *      hostname only, so a port on either side doesn't cause a false reject.
 *   3. The candidate matches the explicit `allowedOrigins` allowlist (kept as a
 *      fallback for deliberate cross-origin exceptions).
 *
 * A POST whose Origin/Referer host differs from the request Host and isn't in
 * the allowlist is rejected (caller returns 403).
 */
export function checkOrigin(
  origin: string | null,
  referer: string | null,
  allowedOrigins: string[],
  requestHost?: string | null,
): boolean {
  const candidate = origin ?? referer;
  if (!candidate) return false;

  let host: string;
  let hostname: string;
  try {
    const url = new URL(candidate);
    host = `${url.protocol}//${url.host}`;
    hostname = url.hostname;
  } catch {
    return false;
  }

  // 1. localhost (any port) — local dev.
  if (hostname === 'localhost' || hostname === '127.0.0.1') return true;

  // 2. Same-origin: candidate hostname === request Host hostname.
  if (requestHost) {
    const requestHostname = hostnameFromHost(requestHost);
    if (requestHostname && requestHostname === hostname) return true;
  }

  // 3. Explicit allowlist fallback.
  return allowedOrigins.some((allowed) => {
    try {
      const a = new URL(allowed);
      return `${a.protocol}//${a.host}` === host;
    } catch {
      return false;
    }
  });
}

export interface RateLimitOptions {
  limit?: number;
  windowMs?: number;
  now?: number;
  store?: Map<string, number[]>;
}

// Module-level store shared across requests handled by the same warm instance.
const globalStore: Map<string, number[]> = new Map();

/**
 * Best-effort in-memory, per-IP rate limit. Returns `true` when the request is
 * allowed and `false` when the limit is exceeded.
 *
 * IMPORTANT (serverless caveat): this is intentionally WEAK. On Vercel each
 * request may run in a separate, ephemeral lambda instance, so this Map is not
 * shared across instances and is wiped on cold start. It only throttles bursts
 * that happen to reuse the same warm instance. It is a cheap first line of
 * defense, not a real rate limiter — for that use a shared store (Vercel KV,
 * Upstash/Redis). Kept dependency-free on purpose.
 */
export function bestEffortRateLimit(
  ip: string,
  opts: RateLimitOptions = {},
): boolean {
  const limit = opts.limit ?? 5;
  const windowMs = opts.windowMs ?? 60_000;
  const now = opts.now ?? Date.now();
  const store = opts.store ?? globalStore;

  const windowStart = now - windowMs;
  const hits = (store.get(ip) ?? []).filter((t) => t > windowStart);

  if (hits.length >= limit) {
    // Keep the pruned window but don't count this blocked attempt.
    store.set(ip, hits);
    return false;
  }

  hits.push(now);
  store.set(ip, hits);
  return true;
}
