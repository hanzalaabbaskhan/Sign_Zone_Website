'use client'

interface Option { value: string; label: string }

interface ChipGroupProps {
  options: Option[]
  value: string
  onChange: (v: string) => void
  dark?: boolean
}

export default function ChipGroup({ options, value, onChange, dark }: ChipGroupProps) {
  return (
    <div className="chips">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className={`chip${dark ? ' chip-d' : ''}`}
          aria-pressed={value === opt.value}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
