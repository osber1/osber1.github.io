import { profile, type Project } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'
import ArrowLink from '../ui/ArrowLink'
import javaLogo from '../../assets/project-java-logo.png'
import javaLogo2x from '../../assets/project-java-logo@2x.png'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <img
        className="project-card__image"
        src={javaLogo}
        srcSet={`${javaLogo} 1x, ${javaLogo2x} 2x`}
        width={322}
        height={322}
        alt="Java"
        loading="lazy"
        decoding="async"
      />
      <div className="project-card__text">
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__desc">
          {project.lines.map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
        <ArrowLink href={project.cta.href} tone="blue">{project.cta.label}</ArrowLink>
      </div>
    </article>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" data-section="projects" className="projects">
      <div className="container">
        <SectionHeading eyebrow={profile.projects.eyebrow} title={profile.projects.title} align="center" />
        <div className="projects-list">
          {profile.projects.items.map(p => <ProjectCard key={p.name} project={p} />)}
        </div>
      </div>
    </section>
  )
}
