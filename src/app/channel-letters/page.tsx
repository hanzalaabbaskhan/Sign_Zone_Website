import type { Metadata } from 'next'
import Link from 'next/link'
import LightingDemo from '@/components/channel-letters/LightingDemo'
import FAQAccordion from '@/components/ui/FAQAccordion'
import { CL_PARTS, CL_MOUNTS, CL_SIZES, CL_FAQ } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Channel Letter Signs',
  description: 'Everything about channel letter signs in Dallas–Fort Worth: types, anatomy, mounting options, sizing, cost and FAQ. Fabricated and installed by Sign Zone.',
}

export default function ChannelLettersPage() {
  return (
    <>
      {/* Hero */}
      <section className="dark">
        <div className="wrap" style={{ paddingTop: 28, paddingBottom: 88 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)', marginBottom: 36 }}>
            <Link href="/" style={{ color: 'var(--dmuted)' }}>Home</Link>
            {' / '}
            <Link href="/#signs" style={{ color: 'var(--dmuted)' }}>Signs</Link>
            {' / '}
            <span>Channel letters</span>
          </nav>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>
            <div style={{ flex: '1 1 440px', minWidth: 0 }}>
              <div className="eyebrow">Sign type guide</div>
              <h1 className="disp sec-h" style={{ fontSize: 'clamp(36px,6vw,66px)', lineHeight: .95, margin: 0 }}>
                Channel letter signs for DFW businesses
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--dsub)', margin: '20px 0 32px', maxWidth: 520 }}>
                The most common storefront sign in America — individually fabricated 3D letters, lit from inside. Here&apos;s everything you need to know before you order.
              </p>
              <div className="btn-row">
                <Link href="/quote?type=channel" className="btn btn-blue">Get a free mockup →</Link>
                <Link href="/toolkit" className="btn btn-ghost">Cost calculator</Link>
              </div>
            </div>

            <div style={{ flex: '1 1 400px', minWidth: 0 }}>
              <LightingDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy */}
      <section className="light sec">
        <div className="wrap">
          <div className="eyebrow">Anatomy</div>
          <h2 className="disp sec-h">What&apos;s inside a channel letter</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, marginTop: 40 }}>
            <ul className="parts" style={{ flex: '1 1 400px', minWidth: 0, margin: 0 }}>
              {CL_PARTS.map((part, i) => (
                <li key={part.name}>
                  <span className="pnum">{i + 1}</span>
                  <span>
                    <strong style={{ display: 'block', color: 'var(--navy)' }}>{part.name}</strong>
                    <span style={{ display: 'block', fontSize: 14, lineHeight: 1.5, color: 'var(--muted)', marginTop: 2 }}>{part.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
            {/* Anatomy visual placeholder */}
            <div style={{ flex: '1 1 360px', minWidth: 0, background: 'var(--paper)', borderRadius: 20, height: 340, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted2)', fontSize: 14, border: '1px solid var(--soft)' }}>
              [Anatomy diagram — replace with image]
            </div>
          </div>
        </div>
      </section>

      {/* Mounting options */}
      <section className="paper sec">
        <div className="wrap">
          <div className="eyebrow">Mounting</div>
          <h2 className="disp sec-h">Three ways to mount channel letters</h2>
          <div className="grid-auto" style={{ marginTop: 40 }}>
            {CL_MOUNTS.map((m) => (
              <div key={m.name} className="card" style={{ borderRadius: 18, padding: 28, gap: 10 }}>
                <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--navy)' }}>{m.name}</span>
                <span style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--muted)' }}>{m.desc}</span>
                <span className="you" style={{ marginTop: 'auto' }}>
                  <strong>Choose it when:</strong> {m.when}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizing table */}
      <section className="light sec">
        <div className="wrap">
          <div className="eyebrow">Sizing guide</div>
          <h2 className="disp sec-h">Letter height, readability &amp; cost</h2>
          <div className="tbl-wrap" style={{ marginTop: 40 }}>
            <table>
              <thead>
                <tr>
                  <th>Height</th>
                  <th>Readable from</th>
                  <th>Min. viewing distance</th>
                  <th>Per-letter range</th>
                  <th>Typical use</th>
                </tr>
              </thead>
              <tbody>
                {CL_SIZES.map((s) => (
                  <tr key={s.h}>
                    <th scope="row" style={{ fontWeight: 800, color: 'var(--blue)' }}>{s.h}&quot;</th>
                    <td>{s.h * 30} ft</td>
                    <td>{s.h * 10} ft</td>
                    <td style={{ fontWeight: 700, color: 'var(--text)' }}>{s.range}</td>
                    <td>{s.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="paper sec">
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <div className="eyebrow">FAQ</div>
            <h2 className="disp sec-h">Channel letter questions</h2>
            <div className="btn-row" style={{ marginTop: 32 }}>
              <Link href="/quote?type=channel" className="btn btn-dark">Get my free mockup →</Link>
              <Link href="/quote?type=blade" style={{ fontWeight: 700, color: 'var(--blue)' }}>Blade signs →</Link>
              <Link href="/quote?type=monument" style={{ fontWeight: 700, color: 'var(--blue)' }}>Monument signs →</Link>
            </div>
          </div>
          <div style={{ flex: '2 1 480px', minWidth: 0 }}>
            <FAQAccordion items={CL_FAQ} />
          </div>
        </div>
      </section>

      {/* Blue CTA bar */}
      <section style={{ background: 'var(--blue)', color: '#fff' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between', paddingTop: 48, paddingBottom: 48 }}>
          <div>
            <div className="disp" style={{ fontSize: 32, lineHeight: 1 }}>Ready to see your name lit up?</div>
            <p style={{ margin: '12px 0 0', opacity: .85 }}>Free mockup on your building. Written quote in 24 hours. No obligation.</p>
          </div>
          <div className="btn-row">
            <Link href="/quote?type=channel" className="btn" style={{ background: '#fff', color: 'var(--blue)' }}>Get a free mockup →</Link>
            <a href="tel:2147144623" className="btn btn-ghost">Call 214-714-4623</a>
          </div>
        </div>
      </section>
    </>
  )
}
