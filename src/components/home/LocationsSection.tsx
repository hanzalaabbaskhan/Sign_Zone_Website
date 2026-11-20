import Link from 'next/link'
import { LOCATION_PAGES } from '@/data/siteData'

export default function LocationsSection() {
  return (
    <section className="paper sec" id="locations">
      <div className="wrap">
        <div className="eyebrow">Where we work</div>
        <h2 className="disp sec-h">Local knowledge. Metro-wide reach.</h2>
        <p className="loc-intro">
          From storefronts and offices to shopping centers and campuses, we help businesses across Dallas–Fort Worth find the right sign, get it permitted and get it installed.
        </p>

        <div className="location-layout">
          <div className="location-intro">
            <span className="loc-marker">DFW METROPLEX</span>
            <h3>
              Local signs.<br />
              <span style={{ color: 'var(--elec)' }}>Built for your city.</span>
            </h3>
            <p>
              Every city in North Texas has distinct sign codes, height restrictions, and landlord criteria. We handle drawings, permits, and professional installation from start to finish.
            </p>
            <ul className="loc-bullets">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Municipal permits &amp; zoning clearance</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Landlord sign criteria compliance</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Licensed TDLR electrical installers</span>
              </li>
            </ul>
            <Link className="btn btn-blue" style={{ width: '100%', marginTop: 'auto' }} href="/quote">
              Tell us about your location →
            </Link>
          </div>

          <div className="location-list">
            {LOCATION_PAGES.map((loc) => (
              <details key={loc.slug} className="location-card">
                <summary>
                  <span className="loc-city-name">{loc.name}</span>
                  <span className="loc-toggle" aria-hidden="true">+</span>
                </summary>
                <div className="loc-card-content">
                  <p>
                    Local sign criteria, city permitting guidelines, and completed storefront &amp; building projects in {loc.name}.
                  </p>
                  <Link href={`/locations/${loc.slug}`} className="loc-card-link">
                    Explore {loc.name} signage &amp; work →
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </div>

        <p className="loc-foot">
          Serving the wider Dallas–Fort Worth area too.{' '}
          <Link href="/quote">
            Ask about your city →
          </Link>
        </p>
      </div>
    </section>
  )
}
