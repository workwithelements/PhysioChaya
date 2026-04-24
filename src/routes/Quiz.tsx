import { useEffect, useMemo, useState } from 'react'
import { QUIZ } from '../data/quiz'
import type { QuizQuestion } from '../types'
import { useApp } from '../store'
import { GUS_LINES, randLine } from '../data/gusLines'

const QUESTION_COUNT = 5

function shuffle<T>(arr: T[]): T[] {
  const out = arr.slice()
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

export function Quiz() {
  const setGus = useApp((s) => s.setGus)
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => shuffle(QUIZ).slice(0, QUESTION_COUNT))
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = useMemo(() => questions[index], [questions, index])

  useEffect(() => {
    setGus('talking', randLine(GUS_LINES.quizStart))
  }, [setGus])

  const answer = (i: number) => {
    if (picked !== null) return
    setPicked(i)
    const correct = i === q.answerIndex
    if (correct) {
      setScore((s) => s + 1)
      setGus('happy', randLine(GUS_LINES.correct))
    } else {
      setGus('talking', `${randLine(GUS_LINES.wrong)} ${q.explanation}`)
    }
  }

  const next = () => {
    if (index + 1 >= questions.length) {
      setDone(true)
      setGus('happy', `All done — you scored ${score} out of ${questions.length}. Nice work.`)
      return
    }
    setIndex((i) => i + 1)
    setPicked(null)
  }

  const restart = () => {
    setQuestions(shuffle(QUIZ).slice(0, QUESTION_COUNT))
    setIndex(0)
    setPicked(null)
    setScore(0)
    setDone(false)
    setGus('talking', randLine(GUS_LINES.quizStart))
  }

  if (done) {
    return (
      <div className="quiz panel">
        <h2>Round complete</h2>
        <p style={{ fontSize: '1.1rem' }}>
          You scored <span className="score-pill">{score} / {questions.length}</span>.
        </p>
        <p style={{ color: 'var(--ink-dim)' }}>
          {score === questions.length
            ? 'Clean sweep!'
            : score >= Math.ceil(questions.length * 0.6)
            ? "Solid — review the ones you missed and go again."
            : "Plenty of room to grow — go take a look at Explore or a case study, then come back."}
        </p>
        <button className="btn primary" onClick={restart}>
          Play again
        </button>
      </div>
    )
  }

  return (
    <div className="quiz panel">
      <div className="progress">
        Question {index + 1} of {questions.length} · Score {score}
      </div>
      <h2 style={{ marginTop: 4 }}>{q.question}</h2>
      <div className="choices">
        {q.choices.map((c, i) => {
          let cls = 'choice'
          if (picked !== null) {
            if (i === q.answerIndex) cls += ' correct'
            else if (i === picked) cls += ' wrong'
          }
          return (
            <button key={i} className={cls} onClick={() => answer(i)} disabled={picked !== null}>
              {c}
            </button>
          )
        })}
      </div>
      {picked !== null && (
        <div style={{ marginTop: 18 }}>
          <p style={{ color: 'var(--ink-dim)' }}>{q.explanation}</p>
          <button className="btn primary" onClick={next}>
            {index + 1 >= questions.length ? 'See score' : 'Next question'}
          </button>
        </div>
      )}
    </div>
  )
}
