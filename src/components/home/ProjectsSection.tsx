import { profile, type Project } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'
import ArrowLink from '../ui/ArrowLink'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <h3>{project.name}</h3>
      <p>{project.lines.join(' ')}</p>
      <ArrowLink href={project.cta.href} tone="blue">{project.cta.label}</ArrowLink>
    </article>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" data-section="projects" className="projects">
      <div className="container">
        <SectionHeading eyebrow={profile.projects.eyebrow} title={profile.projects.title} align="center" />
        {profile.projects.items.map(p => <ProjectCard key={p.name} project={p} />)}
      </div>
    </section>
  )
}
