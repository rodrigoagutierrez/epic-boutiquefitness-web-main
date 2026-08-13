// main imports
import * as React from "react";
import { graphql } from "gatsby";

// plugin imports
import { Trans, useTranslation } from "react-i18next";
import { Link } from "gatsby-plugin-react-i18next";
import { Parallax } from "react-scroll-parallax";

// style imports
import "./index.scss";

// svg imports
import BlackArrow from "../svg/blackArrow.svg";
import Favicon from "../svg/favicon.svg";
// services icons
// import SvcParkingIcon from "../svg/services/svcParking.svg";
import SvcGelIcon from "../svg/services/svcGel.svg";
import SvcChargerIcon from "../svg/services/svcCharger.svg";
import SvcAirIcon from "../svg/services/svcAir.svg";
import SvcLockerIcon from "../svg/services/svcLocker.svg";
import SvcGhdIcon from "../svg/services/svcGhd.svg";
import SvcChillOutIcon from "../svg/services/svcChillOut.svg";
// patterns
import PatternWhite from "../svg/patterns/patternWhite.svg";
import PatternBlue from "../svg/patterns/patternBlue.svg";
import PatternBlack from "../svg/patterns/patternBlack.svg";
import PatternTurquoise from "../svg/patterns/patternTurquoise.svg";
import PatternMagenta from "../svg/patterns/patternMagenta.svg";
import PatternWhapp from "../svg/patterns/patternWhapp.svg";

// components imports
import Layout from "../components/Layout/Layout.js";
import Seo from "../components/Seo/Seo.js";
// import ImageAndText from "../components/ImageAndText/ImageAndText";
// import IconSurroundText from "../components/Values/IconSurroundText";
import LazyLoad from "../components/LazyLoad";
import ContactForm from "../components/Forms/ContactForm";
import ContactDetails from "../components/Sections/ContactDetails";
import DownloadApp from "../components/Sections/DownloadApp";
import FirstTimer from "../components/Sections/FirstTimer";
import WorkoutSelector from "../components/Sections/WorkoutSelector";
import Video from "../components/Video/Video";

// video imports
import LandingVideo from "../videos/landing.mp4";
import LandingVideoV from "../videos/landingV.mp4";

