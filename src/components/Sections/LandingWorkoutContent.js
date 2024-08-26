// main imports
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

// plugin imports
import { Trans, useTranslation } from "react-i18next";
import { CSSTransition, SwitchTransition } from "react-transition-group";

// style imports
import "./LandingWorkoutContent.scss";

// components imports
import ImageComponent from "../Image/Image"; // Importa el nuevo componente Image

// image imports 
import Bootcamp from "../../images/bootcamp.jpeg";
import Crossfit from "../../images/crossfit.jpeg";
import Epic45 from "../../images/epic45.jpeg";
import Yoga from "../../images/yoga.jpeg";

// component
export default function LandingWorkoutContent({ section, children }) {
	const { t } = useTranslation();

	const sections = {
		bootcamp: {
			duration: 60,
			energy: 800,
			title: "Bootcamp",
			text: [
				t(
					"Prepare to test your endurance as you tackle the cardio killers that are the assault bike, rower, SkiErg and Assault AirRunner. Get down with weight sequences, the ultimate playground for bodyweight, dumbbell, kettlebell and pull up bar moves."
				),
				t(
					"Designed to work your full body, boost your fitness and endurance, and build and tone muscle, for a complete sweat inducing session."
				),
			],
			bg: <ImageComponent src={Bootcamp} className="workoutBg" />, // Usamos ImageComponent en lugar de Video
		},
		epic45: {
			duration: 45,
			energy: 400,
			title: "EPIC45",
			text: [
				t(
					"Engage your core, sculpt your body and build your strength. Build your muscular endurance, strengthen your core and tone your physique with this fusion TRX workout. This class revolves around time-under-tension and strength-based movements."
				),
				t("Get ready to work your full body and jump, push, pull & squat!"),
			],
			bg: <ImageComponent src={Epic45} className="workoutBg" />, // Usamos ImageComponent en lugar de Video
		},
		crossfit: {
			duration: 60,
			energy: 600,
			title: "Crossfit",
			text: [
				t(
					"Each session you will work with weights to suit your level, designed to mould your body and break barriers. It's an experience that will challenge, inspire, and push you to exertion that you never thought was possible."
				),
			],
			bg: <ImageComponent src={Crossfit} className="workoutBg" />, // Usamos ImageComponent en lugar de Video
		},
		yoga: {
			duration: 60,
			energy: 300,
			title: "Yoga",
			text: [
				t(
					"Energize and revitalize yourself. Calm and control meet strength and flexibility. Move and breathe your way through static holds and dynamic movements that will get your mind and body working as one. Improve your overall flexibility whist refining your posture, and help protect the body from injury."
				),
			],
			bg: <ImageComponent src={Yoga} className="workoutBg" />, // Usamos ImageComponent en lugar de Video
		},
		ptraining: {
			title: t("personal training"),
			text: [
				t(
					"Whether you're looking for some extra motivation, need help working through injuries, or just looking to perfect your form, our trainers are on hand to offer specialist personal training services."
				),
			],
			bg: (
				<StaticImage
					src="../../images/workouts/crossfit.jpg"
					alt="A crossfit workout"
					className="workoutBg"
				/>
			),
		},
	};

	return (
		<SwitchTransition mode="out-in">
			<CSSTransition key={section} timeout={585} classNames="switch">
				<div className={`workoutContent ${section}`}>
					<div id="workoutContent" />

					{sections[section]?.bg}
					<div className="workoutOverlay stripeBg black" />
					<div className="workoutTransitionOverlay stripeBg black" />

					<div className="workoutText">
						<h2 className="boxxy">{sections.title}</h2>
						{sections[section]?.text?.map((paragraph, i) => (
							<p key={i}>{paragraph}</p>
						))}
					</div>

					{sections[section]?.duration !== undefined &&
						sections[section]?.energy !== undefined && (
							<div className="workoutSpecs">
								<div>
									<Trans>sweat for</Trans> <br />
									<span className="bold">
										{sections[section]?.duration}
									</span>{" "}
									min
								</div>
								<div>
									<Trans>burn up to</Trans> <br />
									<span className="bold">{sections[section]?.energy}</span> cal
								</div>
							</div>
						)}
				</div>
			</CSSTransition>
		</SwitchTransition>
	);
}