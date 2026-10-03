import javaSymbol from '../assets/tech-java-symbol.png'
import javaSymbol2x from '../assets/tech-java-symbol@2x.png'
import links from './links.json'
import springBoot from '../assets/tech/springboot.svg'
import hibernate from '../assets/tech/hibernate.svg'
import postgresql from '../assets/tech/postgresql.svg'
import redis from '../assets/tech/redis.svg'
import docker from '../assets/tech/docker.svg'
import kubernetes from '../assets/tech/kubernetes.svg'
import pulumi from '../assets/tech/pulumi.svg'
import typescript from '../assets/tech/typescript.svg'
import nestjs from '../assets/tech/nestjs.svg'
import grafana from '../assets/tech/grafana.svg'

export const nav = [
  { id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' }, { id: 'blog', label: 'Blog' }, { id: 'links', label: 'Links' },
  { id: 'projects', label: 'Projects' }, { id: 'contacts', label: 'Contacts' },
] as const                                   // header renders label uppercase via CSS; footer as-is

export const social = {
  linkedin: 'https://www.linkedin.com/in/osvaldas-bernatavicius',
  facebook: 'https://www.facebook.com/oosvas',
  github: 'https://github.com/osber1',
  email: 'osvaldas.bernatavicius@gmail.com',
}

export const profile = {
  brand: { wordmark: 'OSVALDAS B.', logoSvg: null as string | null },   // set to logo-form.svg import to use Figma "FORM"
  name: 'Osvaldas Bernatavičius',
  hero: {
    title: ['Senior', 'Back-End Developer'],
    rotator: { prefix: 'I build with', words: ['Java', 'Spring Boot', 'TypeScript', 'Kubernetes', 'PostgreSQL'] },
    tags: ['Spring Boot', 'PostgreSQL', 'Kubernetes', 'TypeScript'],
  },                   // rendered "Senior<br/>Back-End Developer"
  about: {
    eyebrow: 'a little', title: 'About Me', greeting: 'Hello!',
    text: 'I am a Senior Software Engineer with more than 5 years of experience. I have experience working with technologies like Java, Spring Boot, Hibernate, PostgreSQL, Redis, Docker, Kubernetes, Pulumi, TypeScript, NestJS, Grafana and ELK stack.',
    cta: { label: '< get in touch >', href: '#contacts' },
  },
  technologies: { eyebrow: 'I have', title: ['Experience Working', 'With Technologies Like'],
    items: [
      { name: 'Java', src: javaSymbol, src2x: javaSymbol2x as string | undefined },
      { name: 'Spring Boot', src: springBoot, src2x: undefined },
      { name: 'Hibernate', src: hibernate, src2x: undefined },
      { name: 'PostgreSQL', src: postgresql, src2x: undefined },
      { name: 'Redis', src: redis, src2x: undefined },
      { name: 'Docker', src: docker, src2x: undefined },
      { name: 'Kubernetes', src: kubernetes, src2x: undefined },
      { name: 'Pulumi', src: pulumi, src2x: undefined },
      { name: 'TypeScript', src: typescript, src2x: undefined },
      { name: 'NestJS', src: nestjs, src2x: undefined },
      { name: 'Grafana', src: grafana, src2x: undefined },
    ] },
  experience: { eyebrow: 'MINE', title: 'Work Experience', items: [
    { years: 'SINCE 2026', role: 'Senior Software Engineer', company: 'VIALET' },
    { years: 'SINCE 2022', role: 'Freelance Java Developer', company: 'GILOSA Studio' },
    { years: '2024-2026', role: 'Senior Java Developer', company: '4FINANCE Company' },
    { years: '2022-2024', role: 'Java Developer', company: '4FINANCE Company' },
    { years: '2021-2022', role: 'Junior Java Developer', company: '4FINANCE Company' },
    { years: '2020-2021', role: 'Junior Java Developer', company: 'INTERNATIONAL BUSINESS SETTLEMENT Company' },
  ] },
  certification: { eyebrow: '23 September 2022', title: 'Certifications',
    name: 'Oracle Certified Professional: Java SE 11 Developer',
    text: 'Oracle’s professional-level certification for Java SE 11. It confirms solid knowledge of the Java language, good coding practices and the features introduced in Java 11.',
    cta: { label: '< see more >', href: 'https://www.linkedin.com/in/osvaldas-bernatavicius/details/certifications/' } },
  contact: { eyebrow: 'iT’S important to me',
    title: ["I'm the head of GILOSA Studio", "and I'm a freelance Java developer,", 'so let’s get in touch and build', 'something new together!'],
    aside: '< OPEN FOR NEW PROJECTS >',
    buttons: [
      { label: 'Linkedin', href: social.linkedin }, { label: 'Facebook', href: social.facebook },
      { label: 'Github', href: social.github }, { label: 'CONTACT ME', href: `mailto:${social.email}`, primary: true },
    ] },
  blog: { eyebrow: 'some', title: 'Blog Post', count: 4, more: 'more >' },
  links: { eyebrow: 'All useful', title: 'Links In One Place', categories: links.categories },
  projects: { eyebrow: 'Various sample', title: 'Projects', items: [{
    name: 'Loans project',
    lines: ['Sample Java project in May 13, 2022', 'This is a project to show my knowledge in creating Spring applications. More detailed documentation can be found in GitHub Repository README.'],
    cta: { label: '< This is GitHub Repository. >', href: 'https://github.com/osber1/loans' },
    image: 'java' as const,
  }] },
  stats: [
    { value: 5, suffix: '+', label: 'Years of experience' },
    { value: 4, suffix: '', label: 'Companies worked with' },
    { value: 4, suffix: '', label: 'Java versions (8, 11, 17, 25)' },
    { value: 1, suffix: '', label: 'Oracle certification' },
  ],
  faq: {
    eyebrow: 'Good to know',
    title: 'Frequently Asked Questions',
    items: [
      { q: 'What do you work with?', a: 'Mostly back-end systems in Java with Spring Boot, Hibernate, PostgreSQL and Redis, deployed with Docker and Kubernetes. Lately I also build with TypeScript, NestJS and Pulumi.' },
      { q: 'Are you available for freelance work?', a: 'Yes. I run GILOSA Studio, where I plan, build, test and deploy back-end systems and APIs for clients.' },
      { q: 'What does freelance work with you look like?', a: 'Hourly billing with clear timelines and ongoing maintenance after the launch.' },
      { q: 'What is your current role?', a: 'I am a Senior Software Engineer at VIALET (since June 2026). Before that I spent five years at 4finance, from Junior to Senior Java Developer.' },
      { q: 'Are you certified?', a: 'Yes, I am an Oracle Certified Professional: Java SE 11 Developer (September 2022).' },
      { q: 'How can I contact you?', a: 'Email, LinkedIn, GitHub or Facebook, all linked in the contact section above. Email is the fastest.' },
    ],
  },
  footer: { text: 'Osvaldas Bernatavičius Senior Software Engineer with more than 5 years of experience.',
    quickTitle: 'Quick Link', socialTitle: 'Social Media', company: 'GILOSA MB', rights: 'All rights reserved' },
}

export type Project = (typeof profile.projects.items)[number]
