// main imports
import * as React from "react";

// plugin imports
import { Link, useTranslation } from "gatsby-plugin-react-i18next";

// style imports
import "./Layout.scss";
import "../../styles/main.scss";

// components imports
import WhappButton from "./WhappButton";
import CookieBanner from "./CookiesBanner";

// svg imports
import BlackArrow from "../../svg/blackArrow.svg";
import Logo from "../../svg/logo/logoTag.svg";
import BookNowButton from "./BookNowButton";
import MenuMobile from "./MenuMobile";
import Footer from "./Footer";

// component
export default function Layout({ children }) {
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

	const menuList = [
		{ link: "/#intro", text: t("join us") },
		{ link: "/#workout", text: t("workouts") },
		{ link: "/#firstTimer", text: t("first timers") },
		{ link: "/#about", text: t("about") + " EPIC" },
		{ link: "/#services", text: t("services") },
		{ link: "/#trainers", text: t("trainers") },
		{ link: "/#community", text: t("community") },
		// { link: "/#values", text: t("values")},
		{ link: "/#contact", text: t("contact") },
		{ link: "/jobs", text: t("work with us") },
	];

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
				<div className="topArrow">
					<BlackArrow />
					<div></div>
				</div>
				<Link to="/">
					<Logo className="navLogo" />
				</Link>
				<MenuMobile menuList={menuList} />
			</nav>
			<CookieBanner />
			<WhappButton />
			<BookNowButton />
			<main>{children}</main>

			<Footer footerList={footerList} />
		</>
	);
}
