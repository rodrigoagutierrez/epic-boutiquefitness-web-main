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

	// Keep the source in sync with the current orientation (portrait/landscape)
	React.useEffect(() => {
		const pickSource = () =>
			srcV
				? window.innerHeight > window.innerWidth
					? srcV
					: src
				: src;

		setVideoSrc(pickSource());

		if (!srcV) return;

		const handleResize = () => setVideoSrc(pickSource());
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [src, srcV]);

	// Show the loader upon source change
	React.useEffect(() => {
		setLoaded(false);
	}, [videoSrc]);

	// Defer playback until the video scrolls into view
	React.useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					video.play().catch(() => {});
				} else {
					video.pause();
				}
			},
			{ rootMargin: "100px" }
		);

		observer.observe(video);
		return () => observer.disconnect();
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
				loop
				muted
				playsInline
				preload="metadata"
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
