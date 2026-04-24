import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CASES, caseById } from '../data/cases'
import { pathologyById } from '../data/pathologies'
import { ASSESSMENTS, assessmentById } from '../data/assessments'
import { MANUAL_THERAPY, manualTherapyById } from '../data/manualTherapy'
import { SOFT_TISSUE, softTissueById } from '../data/softTissue'
import { useApp } from '../store'
import { GUS_LINES, randLine } from '../data/gusLines'
import { TechniquePicker } from '../ui/TechniquePicker'
import type { CaseStudy as Case, JointId, Technique } from '../types'

type Step = 'read' | 'pathology' | 'assessments' | 'manual' | 'soft' | 'review'

interface Choices {
  pathologyId: string | null
  assessmentIds: string[]
  manualTherapyId: string | null
  softTissueId: string | null
}

// Pull techniques that are targeted at a joint region + extras to make the picker non-trivial.
function pickPool<T extends Technique>(all: T[], joint: JointId, minCount: number): T[] {
  const onTarget = all.filter((t) => t.targets.includes(joint))
  if (onTarget.length >= minCount) return onTarget
  // Pad with some generally-applicable techniques so we always have options.
  const others = all.filter((t) => !onTarget.includes(t))
  return [...onTarget, ...others].slice(0, minCount)
}

function verdict(
  id: string,
  appropriate: string[],
  all: Technique[],
): { label: string; cls: 'good' | 'meh' | 'bad'; note: string } {
  if (appropriate.includes(id)) return { label: '✓ Appropriate', cls: 'good', note: 'Fits the pathology — good pick.' }
  const t = all.find((x) => x.id === id)
  const related = t?.targets.length ? t.targets.join(', ') : ''
  return {
    label: '✗ Not indicated here',
    cls: 'bad',
    note: related
      ? `Better suited to problems around the ${related}. Try again with the pathology in mind.`
      : 'Not a first-line choice for this pathology.',
  }
}

export function CaseStudy() {
  const { caseId } = useParams()
  const setGus = useApp((s) => s.setGus)
  const c = caseId ? caseById(caseId) : undefined

  useEffect(() => {
    if (c) setGus('talking', randLine(GUS_LINES.caseStart))
  }, [c, setGus])

  if (!c) return <CaseList />

  return <CaseRunner theCase={c} />
}

