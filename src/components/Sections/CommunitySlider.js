// main imports
import * as React from "react";

// plugin imports
import { Trans } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";

// style imports
import "./CommunitySlider.scss";
import "./Slider-theme.scss";
import "slick-carousel/slick/slick.css";

// components imports

// svg imports

// component
export default function CommunitySlider() {
	var sliderSettings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: "ease-out",
		pauseOnHover: true,

		// We have to toggle between fixedWidth for mobile (slide width < 1400px) and desktop
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1444,
				settings: {
					variableWidth: false,
				},
			},
		],
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
		<div id="communitySlider" ref={containerRef}>
			<Slider {...sliderSettings} ref={sliderRef}>
				<div className="reviewSlide stripeBorder blackBorder">
					<div>
						<StaticImage
							src={"../../images/reviews/guille.jpg"}
							alt="an image of Guille, an epic user, goofing around the rings"
							className="reviewImg"
						/>
						<div className="reviewText">
							<p>
								"
								<Trans i18nKey="reviewGuille">
									El mejor sitio para entrenar en pleno centro. La comunicación
									con los entrenadores es muy buena, adaptan el ejercicio bien
									sea por lesión o por iniciación.
									<br></br>
									Ambiente genial y local siempre limpio.
									<br></br>
									Lo recomiendo a todos.
								</Trans>
								"
							</p>
							<p className="reviewAuthor boxxy">Guille</p>
						</div>
					</div>
				</div>
				<div className="reviewSlide stripeBorder blackBorder">
					<div>
						<StaticImage
							src={"../../images/reviews/tania.jpg"}
							alt="an image of Tania, an epic user, laughing when hanging from the bar"
							className="reviewImg"
						/>
						<div className="reviewText">
							<p>
								"
								<Trans i18nKey="reviewTania">
									Empecé a entrenar en EPIC por recomendaciones de una amiga.
									Nunca había practicado CrossFit y desde el principio me
									adaptaron los ejercicios. En poco tiempo empecé a ver
									resultados, mi técnica y fuerza mejoraron sin darme cuenta.
									<br></br>
									Gracias a esta comunidad de crossfiters he hecho grandes
									amistades con las que comparto momentos dentro y fuera del
									box. Recomendable 100%!!!
								</Trans>
								"
							</p>
							<p className="reviewAuthor boxxy">Tania</p>
						</div>
					</div>
				</div>
				<div className="reviewSlide stripeBorder blackBorder">
					<div>
						<StaticImage
							src={"../../images/reviews/miguel.jpg"}
							alt="an image of Miguel, an epic user, resting in between workouts"
							className="reviewImg"
						/>
						<div className="reviewText">
							<p>
								"
								<Trans>
									El equipo de entrenador@s es excepcional, siempre ayudándote a
									aprender la técnica correctamente y motivándote a superar cada
									reto. El mejor box para alcanzar tus objetivos.
								</Trans>
								"
							</p>
							<p className="reviewAuthor boxxy">Miguel</p>
						</div>
					</div>
				</div>
				<div className="reviewSlide stripeBorder blackBorder">
					<div>
						<StaticImage
							src={"../../images/reviews/rocio.jpg"}
							alt="an image of Tania, an epic user, laughing when hanging from the bar"
							className="reviewImg"
						/>
						<div className="reviewText">
							<p>
								"
								<Trans>
									Llevaba muchos años haciendo ejercicio pero mi marido me
									convenció para probar los entrenamientos de EPIC. Desde
									entonces descubrí una nueva forma de entrenar variada,
									divertida y que me ha hecho estar en mejor forma física que
									nunca. Pero lo que más me gusta es que cada vez que entro en
									EPIC me siento como en casa, en familia… Además, mi marido y
									yo siempre que podemos entrenamos juntos. Es una suerte poder
									compartir con tu pareja esta forma de vida.
								</Trans>
								"
							</p>
							<p className="reviewAuthor boxxy">Rocio</p>
						</div>
					</div>
				</div>
			</Slider>
			<p className="hashtags bold">
				<span>#you_are_epic</span>
				{/* TO-DO: could be actual links to Instagram hashtag search if the hashtag is actually used */}
				<span>#burn_build_change</span>
			</p>
		</div>
	);
}
