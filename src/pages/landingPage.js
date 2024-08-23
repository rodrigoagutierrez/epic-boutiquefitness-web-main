// main imports
import * as React from "react";
import { graphql } from "gatsby";

// plugin imports
import { Trans, useTranslation } from "react-i18next";
import { Link } from "gatsby-plugin-react-i18next";

// style imports
import "./landingPage.scss";

// svg imports
import BlackArrow from "../svg/blackArrow.svg";

// patterns
import PatternWhite from "../svg/patterns/patternWhite.svg";
import PatternBlue from "../svg/patterns/patternBlue.svg";
import PatternBlack from "../svg/patterns/patternBlack.svg";
import PatternTurquoise from "../svg/patterns/patternTurquoise.svg";
import PatternMagenta from "../svg/patterns/patternMagenta.svg";
import PatternWhapp from "../svg/patterns/patternWhapp.svg";

// components imports
import LandingLayout from "../components/Layout/LandingLayout.js";
import Seo from "../components/Seo/Seo.js";
import LandingHeader from "../components/Sections/LandingHeader.js";
import ContactForm from "../components/Forms/ContactForm";
import ContactDetails from "../components/Sections/ContactDetails";
import FirstTimer from "../components/Sections/FirstTimer";
import WorkoutSelector from "../components/Sections/WorkoutSelector";
import Video from "../components/Video/Video";

// video imports
import LandingVideo from "../videos/landing.mp4";
import LandingVideoV from "../videos/landingV.mp4";

// page
export default function LandingPage() {
	const { t } = useTranslation();


	const separator = (
		<div className="separator blackArrow">
			<BlackArrow />
		</div>
	);

	return (
		<LandingLayout>
			<Seo title={t("Home")} />
			<PatternWhite />
			<PatternBlack />
			<PatternBlue />
			<PatternMagenta />
			<PatternTurquoise />
			<PatternWhapp />
			<LandingHeader />
			{/* Contact section */}
			<div id="contact">
				<div className="contactTitle">
					<h1 className="boxxy">
						<Trans>Contact</Trans>
					</h1>
				</div>

				<ContactForm />
			</div>
			<ContactDetails />
			<div className="landing">
				<Video
					src={LandingVideo}
					srcV={LandingVideoV}
					className="landingVideo"
				/>

				<div className="blackArrow">
					<BlackArrow />
				</div>
				
			</div>
			{/* Intro section */}
			<div className="section invert">
				<div id="intro">
					<div>
						<h2 className="boxxy">
							<Trans>Join us</Trans>
						</h2>
						<p>
							<Trans>
								at EPIC in barrio ensanche, Valencia and let us guide you
								through a whole host of classes designed to improve your
								fitness, strength and overall wellbeing
							</Trans>
						</p>
						<p>
							<Trans>
								we've made sure that all our workouts work for you, no matter
								beginner to advanced, we have you covered
							</Trans>
						</p>
					</div>

					<Link to="/join" className="joinUsCTA">
						<div className="stripeBg blueBg">
							<span className="boxxy">
								<Trans>Come and try for free</Trans>
							</span>
						</div>
					</Link>
				</div>
			</div>
			{separator}
			{/* Workout section */}

			<WorkoutSelector />
		
			{separator}
			{/* About section */}
			<div id="about">
				<h1 className="boxxy">
					<Trans>About EPIC</Trans>
				</h1>
				<div className="storyText">
					{/* <div> */}
					<p>
						<Trans>
							EPIC was created for fitness followers and fanatics who need to
							make the most of their time and still want the{" "}
							<b>ultimate fitness experience.</b>
						</Trans>
					</p>
					<p>
						<Trans>
							we decided it was time to shake up the industry for an audience
							that wanted a boutique workout experience - it was time for a
							EPIC.
						</Trans>
					</p>
					{/* </div>
					<div> */}
					<p>
						<Trans>
							our workouts let you see hard work pay off in real-time, leaving
							you feeling invincible and firing up your endorphins like the best
							night of your life with a collective of like-minded fitness
							fanatics by your side.
						</Trans>
					</p>
					{/* </div> */}
				</div>
				<Link to="/join" className="joinUsCTA">
					<div className="stripeBg blueBg">
						<span className="boxxy">
							<Trans>Book your free class</Trans>
						</span>
					</div>
				</Link>

			</div>

		</LandingLayout>
	);
}

// graphql query
export const query = graphql`
	query ($language: String!) {
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`;