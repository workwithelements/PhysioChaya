import { useEffect } from 'react'
import { useApp } from '../store'

export function About() {
  const setGus = useApp((s) => s.setGus)
  useEffect(() => {
    setGus('idle', "I'm Gus! Thanks for learning with me.")
  }, [setGus])

  return (
    <div className="panel" style={{ maxWidth: 760, margin: '0 auto' }}>
      <h2>About PhysioChaya</h2>
      <p>
        PhysioChaya is an interactive learning tool for trainee physiotherapists, covering the ankle, knee, hip,
        shoulder, elbow, and wrist. It has three modes:
      </p>
      <ul>
        <li>
          <strong>Explore</strong> — a 3D body you can rotate and zoom; click any joint to see its anatomy, common
          injuries, and suggested strengthening exercises.
        </li>
        <li>
          <strong>Case studies</strong> — the coursework format students are assessed on: read the history and
          findings, identify the pathology, then pick three assessments, one manual therapy, and one soft tissue
          technique.
        </li>
        <li>
          <strong>Quick quiz</strong> — fast multiple-choice recall across all six joints.
        </li>
      </ul>

      <h3>Who is Gus?</h3>
      <p>
        Gus is your teacher — a friendly ginger cat. He lives in the corner of every page. He'll nudge you when you're
        stuck, celebrate when you're right, and walk you through the reasoning when you're not.
      </p>

      <h3>Disclaimer</h3>
      <p>
        <span className="disclaimer">Important</span>
        This tool is an educational prototype for training purposes only. The content is illustrative and does not
        constitute medical advice. Always defer to your course materials, clinical educators, and qualified
        physiotherapists for real patient care.
      </p>

      <h3>Tech</h3>
      <p style={{ color: 'var(--ink-dim)' }}>
        Built with React, TypeScript, Vite, three.js and react-three-fiber. The 3D body is a lightweight primitive
        figure so the app loads instantly — you can swap in a rigged glTF anatomy model later if you want photoreal
        visuals.
      </p>
    </div>
  )
}
