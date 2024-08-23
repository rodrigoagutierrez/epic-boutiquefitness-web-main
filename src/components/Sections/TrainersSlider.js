// main imports
import * as React from "react";

// plugin imports
import { useTranslation } from "gatsby-plugin-react-i18next";
import Slider from "react-slick";

// style imports
import "./TrainersSlider.scss";
import "./Slider-theme.scss";
import "slick-carousel/slick/slick.css";

// svg imports

// components imports
import TrainerImageAndText from "../ImageAndText/TrainerImageAndText";

// component
export default function TrainersSlider() {
	const { t } = useTranslation();

	var sliderSettings = {
		dots: false,
		arrows: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		autoplay: false,
		autoplaySpeed: 5000,
		cssEase: "ease-out",
		pauseOnHover: true,
		variableWidth: true,
	};

	const sliderRef = React.useRef(null);
	const containerRef = React.useRef(null);

	React.useEffect(() => {
		if (containerRef === null || sliderRef === null) return null;

		var scrollEnabled = true;

		const handleScroll = (e) => {
			setTimeout(() => {
				scrollEnabled = true;
			}, 1000);

			// console.log(scrollEnabled, e);

			if (scrollEnabled) {
				e.preventDefault();
				scrollEnabled = false;

				if (e.wheelDeltaX > 0) {
					return sliderRef?.current?.slickPrev();
				} else if (e.wheelDeltaX < 0) {
					return sliderRef?.current?.slickNext();
				} else {
					return;
				}
			}
		};

		containerRef.current.addEventListener("wheel", (e) => handleScroll(e));

		return containerRef.current.removeEventListener("wheel", (e) =>
			handleScroll(e)
		);
	}, []);

	return (
		<div id="trainersSlider" ref={containerRef}>
			<Slider {...sliderSettings} className="stripeBg" ref={sliderRef}>
				{/* <div className="trainersSlide">
					<TrainerImageAndText
						pic="javi"
						text="Javi"
						workouts={["bootcamp", "epic45", "crossfit", "yoga"]}
						slogan={t("get your squats low and set your bar high")}
					/>
				</div> */}
				<div className="trainersSlide">
					<TrainerImageAndText
						pic="jenny"
						text="Jenny"
						workouts={["yoga"]}
						slogan={t("loving the challenge every time I teach")}
					/>
				</div>
				<div className="trainersSlide">
					<TrainerImageAndText
						pic="nelson"
						text="Nelson"
						workouts={["bootcamp", "crossfit"]}
						slogan={t("motivated to get you moving")}
					/>
				</div>
				<div className="trainersSlide">
					<TrainerImageAndText
						pic="manu"
						text="Manu"
						workouts={["bootcamp", "epic45", "crossfit", "yoga"]}
						slogan={t("serial fitness junkie")}
					/>
				</div>
				<div className="trainersSlide">
					<TrainerImageAndText
						pic="julia"
						text="Julia"
						workouts={["bootcamp", "epic45", "crossfit", "yoga"]}
						slogan={t("be fearless in the pursuit of your goal")}
					/>
				</div>
				<div className="trainersSlide">
					<TrainerImageAndText
						pic="diego"
						text="Diego"
						workouts={["bootcamp", "epic45", "crossfit", "yoga"]}
						slogan={t("inspiring others to live their best lives")}
					/>
				</div>
			</Slider>
		</div>
	);
}
