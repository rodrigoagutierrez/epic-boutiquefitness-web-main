import React from "react"
// plugin imports

import './LandingHero.scss';  // Importa los estilos CSS
import { Link, Trans } from "gatsby-plugin-react-i18next";


const LandingHero = () => {
  return (
    <section className="hero">
      <div className="hero-inner" data-reveal>
        <span className="kicker center">EPIC &middot; Valencia</span>
        <h1 className="hero-title boxxy">EXPERIENCE A WORKOUT LIKE NO OTHER</h1>
        <div className="hero-cta">
          <Link to="/join" className="stripeBg blueBg">
            <h2 className="boxxy">
              <Trans>Try for free</Trans>
            </h2>
          </Link>
        </div>
      </div>
      <div className="hero-scroll-cue" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}

export default LandingHero;