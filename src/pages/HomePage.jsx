import profilePhoto from '../assets/profile.jpg'
import { AboutSection } from '../components/AboutSection.jsx'
import { ContactSection } from '../components/ContactSection.jsx'
import { IntroSection } from '../components/IntroSection.jsx'
import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <>
      <IntroSection profilePhoto={profilePhoto} />
      <AboutSection />
      <section className="home-projects content-width">
        <div>
          <p className="eyebrow">Explore my work</p>
          <h2>Projects in progress<br />and in practice.</h2>
        </div>
        <Link className="button button-primary" to="/items">
          Browse all projects <span aria-hidden="true">↗</span>
        </Link>
      </section>
      <ContactSection />
    </>
  )
}
