import { useState } from 'react'
import type { Technique } from '../types'

interface Props {
  techniques: Technique[]
  maxSelections: number
  onSubmit: (selectedIds: string[]) => void
  submitLabel: string
}

export function TechniquePicker({ techniques, maxSelections, onSubmit, submitLabel }: Props) {
  const [selected, setSelected] = useState<string[]>([])
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggle = (id: string) => {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id)
      if (prev.length >= maxSelections) return prev
      return [...prev, id]
    })
  }

  return (
    <div>
      <div className="picker-grid">
        {techniques.map((t) => {
          const chosen = selected.includes(t.id)
          const open = expanded === t.id
          return (
            <div
              key={t.id}
              className={`pick-card ${chosen ? 'selected' : ''}`}
              role="button"
              tabIndex={0}
              onClick={() => toggle(t.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggle(t.id)
                }
              }}
            >
              <h4>{t.name}</h4>
              <div style={{ color: 'var(--ink-dim)', fontSize: '0.9rem' }}>{t.description}</div>
              <button
                className="btn ghost"
                style={{ marginTop: 8, padding: '4px 10px', fontSize: '0.82rem' }}
                onClick={(e) => {
                  e.stopPropagation()
                  setExpanded(open ? null : t.id)
                }}
              >
                {open ? 'Hide how-to' : 'Show how-to'}
              </button>
              {open && (
                <div className="how">
                  <strong>How:</strong>
                  <ol style={{ margin: '6px 0 0 18px', padding: 0 }}>
                    {t.howTo.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                  {t.contraindications && t.contraindications.length > 0 && (
                    <div style={{ marginTop: 8 }}>
                      <em>Caution:</em> {t.contraindications.join('; ')}
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <span className="score-pill">
          Selected {selected.length} / {maxSelections}
        </span>
        <button
          className="btn primary"
          disabled={selected.length !== maxSelections}
          onClick={() => onSubmit(selected)}
        >
          {submitLabel}
        </button>
      </div>
    </div>
  )
}
