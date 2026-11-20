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
            <span className="loc-marker">DFW</span>
            <h3>Signs built for your city.</h3>
            <p>
              Every location has its own property requirements and sign rules. We help you plan for the details, from the first site review to installation.
            </p>
            <Link className="btn btn-blue" data-quote="" href="/quote">
              Tell us about your location →
            </Link>
          </div>

          <div className="location-list">
            {LOCATION_PAGES.map((loc) => (
              <details key={loc.slug} className="location-card">
                <summary>
                  <span>{loc.name}</span>
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Explore storefront, building, monument and interior signs for your business. We review your site, local requirements and landlord criteria before recommending a sign.
                </p>
                <Link href={`/locations/${loc.slug}`}>
                  Explore {loc.name} →
                </Link>
              </details>
            ))}
          </div>
        </div>

        <p className="loc-foot">
          Serving the wider Dallas–Fort Worth area too.{' '}
          <Link data-quote="" href="/quote">
            Ask about your city →
          </Link>
        </p>
      </div>
    </section>
  )
}
