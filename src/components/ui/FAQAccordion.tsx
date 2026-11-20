'use client'
import { useState } from 'react'

interface FAQItem { q: string; a: string }

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq">
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button
            type="button"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            {item.q}
            <span className="pm">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && <p>{item.a}</p>}
        </div>
      ))}
    </div>
  )
}
