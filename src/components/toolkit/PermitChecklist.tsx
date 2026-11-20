'use client'
import { useState, useEffect } from 'react'
import ChipGroup from '@/components/ui/ChipGroup'

const CITIES = ['Dallas','Fort Worth','Arlington','Plano','Frisco','Irving','Garland','McKinney','Carrollton','Richardson','Allen','Denton']

type Item = { title: string; desc: string; who: string }

function getItems(city: string, type: string, lit: boolean): Item[] {
  const items: Item[] = [
    { title: 'Registered sign contractor', desc: `The installing contractor must be registered with ${city} before a sign permit can be issued.`, who: 'Sign Zone handles' },
    { title: 'Sign drawings with dimensions & materials', desc: 'Elevation showing the sign on the building or site, size, height and attachment details.', who: 'Sign Zone prepares' },
  ]
  if (type === 'wall' || type === 'blade') items.push({ title: 'Building elevation & wall measurements', desc: 'Frontage length and wall area, used to check the allowed sign area.', who: 'From our site survey' })
  if (type === 'monument' || type === 'pylon') {
    items.push({ title: 'Site plan with setbacks', desc: 'Location of the sign relative to property lines, driveways and visibility triangles.', who: 'Sign Zone prepares' })
    items.push({ title: 'Engineered foundation & structure', desc: 'Sealed structural drawings for wind load and footing.', who: 'Our engineer seals' })
  }
  items.push({ title: 'Property owner / landlord authorization', desc: 'Written approval, usually against the lease sign criteria.', who: 'You sign · we send it' })
  if (lit) {
    items.push({ title: 'Electrical permit', desc: 'Lit signs need a separate electrical permit, installed by a licensed electrical sign contractor with UL-listed components.', who: 'Sign Zone handles' })
    items.push({ title: 'Dedicated circuit within reach', desc: 'A 120V circuit near the sign location, often on a timer or photocell.', who: 'Checked at survey' })
  }
  if (city === 'Dallas') items.push({ title: 'Special sign district check', desc: 'Some Dallas areas need extra review before approval.', who: 'Sign Zone checks' })
  items.push({ title: 'Permit fees & inspection', desc: 'Fees are based on sign type and size. A final inspection is scheduled after install.', who: 'Included in your quote' })
  return items
}

export default function PermitChecklist() {
  const [city, setCity] = useState('Dallas')
  const [type, setType] = useState('wall')
  const [lit, setLit] = useState(true)
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => { setItems(getItems(city, type, lit)) }, [city, type, lit])

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      <div className="panel" style={{ flex: '1 1 320px', minWidth: 0 }}>
        <h2 style={{ margin: 0, fontSize: 26, color: 'var(--navy)' }}>Permit checklist</h2>
        <p style={{ margin: '8px 0 0', color: 'var(--muted)', fontSize: 15 }}>See what your city will ask for. We prepare and file all of it for Sign Zone customers.</p>

        <label className="lbl" htmlFor="pc" style={{ marginTop: 22, display: 'block' }}>City</label>
        <select id="pc" className="inp" value={city} onChange={e => setCity(e.target.value)}>
          {CITIES.map(c => <option key={c}>{c}</option>)}
        </select>

        <span className="lbl" style={{ marginTop: 22, display: 'block' }}>Sign type</span>
        <ChipGroup options={[{ value: 'wall', label: 'Wall / channel letters' }, { value: 'blade', label: 'Blade / projecting' }, { value: 'monument', label: 'Monument' }, { value: 'pylon', label: 'Pylon / pole' }]} value={type} onChange={setType} />

        <label style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 22, cursor: 'pointer', fontWeight: 600 }}>
          <input type="checkbox" checked={lit} onChange={e => setLit(e.target.checked)} style={{ width: 22, height: 22, accentColor: 'var(--blue)' }} />
          Illuminated (has power)
        </label>
      </div>

      <div className="panel" style={{ flex: '2 1 480px', minWidth: 0 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, alignItems: 'baseline', marginBottom: 16 }}>
          <h3 style={{ margin: 0, fontSize: 22, color: 'var(--navy)' }}>{city}: what you&apos;ll need</h3>
          <span className="badge">{items.length} items</span>
        </div>
        <ol className="checklist">
          {items.map((item, i) => (
            <li key={i}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0050F0" strokeWidth="2.5" style={{ flex: '0 0 20px' }}><polyline points="20 6 9 17 4 12"/></svg>
              <span>
                <strong style={{ display: 'block' }}>{item.title}</strong>
                <span style={{ display: 'block', fontSize: 14, color: 'var(--muted)', marginTop: 2 }}>{item.desc}</span>
                <span className="who">{item.who}</span>
              </span>
            </li>
          ))}
        </ol>
        <p style={{ fontSize: 12, lineHeight: 1.5, color: 'var(--muted2)', margin: '14px 0 0' }}>
          General guide. Each city&apos;s sign code and zoning district can add steps. We confirm requirements during your site survey.
        </p>
      </div>
    </div>
  )
}
