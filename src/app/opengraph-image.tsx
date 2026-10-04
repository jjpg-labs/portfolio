import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'José Juan — Full Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Same editorial system as the site in light mode (the canonical theme):
// paper ground, Instrument Serif display, hairlines and a single accent.
// Values mirror the :root tokens in globals.css.
const PAPER = '#F4F1EA';
const INK = '#0E1014';
const SECONDARY = '#3F4248';
const MUTED = '#5F626A';
const HAIR = '#C9C2AE';
const ACCENT = '#FF5C2E';
const ACCENT_INK = '#C63A0A';

// Satori only ships a sans fallback, so the serif is vendored (OFL, see
// assets/fonts/OFL.txt). No edge runtime: the image is rendered once at build
// time and reads the fonts from disk.
const loadFont = (file: string) =>
  readFile(join(process.cwd(), 'assets/fonts', file));

export default async function Image() {
  const [serif, serifItalic] = await Promise.all([
    loadFont('InstrumentSerif-Regular.ttf'),
    loadFont('InstrumentSerif-Italic.ttf'),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: PAPER,
          padding: '56px 72px',
          color: INK,
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
            fontSize: 20,
            letterSpacing: 4,
            color: MUTED,
          }}
        >
          <div style={{ display: 'flex' }}>// JJPG.DEV · PORTFOLIO</div>
          <div style={{ display: 'flex', color: ACCENT_INK }}>
            ABIERTO A OFERTAS
          </div>
        </div>

        {/* Center block */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginBottom: 20,
              fontSize: 24,
              color: SECONDARY,
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
            Disponible de inmediato · Remoto desde España
          </div>

          <div
            style={{
              display: 'flex',
              fontFamily: 'Instrument Serif',
              fontSize: 140,
              lineHeight: 1,
              letterSpacing: -2,
            }}
          >
            José Juan.
          </div>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Instrument Serif',
              fontStyle: 'italic',
              fontSize: 68,
              lineHeight: 1.1,
              color: ACCENT_INK,
              marginTop: 4,
            }}
          >
            Full Stack Developer.
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              lineHeight: 1.4,
              color: SECONDARY,
              marginTop: 24,
              maxWidth: 940,
            }}
          >
            Casi 5 años en PHP/Symfony, Node.js y React/Next.js: facturación
            recurrente, cobros SEPA y testing de serie.
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
            PHP/SYMFONY · NODE.JS · REACT/NEXT.JS · POSTGRESQL
          </div>
          <div style={{ display: 'flex', color: INK }}>jjpg.dev</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Instrument Serif', data: serif, style: 'normal', weight: 400 },
        {
          name: 'Instrument Serif',
          data: serifItalic,
          style: 'italic',
          weight: 400,
        },
      ],
    }
  );
}
