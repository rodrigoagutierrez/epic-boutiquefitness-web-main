// main imports
import * as React from "react";

// plugin imports
import { Link, useI18next } from "gatsby-plugin-react-i18next";

// style imports
import "./MenuMobile.scss";

// components imports

// svg imports
import MenuToggle from "/src/svg/menuToggle.svg";

export default function MenuMobile({ menuList }) {
	const [menuState, setMenuState] = React.useState(false);

	const { language, languages, originalPath } = useI18next();

	const toggleMenuState = () => {
		setMenuState(!menuState);
	};

	return (
		<>
			<button className="menuToggle" onClick={toggleMenuState}>
				<MenuToggle />
			</button>

			<div className={`menuMobile ${menuState ? "menuActive" : ""}`}>
				{menuList.map(({ link, text }, i) => (
					<Link key={"menuLink" + i} to={link} onClick={toggleMenuState}>
						<h2 className="boxxy">{text}</h2>
					</Link>
				))}
				<div className="languages boxxy">
					{languages.map((lng, i) => (
						<div key={lng}>
							{i !== 0 ? <span className="langSeparator">/</span> : ""}
							<Link
								to={originalPath}
								language={lng}
								className={lng === language ? "activeLang" : ""}
							>
								{lng}
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
