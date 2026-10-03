import { ErrorBand } from './PageBand'
import PillLink from '../components/ui/PillLink'

export default function NotFound() {
  return (
    <ErrorBand eyebrow="Error 404" title="Page not found" lead="That page doesn't exist.">
      <PillLink href="/" variant="primary">BACK HOME</PillLink>
    </ErrorBand>
  )
}
