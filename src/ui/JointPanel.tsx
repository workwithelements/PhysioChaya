import { useState } from 'react'
import { useApp } from '../store'
import { jointById } from '../data/joints'
import { exerciseById } from '../data/exercises'

type Tab = 'anatomy' | 'injuries' | 'exercises'

export function JointPanel() {
  const selected = useApp((s) => s.selectedJoint)
  const [tab, setTab] = useState<Tab>('anatomy')
  if (!selected) {
    return (
      <div className="panel">
        <h2>Pick a joint</h2>
        <p style={{ color: 'var(--ink-dim)' }}>
          Rotate the body (drag), zoom (scroll), and click one of the glowing markers to explore that joint. You'll see
          the anatomy in plain English, common injuries, and exercises to help.
        </p>
      </div>
    )
  }
  const joint = jointById(selected)
  if (!joint) return null
  return (
    <div className="panel">
      <h2 style={{ marginBottom: 0 }}>{joint.name}</h2>
      <div className="tabs">
        <button className={`tab ${tab === 'anatomy' ? 'active' : ''}`} onClick={() => setTab('anatomy')}>
          Anatomy
        </button>
        <button className={`tab ${tab === 'injuries' ? 'active' : ''}`} onClick={() => setTab('injuries')}>
          Common injuries
        </button>
        <button className={`tab ${tab === 'exercises' ? 'active' : ''}`} onClick={() => setTab('exercises')}>
          Exercises
        </button>
      </div>

      {tab === 'anatomy' && <p style={{ lineHeight: 1.55 }}>{joint.anatomy}</p>}

      {tab === 'injuries' && (
        <div className="list">
          {joint.commonInjuries.map((injury) => (
            <div key={injury.name} className="card">
              <h4>{injury.name}</h4>
              <p style={{ margin: 0, color: 'var(--ink-dim)' }}>{injury.description}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'exercises' && (
        <div className="list">
          {joint.exerciseIds.map((id) => {
            const ex = exerciseById(id)
            if (!ex) return null
            return (
              <div key={ex.id} className="card">
                <h4>{ex.name}</h4>
                <p style={{ margin: '0 0 6px 0', color: 'var(--ink-dim)' }}>{ex.description}</p>
                <ol>
                  {ex.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
