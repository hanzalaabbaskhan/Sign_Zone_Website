'use client'
import { useState } from 'react'
import { CL_STYLES } from '@/data/siteData'

export default function LightingDemo() {
  const [active, setActive] = useState(0)
  const s = CL_STYLES[active]

  return (
    <div>
      {/* Live preview */}
      <div className="demo" style={{ background: s.bg, borderRadius: 20 }}>
        <span style={{ color: s.color, textShadow: s.shadow, fontFamily: 'Archivo, sans-serif', fontWeight: 900, fontSize: 'clamp(48px,8vw,96px)', textTransform: 'uppercase' }}>
          SIGN ZONE
        </span>
      </div>

      {/* Style picker */}
      <div className="chips" role="tablist" aria-label="Lighting styles" style={{ marginTop: 20 }}>
        {CL_STYLES.map((style, i) => (
          <button
            key={style.id}
            type="button"
            role="tab"
            className="chip chip-d"
            aria-selected={active === i}
            onClick={() => setActive(i)}
          >
            {style.label}
          </button>
        ))}
      </div>

      {/* Style details */}
      <dl className="facts" style={{ marginTop: 24 }}>
        <div>
          <dt>Description</dt>
          <dd style={{ fontSize: 15, lineHeight: 1.5 }}>{s.desc}</dd>
        </div>
        <div>
          <dt>Best for</dt>
          <dd style={{ fontSize: 15, lineHeight: 1.5 }}>{s.best}</dd>
        </div>
        <div>
          <dt>Cost vs front-lit</dt>
          <dd>{s.cost}</dd>
        </div>
      </dl>
    </div>
  )
}
