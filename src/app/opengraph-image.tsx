import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Jose Juan — Full-Stack Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Shared visual language with the project covers (public/img/p1–p5.svg):
// dark editorial ground, hairlines, mono labels, a single #FF5C2E accent.
const INK = '#0E1014';
const INK_2 = '#15171C';
const PAPER = '#E6E6E6';
const MUTED = '#8A8B90';
const HAIR = '#23262C';
const ACCENT = '#FF5C2E';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: `linear-gradient(160deg, ${INK} 0%, ${INK_2} 100%)`,
          padding: '56px 64px',
          justifyContent: 'space-between',
        }}
      >
        {/* Top meta strip */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 20,
            borderBottom: `1px solid ${HAIR}`,
            fontSize: 22,
            letterSpacing: 4,
            color: MUTED,
          }}
        >
          <div style={{ display: 'flex' }}>// jjpg.dev · portfolio</div>
          <div style={{ display: 'flex', color: ACCENT }}>DISPONIBLE</div>
        </div>

        {/* Center block */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: ACCENT,
              }}
            />
            <div
              style={{
                display: 'flex',
                fontSize: 24,
                letterSpacing: 1,
                color: PAPER,
              }}
            >
              Disponible para nuevos proyectos
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 120,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: -3,
              color: PAPER,
            }}
          >
            Jose Juan
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 52,
              fontStyle: 'italic',
              color: ACCENT,
              marginTop: 12,
            }}
          >
            Full-Stack Engineer
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              color: '#B6B8BE',
              marginTop: 26,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            SaaS, dashboards e integración de IA con Next.js, NestJS y PostgreSQL.
          </div>
        </div>

        {/* Bottom meta strip */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 20,
            borderTop: `1px solid ${HAIR}`,
            fontSize: 20,
            letterSpacing: 2.5,
            color: MUTED,
          }}
        >
          <div style={{ display: 'flex' }}>
            NEXT.JS · NESTJS · POSTGRESQL · CLAUDE API
          </div>
          <div style={{ display: 'flex', color: PAPER }}>jjpg.dev</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
