// main imports
import * as React from "react";

// plugin imports
import { useTranslation } from "gatsby-plugin-react-i18next";
import Slider from "react-slick";

// style imports
import "./WorkoutsSlider.scss";
import ".././Slider-theme.scss";
import "slick-carousel/slick/slick.css";

// svg imports

// components imports
import WorkoutsImages from "../../ImageAndText/WorkoutsImages";

// component
export default function WorkoutsSlider() {
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
				
				<div className="trainersSlide">
					<WorkoutsImages
						pic="bootcamp"
						text="Bootcamp"
						workouts={["bootcamp"]}
						slogan={t("loving the challenge every time I teach")}
					/>
				</div>
				<div className="trainersSlide">
					<WorkoutsImages
						pic="crossfit"
						text="Crossfit"
						workouts={["crossfit"]}
						slogan={t("motivated to get you moving")}
					/>
				</div>
				<div className="trainersSlide">
					<WorkoutsImages
						pic="epic45"
						text="Epic45"
						workouts={[ "epic45"]}
						slogan={t("serial fitness junkie")}
					/>
				</div>
				<div className="trainersSlide">
					<WorkoutsImages
						pic="yoga1"
						text="Yoga"
						workouts={["yoga"]}
						slogan={t("be fearless in the pursuit of your goal")}
					/>
				</div>
				
			</Slider>
		</div>
	);
}
