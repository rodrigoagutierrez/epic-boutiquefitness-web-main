// main imports
import * as React from "react";

// plugin imports
import { useTranslation } from "gatsby-plugin-react-i18next";
import Slider from "react-slick";

// style imports
import "./Workouts.scss";
import "./Slider-theme.scss";
import "slick-carousel/slick/slick.css";

// svg imports

// components imports
import WorkoutsImages from "../ImageAndText/WorkoutsImages";


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
		<div id="workoutsSlider" ref={containerRef}>
			<Slider {...sliderSettings} className="stripeBg" ref={sliderRef}>
				
				<div className="workoutsSlide">
					<WorkoutsImages
						pic="bootcamp"
						text="Bootcamp"
						workouts={["bootcamp"]}
						slogan={t("Challenge your endurance with intense cardio and strength training")}
					/>
				</div>
				<div className="workoutsSlide">
					<WorkoutsImages
						pic="crossfit"
						text="Crossfit"
						workouts={["crossfit"]}
						slogan={t("Break barriers, sculpt your body, and push your limits")}
					/>
				</div>
				<div className="workoutsSlide">
					<WorkoutsImages
						pic="epic45"
						text="Epic45"
						workouts={["epic45"]}
						slogan={t("Activate your core, strengthen your body, and boost your power")}
					/>
				</div>
				<div className="workoutsSlide">
					<WorkoutsImages
						pic="yoga1"
						text="Yoga"
						workouts={["yoga"]}
						slogan={t("Revitalize your body and mind with flexibility and strength")}
					/>
				</div>
				{/* <div className="workoutsSlide">
					<WorkoutsImages
						pic="personal trainer"
						text={t("Personal Trainer")}
						workouts={["bootcamp", "epic45", "crossfit", "yoga"]}
						slogan={t("Expert trainers: motivation, recovery, and personalized perfection")}
					/>
				</div> */}
			</Slider>
		</div>
	);
}
