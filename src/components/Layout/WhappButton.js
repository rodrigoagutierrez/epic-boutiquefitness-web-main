// main imports
import * as React from "react";

// plugin imports

// style imports
import "./WhappButton.scss";

// components imports

// svg imports
import WhappLogo from "../../svg/brands/whappLogo.svg";
import PatternWhapp from "../../svg/patterns/patternWhapp.svg";

// component
export default function WhappButton() {
	return (
		<>
			<PatternWhapp />
			<a
				className="whappButton"
				href="https://wa.me/605868398"
				rel="noopener noreferrer"
				target="_blank"
			>
				<WhappLogo />
			</a>
		</>
	);
}
