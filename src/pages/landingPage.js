// main imports
import * as React from "react";
import { graphql } from "gatsby";

// plugin imports
import { Trans, useTranslation } from "react-i18next";
import { Link } from "gatsby-plugin-react-i18next";

// style imports
import "./landingpage.scss";

// svg imports
import Favicon from "../svg/favicon.svg";

// patterns
import PatternWhite from "../svg/patterns/patternWhite.svg";
import PatternBlue from "../svg/patterns/patternBlue.svg";
import PatternBlack from "../svg/patterns/patternBlack.svg";
import PatternTurquoise from "../svg/patterns/patternTurquoise.svg";
import PatternMagenta from "../svg/patterns/patternMagenta.svg";
import PatternWhapp from "../svg/patterns/patternWhapp.svg";

// components imports
import LandingLayout from "../components/Layout/LandingLayout";
import Seo from "../components/Seo/Seo";
import LandingHeader from "../components/Sections/LandingPageSections/LandingHeader";
import CommunitySlider from "../components/Sections/CommunitySlider";
import ContactFormLanding from "../components/Forms/ContactFormLanding";
import LandingHero from "../components/Sections/LandingPageSections/LandingHero";
import WorkoutsSlider from "../components/Sections/LandingPageSections/WorkoutsSlider";


// page
export default function LandingPage() {
	const { t } = useTranslation();

	const joinUsList = [
		<Trans>no minimum contract</Trans>,
		<Trans>personalized attention</Trans>,
		<Trans>classes adaptable to every level</Trans>,
		<Trans>classes from 07:00 to 22:00</Trans>,
		<Trans>reduced groups</Trans>,
		<Trans>over 90 classes every week</Trans>,
		<Trans>different workout every day</Trans>,
		<Trans>results guaranteed</Trans>,
	];

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
			<div className="section invert">
				<div id="LandingContact">
					<div className="LandingContactTitle">
						<h1 className="boxxy">
							<Trans>Quiero mi clase gratis</Trans>
						</h1>
					</div>

					<ContactFormLanding />
				</div>
			</div>

			{/* Workout section */}
			<div className="section invert">
				<div id="Landingclasses">
					<WorkoutsSlider />
				</div>
			</div>

			{/* About section */}
			<div id="Landingabout" className="section invert">
				<h1 className="boxxy">
					<Trans>Por qué EPIC</Trans>
				</h1>

				<div className="joinUsList">
						{joinUsList.map((el, i) => (
							<div key={"joinList" + i}>
								<Favicon className="iconSeparator" />
								<span className="bold">
									<span>{el}</span>
								</span>
							</div>
						))}
				</div>
			
			{/* Community section */}
			<div id="LandingCommunity" className="section invert">
				<div>
					<span className="titleExtras bold">
						<Trans>we are not just a studio, we are a</Trans>
					</span>
					<h1 className="boxxy outline">
						<Trans>community</Trans>
					</h1>
					<CommunitySlider />
				</div>
			</div>
			
			{/* <div className="storyText">
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
					<p>
						<Trans>
							our workouts let you see hard work pay off in real-time, leaving
							you feeling invincible and firing up your endorphins like the best
							night of your life with a collective of like-minded fitness
							fanatics by your side.
						</Trans>
					</p>
				</div> */}

				<Link to="/join" className="landingJoinUsCTA">
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