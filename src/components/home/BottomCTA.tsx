import Link from 'next/link'
import { CITIES_ALL } from '@/data/siteData'

export default function BottomCTA() {
  return (
    <section className="dark sec" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="stripes" style={{ bottom: -200, left: -160, opacity: 0.16 }} />
      <div className="wrap" style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start' }}>
        <div style={{ flex: '1.3 1 480px', minWidth: 0 }}>
          <h2 className="disp sec-h" style={{ fontSize: 'clamp(36px,6vw,64px)', lineHeight: 0.95, margin: 0 }}>
            Tell us about your sign.{' '}
            <span style={{ color: 'var(--elec)' }}>Get a quote in 24 hours.</span>
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--dsub)', margin: '24px 0 0', maxWidth: 560 }}>
            Send a photo of your building and your logo. We&apos;ll come back with a mockup, a price and a timeline.
          </p>
          <div className="btn-row" style={{ marginTop: 32 }}>
            <Link href="/quote" className="btn btn-blue" data-quote="">
              Start my free quote
            </Link>
            <a href="sms:2147144623" className="btn btn-ghost">
              Text us a photo
            </a>
            <a href="tel:2147144623" className="btn btn-ghost">
              Call 214-714-4623
            </a>
          </div>
        </div>

        <div className="tool" style={{ flex: '1 1 360px', minWidth: 0, padding: 28 }}>
          <div className="kv" style={{ color: 'var(--dmuted)' }}>Where we install</div>
          <div className="chips" id="cities" style={{ gap: 8, marginTop: 14 }}>
            {CITIES_ALL.map((city) => (
              <span key={city} className="chip chip-d">
                {city}
              </span>
            ))}
          </div>
          <div
            style={{
              marginTop: 22,
              padding: '14px 16px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.09)',
              borderRadius: 12,
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
            }}
          >
            <span style={{ fontSize: 13, color: '#C8D3E6', lineHeight: 1.4 }}>
              Outside DFW or opening in several states?
            </span>
            <Link
              href="/quote"
              style={{
                fontSize: 13.5,
                fontWeight: 700,
                color: 'var(--elec)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              Ask about our multi-location program <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
