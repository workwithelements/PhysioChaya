import { Routes, Route, NavLink, Link } from 'react-router-dom'
import { Home } from './routes/Home'
import { Explore } from './routes/Explore'
import { Quiz } from './routes/Quiz'
import { CaseStudy } from './routes/CaseStudy'
import { About } from './routes/About'
import { Gus } from './ui/Gus'

export function App() {
  return (
    <div className="shell">
      <header className="topbar">
        <Link to="/" className="brand">
          <svg className="brand-mark" viewBox="0 0 100 100" aria-hidden>
            <defs>
              <linearGradient id="b-ginger" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ffb273" />
                <stop offset="100%" stopColor="#f08848" />
              </linearGradient>
            </defs>
            <path d="M20 38 L28 18 L40 32 Z" fill="url(#b-ginger)" />
            <path d="M80 38 L72 18 L60 32 Z" fill="url(#b-ginger)" />
            <ellipse cx="50" cy="55" rx="30" ry="28" fill="url(#b-ginger)" />
            <circle cx="42" cy="52" r="2.2" fill="#1a120a" />
            <circle cx="58" cy="52" r="2.2" fill="#1a120a" />
            <path d="M48 60 L52 60 L50 63 Z" fill="#7a3d1d" />
          </svg>
          PhysioGus
        </Link>
        <nav className="nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/explore">Explore</NavLink>
          <NavLink to="/cases">Cases</NavLink>
          <NavLink to="/quiz">Quiz</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/cases" element={<CaseStudy />} />
          <Route path="/cases/:caseId" element={<CaseStudy />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="footer">
        <span className="disclaimer">Disclaimer</span>
        Educational prototype only — not medical advice. Always defer to your course and clinical educators.
      </footer>

      <Gus />
    </div>
  )
}
