import React from "react"
// plugin imports

import './landingHero.scss';  // Importa los estilos CSS
import { Link, Trans } from "gatsby-plugin-react-i18next";


const LandingHero = () => {
  return (
    <section className="hero">
      <div>
        <h1 className="hero-title boxxy">EXPERIENCE A WORKOUT LIKE NO OTHER</h1>
      </div>
      <div>
			{/* <CornerArrow className="cornerArrow" /> */}
			{/* <Link  to="/join">
				<h2 className="boxx">
					<Trans>Try for free</Trans>
				</h2>
			</Link> */}
      <Link to="/join" className="landingJoinUsCTA">
					<div className="stripeBg blueBg">
						<span className="boxxy">
							<Trans>Try for free</Trans>
						</span>
					</div>
				</Link>	
		</div>
    </section>
  )
}

export default LandingHero;