// page
export default function IndexPage() {
	const { t } = useTranslation();

	const joinUsList = [
		<Trans>classes from 07:00 to 22:00</Trans>,
		<Trans>personalized attention</Trans>,
		<Trans>reduced groups</Trans>,
		<Trans>classes adaptable to every level</Trans>,
		<Trans>over 90 classes every week</Trans>,
		<Trans>different workout every day</Trans>,
		<Trans>no minimum contract</Trans>,
		<Trans>results guaranteed</Trans>,
	];

	const separator = (
		<div className="separator blackArrow">
			<BlackArrow />
		</div>
	);

	return (
		<Layout>
			<Seo title={t("Home")} />
			<PatternWhite />
			<PatternBlack />
			<PatternBlue />
			<PatternMagenta />
			<PatternTurquoise />
			<PatternWhapp />
			<div className="landing">
				<Video
					src={LandingVideo}
					srcV={LandingVideoV}
					className="landingVideo"
				/>

				<div className="blackArrow">
					<BlackArrow />
				</div>
				<span className="h1 boxxy outline landingTitle">
					<Trans>
						Burn<br></br>
						Build<br></br>
						Change
					</Trans>
				</span>
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
			<div id="workout"></div>
			<div className="workoutTitle invert">
				<div className="marquee bold h1">
					<Parallax translateX={["0vh", "-20vh"]}>
						<div className="marquee__inner" aria-hidden="true">
							<span>
								<Trans>workouts</Trans>
							</span>
							<span>
								<Trans>workouts</Trans>
							</span>
							<span>
								<Trans>workouts</Trans>
							</span>
							<span>
								<Trans>workouts</Trans>
							</span>
							<span>
								<Trans>workouts</Trans>
							</span>
							<span>
								<Trans>workouts</Trans>
							</span>
							<span>
								<Trans>workouts</Trans>
							</span>
							<span>
								<Trans>workouts</Trans>
							</span>
							<span>
								<Trans>workouts</Trans>
							</span>
							<span>
								<Trans>workouts</Trans>
							</span>
						</div>
					</Parallax>
				</div>
				<div className="marquee marqueeInv ">
					<Parallax translateX={["-20vh", "0vh"]}>
						<div className="marquee__inner" aria-hidden="true">
							<span>
								<Trans>daily created programs</Trans>
							</span>
							<span>
								<Trans>instructor-led training</Trans>
							</span>
							<span>
								<Trans>guaranteed results</Trans>
							</span>
							<span>
								<Trans>daily created programs</Trans>
							</span>
							<span>
								<Trans>instructor-led training</Trans>
							</span>
							<span>
								<Trans>guaranteed results</Trans>
							</span>
							<span>
								<Trans>daily created programs</Trans>
							</span>
							<span>
								<Trans>instructor-led training</Trans>
							</span>
							<span>
								<Trans>guaranteed results</Trans>
							</span>
							<span>
								<Trans>daily created programs</Trans>
							</span>
							<span>
								<Trans>instructor-led training</Trans>
							</span>
							<span>
								<Trans>guaranteed results</Trans>
							</span>
							<span>
								<Trans>daily created programs</Trans>
							</span>
							<span>
								<Trans>instructor-led training</Trans>
							</span>
							<span>
								<Trans>guaranteed results</Trans>
							</span>
							<span>
								<Trans>daily created programs</Trans>
							</span>
							<span>
								<Trans>instructor-led training</Trans>
							</span>
							<span>
								<Trans>guaranteed results</Trans>
							</span>
						</div>
					</Parallax>
				</div>
			</div>
			<WorkoutSelector />
			{separator}
			{/* Join us CTA section */}
			{/* <div id="joinNowCTA">
				<ImageAndText
					name="firstTimer2"
					text={t("Join now")}
					textColor="white"
					textStyle={{
						textAlign: "right",
						right: "5%",
						top: "-4rem",
						width: "100%",
						direction: "rtl",
						fontSize: "min(20vw,12rem)",
						lineHeight: "min(28vw, 16rem)",
					}}
				/>
				<div className="CTA">
					<Link to="/join" className="boxxy stripeBg magentaBg">
						<Trans>Click for free session</Trans>
					</Link>
				</div>
			</div> */}
			{/* First timers section */}
			<div className="section invert">
				<FirstTimer />
			</div>
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
				{/* <Link to="/join" className="sidelinesButton turquoiseBg">
					<h2 className="boxxy outline">
						<Trans>Book a class</Trans>
					</h2>
				</Link> */}
			</div>
			{separator}
			{/* Services section */}
			<div className="section invert">
				<div className="marquee bold outline h1 servicesTitle" id="services">
					<Parallax translateX={["0vh", "-20vh"]}>
						<div className="marquee__inner" aria-hidden="true">
							<span>
								<Trans>services</Trans>
							</span>
							<span>
								<Trans>services</Trans>
							</span>
							<span>
								<Trans>services</Trans>
							</span>
							<span>
								<Trans>services</Trans>
							</span>
							<span>
								<Trans>services</Trans>
							</span>
							<span>
								<Trans>services</Trans>
							</span>
							<span>
								<Trans>services</Trans>
							</span>
							<span>
								<Trans>services</Trans>
							</span>
							<span>
								<Trans>services</Trans>
							</span>
							<span>
								<Trans>services</Trans>
							</span>
							<span>
								<Trans>services</Trans>
							</span>
							<span>
								<Trans>services</Trans>
							</span>
							<span>
								<Trans>services</Trans>
							</span>
						</div>
					</Parallax>
				</div>
				<div className="servicesList light">
					{/* <div>
						<SvcParkingIcon />
						<Trans>parking</Trans>
					</div> */}
					<div>
						<SvcGelIcon />
						<Trans>gel & shampoo</Trans>
					</div>
					<div>
						<SvcChargerIcon />
						<Trans>phone chargers</Trans>
					</div>
					<div>
						<SvcAirIcon />
						<Trans>air conditioning</Trans>
					</div>
					<div>
						<SvcLockerIcon />
						<Trans>lockers</Trans>
					</div>
					<div>
						<SvcGhdIcon />
						<Trans>hair drier & straighteners</Trans>
					</div>
					<div>
						<SvcChillOutIcon />
						<Trans>chill-out zone</Trans>
					</div>
				</div>
			</div>
			{separator}
			{/* Trainers section */}
			<div id="trainers">
				<div className="trainersTitle">
					<span className="titleExtras desktopTitleExtras">
						<Trans>you love them</Trans>
					</span>

					<Parallax
						rotateX={[20, 0]}
						rootMargin={{ top: 0, right: 0, bottom: -750, left: 0 }}
					>
						<h1 className="boxxy outline">
							<Trans>Trainers</Trans>
						</h1>
					</Parallax>

					<span className="titleExtras desktopTitleExtras">
						<Trans>you hate them</Trans>
					</span>

					<span className="titleExtras mobileTitleExtras">
						<Trans>the people you love to hate</Trans>
					</span>
				</div>

				<LazyLoad importFn={() => import("../components/Sections/TrainersSlider")} />
			</div>

			{separator}

			{/* Community section */}
			<div className="section invert">
				<div id="community">
					<span className="titleExtras bold">
						<Trans>we are not just a studio, we are a</Trans>
					</span>
					<h1 className="boxxy outline">
						<Trans>community</Trans>
					</h1>
					<LazyLoad importFn={() => import("../components/Sections/CommunitySlider")} />
				</div>
			</div>

			{separator}

			{/* Values section */}
			{/* <div id="values">
				<span className="titleExtras">
					<Trans>gym with a conscience</Trans>
				</span>
				<div className="valuesTitle marquee boxxy h2">
					<Parallax translateX={["0vh", "-20vh"]}>
						<div className="marquee__inner" aria-hidden="true">
							<span>
								<Trans>epic</Trans>
							</span>
							<span>
								<Trans>eco</Trans>
							</span>
							<span>
								<Trans>epic</Trans>
							</span>
							<span>
								<Trans>eco</Trans>
							</span>
							<span>
								<Trans>epic</Trans>
							</span>
							<span>
								<Trans>eco</Trans>
							</span>
							<span>
								<Trans>epic</Trans>
							</span>
							<span>
								<Trans>eco</Trans>
							</span>
							<span>
								<Trans>epic</Trans>
							</span>
							<span>
								<Trans>eco</Trans>
							</span>
							<span>
								<Trans>epic</Trans>
							</span>
							<span>
								<Trans>eco</Trans>
							</span>
							<span>
								<Trans>epic</Trans>
							</span>
							<span>
								<Trans>eco</Trans>
							</span>
							<span>
								<Trans>epic</Trans>
							</span>
							<span>
								<Trans>eco</Trans>
							</span>
							<span>
								<Trans>epic</Trans>
							</span>
							<span>
								<Trans>eco</Trans>
							</span>
							<span>
								<Trans>epic</Trans>
							</span>
							<span>
								<Trans>eco</Trans>
							</span>
							<span>
								<Trans>epic</Trans>
							</span>
							<span>
								<Trans>eco</Trans>
							</span>
							<span>
								<Trans>epic</Trans>
							</span>
							<span>
								<Trans>eco</Trans>
							</span>
							<span>
								<Trans>epic</Trans>
							</span>
							<span>
								<Trans>eco</Trans>
							</span>
							<span>
								<Trans>epic</Trans>
							</span>
							<span>
								<Trans>eco</Trans>
							</span>
							<span>
								<Trans>epic</Trans>
							</span>
							<span>
								<Trans>eco</Trans>
							</span>
							<span>
								<Trans>epic</Trans>
							</span>
							<span>
								<Trans>eco</Trans>
							</span>
							<span>
								<Trans>epic</Trans>
							</span>
							<span>
								<Trans>eco</Trans>
							</span>
							<span>
								<Trans>epic</Trans>
							</span>
							<span>
								<Trans>eco</Trans>
							</span>
							<span>
								<Trans>epic</Trans>
							</span>
							<span>
								<Trans>eco</Trans>
							</span>
							<span>
								<Trans>epic</Trans>
							</span>
							<span>
								<Trans>eco</Trans>
							</span>
						</div>
					</Parallax>
				</div>
				<span className="titleExtras">
					<Trans>together we make a difference</Trans>
				</span>

				<p>
					<Trans>
						it's the daily choices that add up to make a big difference, whether
						it's for yourself or the planet.
					</Trans>
				</p>
				<p style={{ marginTop: "1rem" }}>
					<Trans>
						We've made our own eco-conscious choices and started our own
						initiatives to multiply your efforts to protect the environment.
					</Trans>
				</p>

				<div className="valueGrid">
					<div>
						<IconSurroundText
							text={t("ethical")}
							shape="heart"
							textRepeat={5}
						/>
						<p className="bold">
							<Trans i18nKey="ethicalList">
								partners
								<br></br>
								manufacturing
								<br></br>
								logistics
							</Trans>
						</p>
					</div>
					<div>
						<IconSurroundText
							text={t("eco-friendly")}
							shape="leaf"
							textRepeat={3}
						/>
						<p className="bold">
							<Trans i18nKey="ecoList">
								clothing
								<br></br>
								cleaning products
								<br></br>
								200 sessions = 1 tree
							</Trans>
						</p>
					</div>
				</div>

				<p>
					<Trans>
						not only are our members improving their fitness levels, but they'll
						also be doing good for the environment too!
					</Trans>
				</p>
			</div>

			{separator} */}

			{/* Contact section */}
			<div id="contact">
				<div className="contactTitle">
					<h1 className="boxxy">
						<Trans>Contact</Trans>
					</h1>
					<span>
						<Trans>
							got any questions? <br></br>
							give us a call or fill the form below
						</Trans>
					</span>
				</div>

				<ContactForm />
			</div>
			<ContactDetails />

			{separator}

			{/* Download App section */}
			<div className="section invert">
				<DownloadApp />
			</div>
		</Layout>
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