// main imports
import * as React from "react";

// plugin imports
import { Trans } from "gatsby-plugin-react-i18next";

// style imports
import "./ContactDetails.scss";

// components imports

// svg imports
import FbLogo from "../../svg/brands/fbLogo.svg";
import IgLogo from "../../svg/brands/igLogo.svg";
// import { StaticImage } from "gatsby-plugin-image";

// component
export default function ContactDetails() {
	return (
		<>
			{/* <a
				href="https://goo.gl/maps/Wzgh4VBSYCyXUPmW7"
				target="_blank"
				rel="noopener noreferrer"
			>
				<StaticImage
					src={"../../images/contact/map2.png"}
					alt="map showing the location of EPIC Valencia"
					className="map"
					layout="fullWidth"
				/>
			</a> */}

			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6526.712902338031!2d-0.37208739584347156!3d39.46484994137561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60497d35c62bbd%3A0x9e742c578ba1bf55!2sEPIC%20Boutique%20Fitness!5e0!3m2!1sen!2ses!4v1679644183242!5m2!1sen!2ses"
				width="100%"
				height="450"
				style={{ border: 0 }}
				allowFullScreen=""
				loading="lazy"
				className="gmap"
				referrerPolicy="no-referrer-when-downgrade"
				title="gmap"
			></iframe>
			<div id="contactDetails">
				<div className="boxxy contactDetails">
					<div>
						<span className="small">
							<Trans>Phone</Trans>{" "}
						</span>
						<span>+34 605 868 398</span>
					</div>
					<div>
						<span className="small">
							<Trans>Address</Trans>{" "}
						</span>
						<a
							href="https://goo.gl/maps/Wzgh4VBSYCyXUPmW7"
							target="_blank"
							rel="noopener noreferrer"
						>
							C/ Almirante Cadarso 15 bajo, 46005 València
						</a>
					</div>
					<div>
						<span className="small">
							<Trans>Follow us</Trans>{" "}
						</span>
						<div className="RRSSLogos">
							<a
								href="https://www.facebook.com/profile.php?id=100086483572410"
								className="blueBg"
							>
								<FbLogo />
							</a>
							<a
								href="https://www.instagram.com/epicboutiquefitness/"
								className="magentaBg"
							>
								<IgLogo />
								&ensp;@epicboutiquefitness
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
