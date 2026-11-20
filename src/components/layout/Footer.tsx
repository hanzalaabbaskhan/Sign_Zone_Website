import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="wrap cols">
        <div className="col">
          <Image
            src="/images/logo.png"
            alt="Sign Zone"
            width={180}
            height={56}
            style={{ height: 56, width: 'auto', alignSelf: 'flex-start' }}
          />
          <span>Custom business signs for Dallas–Fort Worth.</span>
          <span>Serving the Greater Dallas–Fort Worth Metroplex, TX</span>
        </div>

        <nav aria-label="Signs">
          <strong>Signs</strong>
          <Link href="/channel-letters">Channel letters</Link>
          <Link href="/#signs">Monument signs</Link>
          <Link href="/#signs">Pylon &amp; pole signs</Link>
          <Link href="/#signs">Storefront &amp; cabinet signs</Link>
          <Link href="/#signs">Interior &amp; ADA</Link>
          <Link href="/#signs">Vehicle wraps</Link>
        </nav>

        <nav aria-label="Plan">
          <strong>Plan</strong>
          <Link href="/toolkit">Sign Toolkit</Link>
          <Link href="/#process">How it works</Link>
          <Link href="/#financing">Financing</Link>
          <Link href="/#resources">Guides</Link>
          <Link href="/quote">Repair &amp; maintenance</Link>
          <Link href="/quote">Multi-location programs</Link>
        </nav>

        <div className="col">
          <strong>Talk to us</strong>
          <a href="tel:2147144623" style={{ color: '#fff', fontWeight: 700, fontSize: 18 }}>214-714-4623</a>
          <a href="mailto:Alex@signzoneusa.com">Alex@signzoneusa.com</a>
          <span>Mon–Fri · 8:00 AM – 6:00 PM</span>
        </div>
      </div>

      <div className="wrap legal">
        <span>© 2026 Sign Zone · www.signzoneusa.com · Licensed TDLR Electrical Sign Contractor</span>
        <span>Privacy · Terms · Accessibility</span>
      </div>
    </footer>
  )
}
