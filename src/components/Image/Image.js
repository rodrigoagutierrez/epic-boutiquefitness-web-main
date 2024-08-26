// main imports
import * as React from "react";
import Loader from "../loader/Loader";

// style imports
import "./Image.scss";

// components imports

// svg imports

export default function ImageComponent({
	src,
	alt = "",
	className,
}) {
	const [loaded, setLoaded] = React.useState(false);

	// Manejo de la carga de la imagen
	function handleImageLoad() {
		setLoaded(true);
	}

	return (
		<div
			className={`imageComponent ${className} ${loaded ? "imageLoaded" : ""}`}
		>
			<Loader loaded={loaded} />
			<img
				src={src}
				alt={alt}
				onLoad={handleImageLoad}
				className="workoutBg"
			/>
		</div>
	);
}