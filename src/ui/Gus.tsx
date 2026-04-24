import { useEffect, useRef, useState } from 'react'
import { useApp } from '../store'
import type { GusMood } from '../types'

interface GusSvgProps {
  mood: GusMood
}

function GusSvg({ mood }: GusSvgProps) {
  const mouthPath =
    mood === 'happy'
      ? 'M44 62 Q50 70 56 62'
      : mood === 'talking'
      ? 'M46 62 Q50 66 54 62 Q50 68 46 62 Z'
      : mood === 'thinking'
      ? 'M45 63 Q50 63 55 63'
      : 'M45 62 Q50 65 55 62'
  const eyeR =
    mood === 'happy' ? (
      <path d="M38 48 Q42 45 46 48" stroke="#1a120a" strokeWidth="2" fill="none" strokeLinecap="round" />
    ) : (
      <circle cx="42" cy="48" r="2.2" fill="#1a120a" />
    )
  const eyeL =
    mood === 'happy' ? (
      <path d="M54 48 Q58 45 62 48" stroke="#1a120a" strokeWidth="2" fill="none" strokeLinecap="round" />
    ) : (
      <circle cx="58" cy="48" r="2.2" fill="#1a120a" />
    )
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="gus-figure" aria-label="Gus the ginger cat">
      <defs>
        <linearGradient id="ginger" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffb273" />
          <stop offset="100%" stopColor="#f08848" />
        </linearGradient>
        <linearGradient id="ginger-stripe" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#d96f2f" />
          <stop offset="100%" stopColor="#b8541c" />
        </linearGradient>
      </defs>
      {/* ears */}
      <path d="M20 38 L28 18 L40 32 Z" fill="url(#ginger)" />
      <path d="M80 38 L72 18 L60 32 Z" fill="url(#ginger)" />
      <path d="M24 34 L29 24 L35 32 Z" fill="#ffd9ba" />
      <path d="M76 34 L71 24 L65 32 Z" fill="#ffd9ba" />
      {/* face */}
      <ellipse cx="50" cy="55" rx="30" ry="28" fill="url(#ginger)" />
      {/* stripes */}
      <path d="M28 40 Q30 44 28 48" stroke="url(#ginger-stripe)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M72 40 Q70 44 72 48" stroke="url(#ginger-stripe)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M50 28 Q48 33 50 36 Q52 33 50 28" fill="url(#ginger-stripe)" />
      {/* cheeks */}
      <ellipse cx="38" cy="65" rx="6" ry="4" fill="#ffd9ba" opacity="0.55" />
      <ellipse cx="62" cy="65" rx="6" ry="4" fill="#ffd9ba" opacity="0.55" />
      {/* eyes */}
      {eyeR}
      {eyeL}
      {/* nose */}
      <path d="M48 56 L52 56 L50 59 Z" fill="#7a3d1d" />
      {/* mouth */}
      <path d={mouthPath} stroke="#1a120a" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* whiskers */}
      <path d="M18 60 L34 60" stroke="#1a120a" strokeWidth="0.8" />
      <path d="M18 64 L34 63" stroke="#1a120a" strokeWidth="0.8" />
      <path d="M82 60 L66 60" stroke="#1a120a" strokeWidth="0.8" />
      <path d="M82 64 L66 63" stroke="#1a120a" strokeWidth="0.8" />
      {/* collar */}
      <rect x="30" y="82" width="40" height="6" rx="3" fill="#2e5f8a" />
      <circle cx="50" cy="88" r="2.5" fill="#ffd166" stroke="#7a5a1a" strokeWidth="0.7" />
    </svg>
  )
}

export function Gus() {
  const mood = useApp((s) => s.gusMood)
  const line = useApp((s) => s.gusLine)
  const [open, setOpen] = useState(true)
  const lastLine = useRef(line)

  useEffect(() => {
    if (line !== lastLine.current) {
      lastLine.current = line
      setOpen(true)
    }
  }, [line])

  return (
    <div className={`gus ${open ? 'open' : 'closed'}`} aria-live="polite">
      {open && (
        <div className="gus-bubble">
          <button
            className="gus-close"
            aria-label="Hide Gus's message"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          <strong style={{ color: 'var(--accent-2)' }}>Gus:</strong> {line}
        </div>
      )}
      <button
        className="gus-toggle"
        aria-label={open ? 'Hide Gus' : 'Show Gus'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <GusSvg mood={mood} />
      </button>
    </div>
  )
}
