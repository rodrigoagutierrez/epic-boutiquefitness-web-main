// main imports
import * as React from "react";
import { graphql } from "gatsby";

// plugin imports
import { Trans, useTranslation } from "react-i18next";
import { Link } from "gatsby-plugin-react-i18next";
import { Parallax } from "react-scroll-parallax";

// style imports
import "./landingpage.scss";

// svg imports

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
import CommunitySlider from "../components/Sections/CommunitySlider";
import ContactFormLanding from "../components/Forms/ContactFormLanding";
import WorkoutSelector from "../components/Sections/WorkoutSelector";
import Video from "../components/Video/Video";
import Workouts from "../components/Sections/Workouts";
import LandingHero from "../components/Sections/LandingHero";

// video imports
import LandingVideo from "../videos/landing.mp4";
import LandingVideoV from "../videos/landingV.mp4";

// page
export default function LandingPage() {
	const { t } = useTranslation();

	return (
		<LandingLayout >
			<Seo title={t("Home")} />
			<PatternWhite />
			<PatternBlack />
			<PatternBlue />
			<PatternMagenta />
			<PatternTurquoise />
			<PatternWhapp />
			<LandingHeader />
			<LandingHero />
			{/* Contact section */}
			<div id="contact">
				<div className="contactTitle">
					<h1 className="boxxy">
						<Trans>Contact</Trans>
					</h1>
				</div>

				<ContactFormLanding />
			</div>
			{/* Community section */}
			<div className="section invert">
				<div id="community">
					<span className="titleExtras bold">
						<Trans>we are not just a studio, we are a</Trans>
					</span>
					<h1 className="boxxy outline">
						<Trans>community</Trans>
					</h1>
					<CommunitySlider />
				</div>
			</div>
			
			{/* About section */}
			<div id="about">
				<h1 className="boxxy">
					<Trans>why EPIC</Trans>
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
			{/* Classes section */}
			<div id="classes">
				<div className="workoutsTitle">
					
					<Parallax
						rotateX={[20, 0]}
						rootMargin={{ top: 0, right: 0, bottom: -750, left: 0 }}
					>
						<h1 className="boxxy outline">
							<Trans>workouts</Trans>
						</h1>
					</Parallax>

				</div>

				<Workouts />
			</div>
			<div className="landing">
				<Video
					src={LandingVideo}
					srcV={LandingVideoV}
					className="landingVideo"
				/>
			</div>
			
			{/* Workout section */}

			<WorkoutSelector />
	
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