import { profile } from '../data/profile'
import { ProjectCard } from '../components/home/ProjectsSection'

// Stub: Step E restyles.
export default function ProjectsPage() {
  return (
    <main className="container">
      <h1>Projects</h1>
      <p>Various sample projects.</p>
      {profile.projects.items.map(p => <ProjectCard key={p.name} project={p} />)}
    </main>
  )
}
