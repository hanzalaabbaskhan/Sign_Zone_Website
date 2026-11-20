import type { Metadata } from 'next'
import QuoteWizard from '@/components/quote/QuoteWizard'

export const metadata: Metadata = {
  title: 'Get a Free Quote',
  description: 'Get a free quote for channel letters, monument signs, vehicle wraps and more. Sign Zone serves the entire Dallas–Fort Worth metroplex.',
}

export default function QuotePage() {
  return (
    <section className="paper" style={{ minHeight: '80vh' }}>
      <div className="wrap" style={{ paddingTop: 44, paddingBottom: 80 }}>
        <QuoteWizard />
      </div>
    </section>
  )
}
