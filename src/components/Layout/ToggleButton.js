import React from "react";

import "./ToggleButton.scss";

export default function ToggleButton({ label, className, checked, onClick }) {
	return (
		<button
			className={`toggleButton ${className} ${
				checked ? "checked" : "unchecked"
			}`}
			onClick={onClick}
		>
			<div>
				<span id="toggle" />
				<span id="background" />
			</div>
			<span id="label">{label}</span>
		</button>
	);
}
