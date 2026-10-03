import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Stats from '../components/home/Stats'
import Technologies from '../components/home/Technologies'
import Experience from '../components/home/Experience'
import Certifications from '../components/home/Certifications'
import Contact from '../components/home/Contact'
import { BlogCards } from '../components/home/BlogCards'
import LinksPills from '../components/home/LinksPills'
import { ProjectsSection } from '../components/home/ProjectsSection'
import Faq from '../components/home/Faq'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <Technologies />
      <div className="band-dark">
        <Experience />
        <Certifications />
      </div>
      <Contact />
      <BlogCards />
      <LinksPills />
      <ProjectsSection />
      <Faq />
    </main>
  )
}
