import "./Loader.scss";

import React from "react";

export default function Loader({ loaded }) {
	// console.log(loaded);

	return (
		<div className={`loader ${loaded ? "loaded" : ""}`}>
			<div className="stripeBg white"> </div>
		</div>
	);
}
