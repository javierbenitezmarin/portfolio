import { ImageResponse } from 'next/og';

export const alt = 'Javier Benitez Marin — AI Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#0d1117',
          color: '#e6edf3',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 84,
              height: 84,
              borderRadius: 20,
              background: '#161b22',
              border: '1px solid #30363d',
              color: '#58a6ff',
              fontSize: 42,
              fontWeight: 700,
            }}
          >
            {'</>'}
          </div>
          <div style={{ display: 'flex', fontSize: 28, color: '#8b949e' }}>
            javierbenitezmarin.dev
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 78, fontWeight: 800, letterSpacing: -2 }}>
            Javier Benitez Marin
          </div>
          <div style={{ display: 'flex', fontSize: 42, color: '#58a6ff', marginTop: 14 }}>
            AI Engineer
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 30,
              color: '#8b949e',
              marginTop: 28,
              maxWidth: 900,
            }}
          >
            Building agentic AI systems that make it to production.
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 24, color: '#6e7681' }}>
          RAG · Document Intelligence · Multi-agent orchestration
        </div>
      </div>
    ),
    { ...size }
  );
}
