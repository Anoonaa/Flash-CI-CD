import { useState } from 'react'
import './App.css'

function App() {
  const [transactions, setTransactions] = useState(24)

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <p className="eyebrow">Flash Group fintech demo</p>
        <h1>Payments that move at the speed of the deal.</h1>
        <p className="lede">
          A small React surface for GitHub Actions: basic checks, visual summaries,
          and a Playwright pipeline that proves the site is live.
        </p>

        <div className="stats" aria-label="Pipeline snapshot">
          <article>
            <span>Live route</span>
            <strong>React + Vite</strong>
          </article>
          <article>
            <span>Demo audience</span>
            <strong>Flash Group</strong>
          </article>
          <article>
            <span>Release signal</span>
            <strong>{transactions} transactions</strong>
          </article>
        </div>

        <div className="actions">
          <button
            type="button"
            className="primary-action"
            onClick={() => setTransactions((value) => value + 1)}
          >
            Process test transaction
          </button>
          <p className="status" aria-live="polite">
            Transactions processed: {transactions}
          </p>
        </div>
      </section>

      <aside className="side-panel" aria-label="Pipeline notes">
        <div className="note-card">
          <span>Basic pipeline</span>
          <strong>Echo success in Actions</strong>
        </div>
        <div className="note-card">
          <span>Visual pipeline</span>
          <strong>Readable step summary</strong>
        </div>
        <div className="note-card accent">
          <span>Playwright pipeline</span>
          <strong>Screenshot + report artifact</strong>
        </div>
      </aside>
    </main>
  )
}

export default App
