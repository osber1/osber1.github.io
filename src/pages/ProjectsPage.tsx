import { profile } from '../data/profile'
import { ProjectCard } from '../components/home/ProjectsSection'
import PageBand from './PageBand'

export default function ProjectsPage() {
  return (
    <main>
      <PageBand eyebrow={profile.projects.eyebrow} title={profile.projects.title} />
      <section className="page-content" aria-label="All projects">
        <div className="container page-stack">
          {profile.projects.items.map(p => <ProjectCard key={p.name} project={p} />)}
        </div>
      </section>
    </main>
  )
}
