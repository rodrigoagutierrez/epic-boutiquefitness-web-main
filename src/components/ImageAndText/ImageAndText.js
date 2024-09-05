// main imports
import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

// plugin imports
import { GatsbyImage } from "gatsby-plugin-image";
import { Parallax } from "react-scroll-parallax";

// style imports
import "./ImageAndText.scss";

// components imports

// svg imports

export default function ImageAndText({ name, text, textStyle, textColor }) {
	return (
		<StaticQuery
			query={graphql`
				query {
					allFile(
						sort: { extension: ASC }
						filter: { absolutePath: {regex: "/(imageAndText)/"}}
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
					(edge) => edge.node.name === name
				);
				// console.log(imgArray);

				return (
					<div className="imageAndTextComponent">
						<Parallax
							translateY={[-15, 45]}
							easing="easeOut"
							className={`imageTextText boxxy stripes ${textColor}`}
							style={{
								...textStyle,
							}}
						>
							{text}
						</Parallax>
						<div className="imageTextContainer">
							<GatsbyImage
								className="imageBg"
								image={imgArray[0].node.childImageSharp.gatsbyImageData}
								alt=""
							/>
							<GatsbyImage
								className="imageOverlay"
								image={imgArray[1].node.childImageSharp.gatsbyImageData}
								alt=""
							/>
						</div>
					</div>
				);
			}}
		/>
	);
}
