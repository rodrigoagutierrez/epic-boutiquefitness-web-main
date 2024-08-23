// main imports
import * as React from "react";
import Loader from "../loader/Loader";

// style imports
import "./Video.scss";

// components imports

// svg imports

export default function Video({
	src,
	srcV = null,
	className,
	type = "video/mp4",
}) {
	const [videoSrc, setVideoSrc] = React.useState(null);
	const [loaded, setLoaded] = React.useState(false);

	const videoRef = React.useRef(null);

	function playVideo() {
		videoRef.current.play();
	}

	function handleKeyDown(ev) {
		// console.log(ev.code)
		if (ev.code === "Space") {
			playVideo();
		}
	}

	React.useEffect(() => {
		if (srcV) {
			window.addEventListener("resize", () => {
				window.innerHeight > window.innerWidth
					? setVideoSrc(srcV)
					: setVideoSrc(src);
			});
		}
	});

	React.useEffect(() => {
		if (srcV) {
			window.innerHeight > window.innerWidth
				? setVideoSrc(srcV)
				: setVideoSrc(src);
		} else {
			setVideoSrc(src);
		}
	}, [src, srcV]);

	// Show the loader upon source change
	React.useEffect(() => {
		setLoaded(false);
	}, [videoSrc]);

	return (
		<div
			className={`videoComponent ${className} ${loaded ? "videoLoaded" : ""}`}
			onClick={playVideo}
			onKeyDown={handleKeyDown}
			role="button"
			tabIndex={0}
		>
			<Loader loaded={loaded} />
			<video
				autoPlay
				loop
				muted
				playsInline
				ref={videoRef}
				src={videoSrc}
				type={type}
				onPlay={() => {
					setLoaded(true);
				}}
			></video>
		</div>
	);
}
