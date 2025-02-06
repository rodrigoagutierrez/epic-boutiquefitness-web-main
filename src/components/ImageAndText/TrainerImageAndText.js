// main imports
import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

// plugin imports
import { GatsbyImage } from "gatsby-plugin-image";

// style imports
import "./TrainerImageAndText.scss";

// components imports

// svg imports
// workout icons
import BootcampIcon from "../../svg/workouts/bootcamp.svg";
import WodIcon from "../../svg/workouts/wod.svg";
import Epic45Icon from "../../svg/workouts/epic45.svg";
import YogaIcon from "../../svg/workouts/yoga.svg";

export default function TrainerImageAndText({
	pic,
	text,
	textColor = "turquoise",
	slogan,
	workouts = [],
}) {
	const iconSwitch = (workoutName) => {
		switch (workoutName.toLowerCase()) {
			case "crossfit":
				return <WodIcon key="wod" />;
			case "bootcamp":
				return <BootcampIcon key="bootcamp" />;
			case "epic45":
				return <Epic45Icon key="epic45" />;
			case "yoga":
				return <YogaIcon key="yoga" />;
			default:
				console.log("Icon not found");
				return null;
		}
	};

	let workoutList = [];

	workouts.forEach((workoutName) => {
		workoutList.push(iconSwitch(workoutName));
	});

	return (
		<StaticQuery
			query={graphql`
				query {
					allFile(
						sort: { extension: ASC }
						filter: { absolutePath: { regex: "/(trainers)/" } }
					) {
						edges {
							node {
								childImageSharp {
									gatsbyImageData
								}
								name
							}
						}
					}
				}
			`}
			render={(data) => {
				const imgArray = data.allFile.edges.filter(
					(edge) => edge.node.name === pic
				);

				// console.log(data);

				return (
					<div className={`trainerImageAndTextComponent  ${pic}`}>
						<div className={`trainerName boxxy stripes ${textColor}`}>
							<p>{text}</p>
						</div>
						<div className="imageTextContainer">
							<div className="trainersOverlay stripeBg black"></div>
							<GatsbyImage
								className="imageBg"
								image={imgArray[0]?.node?.childImageSharp?.gatsbyImageData}
								alt=""
								objectFit="contain"
							/>
							<GatsbyImage
								className="imageOverlay"
								image={imgArray[1]?.node?.childImageSharp?.gatsbyImageData}
								alt=""
								objectFit="contain"
							/>
						</div>
						<div className="trainerSlogan bold outline">{slogan}</div>
						{/* <div className="workoutsList">{workoutList}</div> */}
					</div>
				);
			}}
		/>
	);
}
