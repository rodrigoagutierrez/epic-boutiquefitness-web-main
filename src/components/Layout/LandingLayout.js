// main imports
import * as React from "react";

// plugin imports
import { useTranslation } from "gatsby-plugin-react-i18next";

// style imports
import "./LandingLayout.scss";
import "../../styles/main.scss";

// components imports
import HeaderLanding from "../Sections/LandingHeader";
import WhappButton from "./WhappButton";
import CookieBanner from "./CookiesBanner";

// svg imports
import BookNowButton from "./BookNowButton";
import Footer from "./Footer";

// component
export default function LandingLayout({ children }) {
	// Disable animations on window resize
	React.useEffect(() => {
		if (window) {
			let resizeTimer;
			window.addEventListener("resize", () => {
				document.body.classList.add("resize-animation-stopper");
				clearTimeout(resizeTimer);
				resizeTimer = setTimeout(() => {
					document.body.classList.remove("resize-animation-stopper");
				}, 750);
			});
		}
	});

	const { t } = useTranslation();

	const footerList = {
		about: [
			{ link: "/#contact", text: t("contact") },
			{ link: "/#about", text: t("about") + " EPIC" },
			{ link: "/#trainers", text: t("trainers") },
			{ link: "/jobs", text: t("work with us") },
		],
		offer: [
			{ link: "/#workout", text: t("workouts") },
			{ link: "/#intro", text: t("join us") },
			{ link: "/#firstTimer", text: t("first timers") },
			{ link: "/#services", text: t("services") },
			{ link: "/faq", text: t("FAQ") },
		],
	};

	return (
		<>
			<nav>
				<HeaderLanding />
			</nav>
			<CookieBanner />
			<WhappButton />
			<BookNowButton />
			<main>{children}</main>


			<Footer footerList={footerList} />
		</>
	);
}
