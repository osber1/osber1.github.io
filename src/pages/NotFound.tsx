import { Link } from 'react-router-dom'

// Stub: Step E restyles.
export default function NotFound() {
  return (
    <main className="container">
      <h1>404</h1>
      <p>That page doesn't exist.</p>
      <Link to="/">← Home</Link>
    </main>
  )
}
