// main imports
import * as React from "react";

// plugin imports

// style imports
import "./IconSurroundText.scss";

// components imports
import { Parallax } from "react-scroll-parallax";

// svg imports
import Heart from "../../svg/values/Heart.svg";
import Leaf from "../../svg/values/Leaf.svg";

// page

export default function IconSurroundText({ shape, text, textRepeat }) {
	let fullText = [];

	for (let i = 0; i < textRepeat; i++) {
		fullText.push(
			<textPath
				xlinkHref="#SVGID_x5F_1_x5F_"
				startOffset={`${(100 / textRepeat) * i}%`}
				key={text + i}
			>
				{text}
			</textPath>
		);
	}

	const shapeSwitch = (shapeName) => {
		switch (shapeName) {
			case "heart":
				return <Heart className="iconSurrondIcon" />;
			case "leaf":
				return <Leaf className="iconSurrondIcon" />;
			default:
				return null;
		}
	};

	return (
		<div className="iconSurround">
			<Parallax rotate={[0, 180]} className="iconSurroundText">
				<svg
					id="circle"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 425.2 425.2"
					xmlSpace="preserve"
				>
					<path
						id="SVGID_x5F_1_x5F_"
						d="M362.6,212.6c0,82.8-67.2,150-150,150s-150-67.2-150-150s67.2-150,150-150S362.6,129.8,362.6,212.6z"
					/>
					<text>{fullText}</text>
				</svg>
			</Parallax>
			{shapeSwitch(shape)}
		</div>
	);
}
