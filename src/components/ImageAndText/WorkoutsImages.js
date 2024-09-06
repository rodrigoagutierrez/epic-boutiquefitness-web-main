// main imports
import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

// plugin imports
import { GatsbyImage } from "gatsby-plugin-image";

// style imports
import "./WorkoutsImages.scss";

// components imports


export default function WorkoutsImages({
	pic,
	text,
	textColor = "turquoise",
	slogan,
	// workouts = [],
}) 
	{
	// const iconSwitch = (workoutName) => {
	// 	switch (workoutName.toLowerCase()) {
	// 		case "crossfit":
	// 			return <CrossfitIcon key="crossfit" />;
	// 		case "bootcamp":
	// 			return <BootcampIcon key="bootcamp" />;
	// 		case "epic45":
	// 			return <Epic45Icon key="epic45" />;
	// 		case "yoga":
	// 			return <YogaIcon key="yoga" />;
	// 		default:
	// 			console.log("Icon not found");
	// 			return null;
	// 	}
	// };

	// let workoutList = [];

	// workouts.forEach((workoutName) => {
	// 	workoutList.push(iconSwitch(workoutName));
	// });

	return (
		<StaticQuery
			query={graphql`
				query {
					allFile(
						sort: {extension: ASC}
						filter: { absolutePath: { regex: "/(workouts)/" } }
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
					<div className="workoutComponent">
						
						<div className="imageTextContainer">
							<div className="workoutsOverlay black"></div>
							<GatsbyImage
								className="imageBg"
								image={imgArray[0]?.node?.childImageSharp?.gatsbyImageData}
								alt=""
								objectFit="cover"
							/>
							<div className={`trainerName boxxy ${textColor}`}>
								<p>{text}</p>
							</div>
						</div>
						<div className="trainerSlogan bold white">{slogan}</div>
						{/* <div className="workoutsList">{workoutList}</div> */}
					</div>
				);
			}}
		/>
	);
}
