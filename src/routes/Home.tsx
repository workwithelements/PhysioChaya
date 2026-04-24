import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useApp } from '../store'
import { GUS_LINES, randLine } from '../data/gusLines'

export function Home() {
  const setGus = useApp((s) => s.setGus)
  useEffect(() => {
    setGus('happy', randLine(GUS_LINES.welcome))
  }, [setGus])

  return (
    <>
      <section className="hero">
        <div>
          <h1>Learn physio by poking a 3D body — with Gus.</h1>
          <p>
            PhysioChaya is a hands-on learning tool for trainee physiotherapists. Explore the six major joints of the
            body, work through patient case studies the way you will in clinic, and quiz yourself as you go. Gus — a
            friendly ginger cat — hangs out in the corner to cheer you on and explain the tricky bits.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
            <Link className="btn primary" to="/explore">
              Explore the body
            </Link>
            <Link className="btn" to="/cases">
              Try a case study
            </Link>
            <Link className="btn ghost" to="/quiz">
              Quick quiz
            </Link>
          </div>
        </div>
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <svg viewBox="0 0 240 240" width="260" height="260" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <defs>
              <radialGradient id="glow" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#ff8d3a" stopOpacity="0.45" />
                <stop offset="70%" stopColor="#ff8d3a" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="120" cy="120" r="110" fill="url(#glow)" />
            <g stroke="#ffb779" strokeWidth="2" fill="none">
              <circle cx="120" cy="60" r="22" />
              <line x1="120" y1="82" x2="120" y2="150" />
              <line x1="120" y1="100" x2="86" y2="132" />
              <line x1="120" y1="100" x2="154" y2="132" />
              <line x1="120" y1="150" x2="94" y2="198" />
              <line x1="120" y1="150" x2="146" y2="198" />
            </g>
            {[
              [120, 82],
              [120, 100],
              [120, 150],
              [86, 132],
              [154, 132],
              [94, 198],
              [146, 198],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="6" fill="#ff8d3a" />
            ))}
          </svg>
        </div>
      </section>

      <section className="mode-grid" style={{ marginTop: 18 }}>
        <Link className="mode-card" to="/explore">
          <h3>Explore</h3>
          <p>Rotate a 3D body, click the ankle, knee, hip, shoulder, elbow or wrist, and read through anatomy, common
          injuries and strengthening exercises.</p>
        </Link>
        <Link className="mode-card" to="/cases">
          <h3>Case studies</h3>
          <p>Read a social history and assessment findings, identify the pathology, then choose three assessments, one
          manual therapy and one soft tissue technique. Gus reviews your reasoning at the end.</p>
        </Link>
        <Link className="mode-card" to="/quiz">
          <h3>Quick quiz</h3>
          <p>Five multiple-choice questions across the six joints. Fast recall, instant feedback.</p>
        </Link>
      </section>
    </>
  )
}
