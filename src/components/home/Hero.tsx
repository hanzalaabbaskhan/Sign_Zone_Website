import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero dark">
      <img
        src="/images/hero-1.jpg"
        alt=""
        aria-hidden="true"
        className="hero-background hero-slide slide-1"
      />
      <img
        src="/images/hero-2.jpg"
        alt=""
        aria-hidden="true"
        className="hero-background hero-slide slide-2"
      />
      <img
        src="/images/hero-3.jpg"
        alt=""
        aria-hidden="true"
        className="hero-background hero-slide slide-3"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="stripes" style={{ top: -80, right: -120 }} />

      <div className="wrap">
        <div style={{ flex: '1 1 480px', minWidth: 0 }}>
          <span className="pill">
            <span className="dot" />
            Free design mockup with every quote
          </span>
          <h1 className="disp">
            Signs that put your business{' '}
            <span style={{ color: 'var(--elec)' }}>on the map.</span>
          </h1>
          <p className="sub">
            Channel letters, monument, pylon, storefront, interior and vehicle signs for Dallas–Fort Worth businesses of every size. One team designs it, permits it, builds it and installs it.
          </p>
          <div className="btn-row" style={{ marginTop: 36 }}>
            <Link href="/quote" className="btn btn-blue" data-quote="">
              Get my free quote{' '}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link href="/#estimate" className="btn btn-ghost">
              Estimate my sign in 60 seconds
            </Link>
          </div>
          <ul className="ticks">
            <li>
              <svg className="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4D8DFF" strokeWidth="2.5" aria-hidden="true">
                <path d="M4 12l5 5L20 6" />
              </svg>
              Quote within 24 hours
            </li>
            <li>
              <svg className="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4D8DFF" strokeWidth="2.5" aria-hidden="true">
                <path d="M4 12l5 5L20 6" />
              </svg>
              Permits &amp; landlord approval handled
            </li>
            <li>
              <svg className="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4D8DFF" strokeWidth="2.5" aria-hidden="true">
                <path d="M4 12l5 5L20 6" />
              </svg>
              Licensed TX electrical sign contractor
            </li>
            <li>
              <svg className="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4D8DFF" strokeWidth="2.5" aria-hidden="true">
                <path d="M4 12l5 5L20 6" />
              </svg>
              [X]-year warranty on parts &amp; labor
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
