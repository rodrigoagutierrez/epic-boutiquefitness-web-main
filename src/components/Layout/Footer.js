// main imports
import * as React from "react";

// plugin imports
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next";

// style imports
import "./Footer.scss";

// components imports

// svg imports
import BlackArrow from "../../svg/blackArrow.svg";
import FbLogo from "../../svg/brands/fbLogo.svg";
import IgLogo from "../../svg/brands/igLogo.svg";

// component

export default function Footer({ footerList }) {
	const { language, languages, originalPath } = useI18next();

	// var orderedMenu = menuList.sort((a, b) => a.footerOrder - b.footerOrder);

	// console.log(footerList);
	const aboutSections = footerList.about;
	const offerSections = footerList.offer;

	return (
		<footer>
			<div className="separator blackArrow">
				<BlackArrow />
			</div>
			<div className="footerMenu">
				<div className="footerSection">
					<h2 className="boxxy outline">
						<Trans>What we offer</Trans>
					</h2>
					{offerSections.map(({ link, text }, i) => (
						<Link key={"footerMenuLink" + i} to={link}>
							<h3 className="boxxy">{text}</h3>
						</Link>
					))}
				</div>

				<div className="footerSection">
					<h2 className="boxxy outline">
						<Trans>About us</Trans>
					</h2>
					{aboutSections.map(({ link, text }, i) => (
						<Link key={"footerMenuLink" + i} to={link}>
							<h3 className="boxxy">{text}</h3>
						</Link>
					))}
				</div>

				<div>
					<Link to="/join">
						<h3 className="boxxy CTA border">
							<Trans>Try for free</Trans>
						</h3>
					</Link>
					<Link to="/#downloadApp">
						<h3 className="boxxy">
							<Trans>Download our app</Trans>
						</h3>
					</Link>
					<Link to="/legal/privacy">
						<h3 className="boxxy">
							<Trans>privacy policy</Trans>
						</h3>
					</Link>
					<Link to="/legal/advice">
						<h3 className="boxxy">
							<Trans>legal advice</Trans>
						</h3>
					</Link>
					<Link to="/legal/cookies">
						<h3 className="boxxy">
							<Trans>cookie policy</Trans>
						</h3>
					</Link>
				</div>

				<div className="footerBottom">
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
					<div className="RRSSLogos">
						<a
							href="https://www.facebook.com/profile.php?id=100086483572410"
							className="blueBg fbLogo"
						>
							<FbLogo />
						</a>
						<a
							href="https://www.instagram.com/epicboutiquefitness/"
							className="magentaBg"
						>
							<IgLogo />
						</a>
					</div>
					<div>{new Date().getFullYear()} © EPIC</div>
					<div>
						<Trans>
							web by{" "}
							<a
								href="https://peim.es"
								target="_blank"
								rel="noreferrer"
								className="peimLink stripeBg black"
							>
								peim!
							</a>
						</Trans>
					</div>
				</div>
			</div>

			{/* <div className="footerBottom">
				<div className="RRSSLogos">
					<a
						href="https://www.facebook.com/profile.php?id=100086483572410"
						className="blueBg"
					>
						<FbLogo />
					</a>
					<a
						href="https://www.instagram.com/epicboutiquefitness/"
						className="magentaBg"
					>
						<IgLogo />
					</a>
				</div>
				<div>{new Date().getFullYear()} © EPIC</div>
				<div>
					<Trans>
						developed by{" "}
						<a
							href="https://peim.es"
							target="_blank"
							rel="noreferrer"
							className="peimLink stripeBg white"
						>
							peim! studio
						</a>
					</Trans>
				</div>
			</div> */}
		</footer>
	);
}
