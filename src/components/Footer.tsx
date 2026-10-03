import { profile } from '../data/profile'

// Stub: Step A replaces this with the full footer.
export default function Footer() {
  return (
    <footer data-section="footer" className="footer">
      <div className="container">
        <span>{new Date().getFullYear()} {profile.footer.rights}</span>
      </div>
    </footer>
  )
}