function CaseList() {
  const setGus = useApp((s) => s.setGus)
  useEffect(() => {
    setGus('idle', 'Pick a case and work through it like you would in clinic.')
  }, [setGus])
  return (
    <div>
      <h2>Case studies</h2>
      <p style={{ color: 'var(--ink-dim)' }}>
        Each case starts with a social history and assessment findings. Your job: work out the pathology, then pick
        three assessments, one manual therapy technique, and one soft tissue technique. Gus reviews each choice.
      </p>
      <div className="case-list">
        {CASES.map((c) => (
          <Link key={c.id} to={`/cases/${c.id}`} className="mode-card">
            <div className="badges">
              <span className="badge">{c.jointRegion}</span>
              <span className="badge">
                {c.patient.name}, {c.patient.age}
              </span>
            </div>
            <h3 style={{ marginTop: 10 }}>{c.title}</h3>
            <p style={{ margin: 0, color: 'var(--ink-dim)' }}>{c.patient.occupation}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

function StepBar({ step }: { step: Step }) {
  const order: Step[] = ['read', 'pathology', 'assessments', 'manual', 'soft', 'review']
  const labels: Record<Step, string> = {
    read: '1 · Read',
    pathology: '2 · Pathology',
    assessments: '3 · Assessments',
    manual: '4 · Manual therapy',
    soft: '5 · Soft tissue',
    review: '6 · Review',
  }
  const currentIndex = order.indexOf(step)
  return (
    <div className="stepbar">
      {order.map((s, i) => (
        <span key={s} className={`step ${s === step ? 'active' : i < currentIndex ? 'done' : ''}`}>
          {labels[s]}
        </span>
      ))}
    </div>
  )
}

function CaseRunner({ theCase }: { theCase: Case }) {
  const setGus = useApp((s) => s.setGus)
  const [step, setStep] = useState<Step>('read')
  const [choices, setChoices] = useState<Choices>({
    pathologyId: null,
    assessmentIds: [],
    manualTherapyId: null,
    softTissueId: null,
  })

  const pathologyOptions = useMemo(
    () =>
      [theCase.correctPathologyId, ...theCase.distractorPathologyIds]
        .map((id) => pathologyById(id))
        .filter((p): p is NonNullable<ReturnType<typeof pathologyById>> => !!p)
        .sort(() => Math.random() - 0.5),
    [theCase],
  )

  const assessmentPool = useMemo(() => pickPool(ASSESSMENTS, theCase.jointRegion, 6), [theCase])
  const manualPool = useMemo(() => pickPool(MANUAL_THERAPY, theCase.jointRegion, 4), [theCase])
  const softPool = useMemo(() => pickPool(SOFT_TISSUE, theCase.jointRegion, 4), [theCase])

  const submitPathology = () => {
    if (!choices.pathologyId) return
    const correct = choices.pathologyId === theCase.correctPathologyId
    setGus(correct ? 'happy' : 'thinking', correct ? randLine(GUS_LINES.pathologyCorrect) : randLine(GUS_LINES.pathologyWrong))
    setStep('assessments')
  }

  const submitAssessments = (ids: string[]) => {
    setChoices((c) => ({ ...c, assessmentIds: ids }))
    setGus('talking', randLine(GUS_LINES.pickManualTherapy))
    setStep('manual')
  }
  const submitManual = (ids: string[]) => {
    setChoices((c) => ({ ...c, manualTherapyId: ids[0] ?? null }))
    setGus('talking', randLine(GUS_LINES.pickSoftTissue))
    setStep('soft')
  }
  const submitSoft = (ids: string[]) => {
    setChoices((c) => ({ ...c, softTissueId: ids[0] ?? null }))
    setGus('happy', randLine(GUS_LINES.reviewReady))
    setStep('review')
  }

  const restart = () => {
    setChoices({ pathologyId: null, assessmentIds: [], manualTherapyId: null, softTissueId: null })
    setStep('read')
    setGus('talking', randLine(GUS_LINES.caseStart))
  }

  return (
    <div className="case">
      <div>
        <Link to="/cases" className="btn ghost" style={{ marginBottom: 10 }}>
          ← All cases
        </Link>
      </div>
      <StepBar step={step} />

      <div className="panel">
        <h2 style={{ marginBottom: 4 }}>{theCase.title}</h2>
        <div className="case-meta">
          <span>
            <strong>{theCase.patient.name}</strong>, {theCase.patient.age}
          </span>
          <span>{theCase.patient.occupation}</span>
          {theCase.patient.sport && <span>{theCase.patient.sport}</span>}
          <span>Region: {theCase.jointRegion}</span>
        </div>

        {step === 'read' && (
          <div style={{ marginTop: 14 }}>
            <h3>Social history</h3>
            <p style={{ color: 'var(--ink-dim)', lineHeight: 1.6 }}>{theCase.socialHistory}</p>
            <h3>Assessment findings</h3>
            <p style={{ color: 'var(--ink-dim)', lineHeight: 1.6 }}>{theCase.assessmentFindings}</p>
            <button className="btn primary" onClick={() => setStep('pathology')}>
              I'm ready — what's the pathology?
            </button>
          </div>
        )}

        {step === 'pathology' && (
          <div style={{ marginTop: 14 }}>
            <h3>What's the most likely pathology?</h3>
            <div className="picker-grid">
              {pathologyOptions.map((p) => {
                const chosen = choices.pathologyId === p.id
                return (
                  <div
                    key={p.id}
                    className={`pick-card ${chosen ? 'selected' : ''}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => setChoices((c) => ({ ...c, pathologyId: p.id }))}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setChoices((c) => ({ ...c, pathologyId: p.id }))
                      }
                    }}
                  >
                    <h4>{p.name}</h4>
                    <div style={{ color: 'var(--ink-dim)', fontSize: '0.9rem' }}>{p.summary}</div>
                    <ul style={{ margin: '8px 0 0 18px', padding: 0, color: 'var(--ink-dim)', fontSize: '0.85rem' }}>
                      {p.keyFeatures.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
            <div style={{ marginTop: 14 }}>
              <button className="btn primary" disabled={!choices.pathologyId} onClick={submitPathology}>
                Lock in pathology
              </button>
            </div>
          </div>
        )}

        {step === 'assessments' && (
          <div style={{ marginTop: 14 }}>
            <h3>Choose 3 assessments</h3>
            <p style={{ color: 'var(--ink-dim)' }}>Pick the three you'd do to confirm or rule out your thinking.</p>
            <TechniquePicker
              techniques={assessmentPool}
              maxSelections={3}
              onSubmit={submitAssessments}
              submitLabel="Next: manual therapy"
            />
          </div>
        )}

        {step === 'manual' && (
          <div style={{ marginTop: 14 }}>
            <h3>Choose 1 manual therapy technique</h3>
            <TechniquePicker
              techniques={manualPool}
              maxSelections={1}
              onSubmit={submitManual}
              submitLabel="Next: soft tissue"
            />
          </div>
        )}

        {step === 'soft' && (
          <div style={{ marginTop: 14 }}>
            <h3>Choose 1 soft tissue technique</h3>
            <TechniquePicker
              techniques={softPool}
              maxSelections={1}
              onSubmit={submitSoft}
              submitLabel="See the review"
            />
          </div>
        )}

        {step === 'review' && (
          <Review theCase={theCase} choices={choices} onRestart={restart} />
        )}
      </div>
    </div>
  )
}

function Review({
  theCase,
  choices,
  onRestart,
}: {
  theCase: Case
  choices: Choices
  onRestart: () => void
}) {
  const correctPathology = pathologyById(theCase.correctPathologyId)
  const pathologyCorrect = choices.pathologyId === theCase.correctPathologyId

  let score = 0
  if (pathologyCorrect) score += 1
  score += choices.assessmentIds.filter((id) => theCase.appropriateAssessmentIds.includes(id)).length
  if (choices.manualTherapyId && theCase.appropriateManualTherapyIds.includes(choices.manualTherapyId)) score += 1
  if (choices.softTissueId && theCase.appropriateSoftTissueIds.includes(choices.softTissueId)) score += 1

  return (
    <div style={{ marginTop: 14 }}>
      <h3>Review</h3>
      <p>
        Score: <span className="score-pill">{score} / 6</span>
      </p>

      <div className="kv">
        <div>Pathology</div>
        <div>
          <span className={`verdict ${pathologyCorrect ? 'good' : 'bad'}`}>
            {pathologyCorrect ? '✓ Correct' : '✗ Not quite'}
          </span>
          You chose <strong>{pathologyById(choices.pathologyId ?? '')?.name ?? '—'}</strong>.
          {!pathologyCorrect && correctPathology && (
            <>
              {' '}
              The best fit is <strong>{correctPathology.name}</strong>.
            </>
          )}
        </div>
      </div>

      <h4 style={{ marginTop: 18 }}>Assessments</h4>
      {choices.assessmentIds.map((id) => {
        const t = assessmentById(id)
        if (!t) return null
        const v = verdict(id, theCase.appropriateAssessmentIds, ASSESSMENTS)
        return (
          <div key={id} className="card" style={{ background: 'var(--panel-2)', marginTop: 8, padding: 12, borderRadius: 10 }}>
            <span className={`verdict ${v.cls}`}>{v.label}</span>
            <strong>{t.name}</strong>
            <div style={{ color: 'var(--ink-dim)', marginTop: 4 }}>{v.note}</div>
          </div>
        )
      })}

      <h4 style={{ marginTop: 18 }}>Manual therapy</h4>
      {choices.manualTherapyId &&
        (() => {
          const t = manualTherapyById(choices.manualTherapyId)
          if (!t) return null
          const v = verdict(choices.manualTherapyId, theCase.appropriateManualTherapyIds, MANUAL_THERAPY)
          return (
            <div className="card" style={{ background: 'var(--panel-2)', marginTop: 8, padding: 12, borderRadius: 10 }}>
              <span className={`verdict ${v.cls}`}>{v.label}</span>
              <strong>{t.name}</strong>
              <div style={{ color: 'var(--ink-dim)', marginTop: 4 }}>{v.note}</div>
            </div>
          )
        })()}

      <h4 style={{ marginTop: 18 }}>Soft tissue</h4>
      {choices.softTissueId &&
        (() => {
          const t = softTissueById(choices.softTissueId)
          if (!t) return null
          const v = verdict(choices.softTissueId, theCase.appropriateSoftTissueIds, SOFT_TISSUE)
          return (
            <div className="card" style={{ background: 'var(--panel-2)', marginTop: 8, padding: 12, borderRadius: 10 }}>
              <span className={`verdict ${v.cls}`}>{v.label}</span>
              <strong>{t.name}</strong>
              <div style={{ color: 'var(--ink-dim)', marginTop: 4 }}>{v.note}</div>
            </div>
          )
        })()}

      <div className="panel" style={{ marginTop: 18, background: 'rgba(255, 141, 58, 0.08)' }}>
        <h4 style={{ marginTop: 0 }}>Gus's teaching notes</h4>
        <p style={{ color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{theCase.teachingNotes}</p>
      </div>

      <div style={{ marginTop: 16, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <button className="btn primary" onClick={onRestart}>
          Try this case again
        </button>
        <Link className="btn" to="/cases">
          Pick another case
        </Link>
      </div>
    </div>
  )
}

