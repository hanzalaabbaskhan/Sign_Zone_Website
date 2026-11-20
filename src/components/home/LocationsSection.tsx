import Link from 'next/link'

interface LocationItem {
  slug: string
  name: string
  county: string
  districts: string
  focus: string
}

const LOCATIONS_LIST: LocationItem[] = [
  {
    slug: 'dallas',
    name: 'Dallas',
    county: 'Dallas County',
    districts: 'Downtown · Uptown · Deep Ellum · North Dallas',
    focus: 'Fast-track municipal permits, high-rise letters & historic district guidelines.',
  },
  {
    slug: 'fort-worth',
    name: 'Fort Worth',
    county: 'Tarrant County',
    districts: 'Sundance Square · 7th St · Stockyards · Clearfork',
    focus: 'Architectural channel letters, multi-tenant pylons & monument fabrication.',
  },
  {
    slug: 'arlington',
    name: 'Arlington',
    county: 'Tarrant County',
    districts: 'Entertainment District · Highlands · UTA Corridor',
    focus: 'High-visibility storefront signs, illuminated cabinets & retail corridors.',
  },
  {
    slug: 'plano',
    name: 'Plano',
    county: 'Collin County',
    districts: 'Legacy West · Downtown Plano · Hwy 121 Corridor',
    focus: 'Strict HOA/landlord criteria compliance & corporate headquarters branding.',
  },
  {
    slug: 'frisco',
    name: 'Frisco',
    county: 'Collin / Denton County',
    districts: 'The Star · PGA Parkway · Preston Road Corridor',
    focus: 'Rapid-growth developments, halo-lit letters & modern storefront fascias.',
  },
  {
    slug: 'mckinney',
    name: 'McKinney',
    county: 'Collin County',
    districts: 'Historic Downtown · Craig Ranch · US-380 Corridor',
    focus: 'Historic preservation standards & commercial plaza exterior packages.',
  },
  {
    slug: 'carrollton',
    name: 'Carrollton',
    county: 'Dallas / Denton County',
    districts: 'Belt Line · Koreatown · Valwood Industrial Hub',
    focus: 'Storefront channel letters, lightboxes & commercial warehouse signage.',
  },
  {
    slug: 'richardson',
    name: 'Richardson',
    county: 'Dallas / Collin County',
    districts: 'Telecom Corridor · CityLine · Arapaho Tech Center',
    focus: 'Tech campus signage, monument pylons & full interior ADA packages.',
  },
  {
    slug: 'allen',
    name: 'Allen',
    county: 'Collin County',
    districts: 'Watters Creek · US-75 · Allen Premium Outlets',
    focus: 'Retail storefront compliance & master-planned commercial development rules.',
  },
]

export default function LocationsSection() {
  return (
    <section className="paper sec" id="locations">
      <div className="wrap">
        <div className="eyebrow">Where we work</div>
        <h2 className="disp sec-h">Local knowledge. Metro-wide reach.</h2>
        <p className="loc-intro">
          From storefronts and corporate offices to shopping centers and mixed-use campuses, we guide North Texas businesses through city sign codes, municipal permits, and turnkey installation.
        </p>

        {/* Symmetrical 3x3 Hub Directory */}
        <div className="loc-hub-grid">
          {LOCATIONS_LIST.map((loc) => (
            <Link key={loc.slug} href={`/locations/${loc.slug}`} className="loc-hub-card">
              <div className="loc-card-header">
                <span className="loc-pin-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div className="loc-title-group">
                  <h3 className="loc-card-city">{loc.name}</h3>
                  <span className="loc-card-county">{loc.county}</span>
                </div>
                <span className="loc-card-arrow" aria-hidden="true">↗</span>
              </div>

              <div className="loc-card-body">
                <div className="loc-card-districts">{loc.districts}</div>
                <p className="loc-card-focus">{loc.focus}</p>
              </div>

              <div className="loc-card-footer">
                <span>Explore {loc.name} signs &amp; permits</span>
                <span className="loc-arrow-slide" aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Full-Width Consultation Banner */}
        <div className="location-banner">
          <div className="location-banner-copy">
            <span className="location-banner-tag">Expanded DFW Coverage</span>
            <h3>Installing across all 13 North Texas counties</h3>
            <p>
              Working outside these 9 hubs? We actively survey, permit, and install in Denton, Grapevine, Southlake, Lewisville, Grand Prairie, Garland, Irving, and throughout the entire DFW Metroplex.
            </p>
          </div>
          <div className="location-banner-actions">
            <Link href="/quote" className="btn btn-blue">
              Tell us about your location →
            </Link>
            <a href="tel:2147144623" className="btn btn-line">
              Call 214-714-4623
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
