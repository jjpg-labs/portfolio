import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Jose Juan — Desarrollador Full-Stack';
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
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              color: '#f8fafc',
              letterSpacing: '-2px',
            }}
          >
            Jose Juan
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 400,
              color: '#4ade80',
              letterSpacing: '1px',
            }}
          >
            Desarrollador Full-Stack
          </div>
          <div
            style={{
              fontSize: 22,
              color: '#94a3b8',
              marginTop: 16,
            }}
          >
            jjpg.dev
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
