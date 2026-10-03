import javaSymbol from '../assets/tech-java-symbol.png'
import javaSymbol2x from '../assets/tech-java-symbol@2x.png'
import links from './links.json'

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
  hero: { title: ['Senior', 'Back-End Developer'] },                   // rendered "Senior<br/>Back-End Developer"
  about: {
    eyebrow: 'a little', title: 'About Me', greeting: 'Hello!',
    text: 'I am a Senior Java developer with almost 4 years of experience. I have experience working with technologies like Java, Liquibase, Spring, MYSQL, PostgreSQL, Hibernate, Groovy, Docker, Kubernetes, RabbitMQ, Redis, ELK stack and Grafana.',
    cta: { label: '< get in touch >', href: '#contacts' },
  },
  technologies: { eyebrow: 'I have', title: ['Experience Working', 'With Technologies Like'],
    items: [{ name: 'Java', src: javaSymbol, src2x: javaSymbol2x }] },
  experience: { eyebrow: 'MINE', title: 'Work Experience', items: [
    { years: '2024', role: 'senior java developer', company: '4FINANCE Company' },
    { years: '2022-2024', role: 'java developer', company: '4FINANCE Company' },
    { years: 'SINCE 2022', role: 'Freelance Java Developer', company: 'GILOSA Studio' },
    { years: '2021-2022', role: 'JUNIOR java developer', company: '4FINANCE Company' },
    { years: '2020-2021', role: 'Junior Java Developer', company: 'INTERNATIONAL BUSINESS SETTLEMENT Company' },
  ] },
  certification: { eyebrow: '23 September 2022', title: 'Certifications',
    name: 'Oracle Certified Professional: Java SE 11 Developer',
    text: 'Candidates who hold this certification have demonstrated proficiency in Java (Standard Edition) software development recognized by a wide range of world-wide industries. They have also exhibited thorough and broad knowledge of the Java programming language, coding practices and utilization of new features incorporated into Java SE 11. By passing the required exams, a certified individual proves fluency in Java SE and acquisition of the skills required to be a Java software developer.',
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
  footer: { text: 'Osvaldas Bernatavičius senior Java Developer with almost 4 years of experience.',
    quickTitle: 'Quick Link', socialTitle: 'Social Media', company: 'GILOSA MB', rights: 'All rights reserved' },
}

export type Project = (typeof profile.projects.items)[number]
