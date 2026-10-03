import { profile } from '../../data/profile'

export default function Hero() {
  return (
    <section id="home" data-section="home" className="hero">
      <div className="container">
        <h1 className="h2">
          {profile.hero.title[0]}
          <br />
          {profile.hero.title[1]}
        </h1>
        <p>{profile.name}</p>
      </div>
    </section>
  )
}
