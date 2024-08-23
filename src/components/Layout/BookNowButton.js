// main imports
import * as React from "react";

// plugin imports

// style imports
import "./BookNowButton.scss";

// components imports

// svg imports
import { Link, Trans } from "gatsby-plugin-react-i18next";

// component
export default function BookNowButton() {
	return (
		<div className="bookNowButton">
			{/* <CornerArrow className="cornerArrow" /> */}
			<Link className="stripeBg blueBg" to="/join">
				<h2 className="boxxy">
					<Trans>Try for free</Trans>
				</h2>
			</Link>
		</div>
	);
}
