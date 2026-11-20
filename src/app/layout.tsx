import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: { default: 'Sign Zone | Custom Business Signs in Dallas–Fort Worth', template: '%s | Sign Zone DFW' },
  description: 'Channel letters, monument, pylon, storefront, interior and vehicle signs for Dallas–Fort Worth businesses. Designed, permitted, built and installed by one team.',
  icons: {
    icon: '/images/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=Inter:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Mobile sticky CTA bar */}
        <div className="mbar">
          <a className="btn btn-ghost" href="tel:2147144623">Call</a>
          <a className="btn btn-ghost" href="sms:2147144623">Text</a>
          <a className="btn btn-blue" href="/quote" style={{ flex: 2 }}>Free quote</a>
        </div>
      </body>
    </html>
  )
}
