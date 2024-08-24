import React from "react"
import './landingHero.scss';  // Importa los estilos CSS

const LandingHero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1 className="hero-title">EXPERIENCE A WORKOUT LIKE NO OTHER</h1>
        <button className="hero-button">PRUEBA GRATIS</button>
      </div>
    </section>
  )
}

export default LandingHero;