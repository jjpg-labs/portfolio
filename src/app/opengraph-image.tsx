import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Jose Juan — Full-Stack Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          fontFamily: 'sans-serif',
          padding: 80,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '8px 20px',
            borderRadius: 999,
            background: 'rgba(74, 222, 128, 0.15)',
            border: '1px solid rgba(74, 222, 128, 0.4)',
            color: '#4ade80',
            fontSize: 20,
            fontWeight: 500,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: '#4ade80',
            }}
          />
          Disponible para nuevos proyectos
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              color: '#f8fafc',
              letterSpacing: '-2px',
              lineHeight: 1,
            }}
          >
            Jose Juan
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 600,
              color: '#60a5fa',
              letterSpacing: '0.5px',
            }}
          >
            Full-Stack Engineer
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#cbd5e1',
              marginTop: 16,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            SaaS y dashboards modernos con Next.js, NestJS y PostgreSQL
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 60,
            fontSize: 22,
            color: '#94a3b8',
            letterSpacing: '0.5px',
          }}
        >
          jjpg.dev
        </div>
      </div>
    ),
    { ...size },
  );
}
