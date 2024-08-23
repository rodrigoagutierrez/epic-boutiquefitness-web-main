// main imports
import * as React from "react";

// plugin imports
import { useLocation } from "@reach/router";
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies";

// style imports
import "./CookiesBanner.scss";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "gatsby-plugin-react-i18next";
import ToggleButton from "./ToggleButton";

// components imports

// svg imports

// function exports for use in other pages
export const addCookies = (date, location) => {
	// console.log("addCookies running");
	const acceptAppendix =
		"=true;path=/;SameSite=none;Secure;expires=" + date.toGMTString();
	// console.log(acceptAppendix);

	if (typeof document != "undefined") {
		document.cookie = "cookiesStored" + acceptAppendix;
		document.cookie = "cookiesAccepted" + acceptAppendix;
		document.cookie = "gatsbynpm-gdpr-google-analytics" + acceptAppendix;
		document.cookie = "gatsby-gdpr-facebook-pixel" + acceptAppendix;
		document.cookie = "gatsby-gdpr-google-tagmanager" + acceptAppendix;
		document.cookie = "gatsby-gdpr-tiktok-pixel" + acceptAppendix;
		document.cookie = "gatsby-gdpr-hotjar" + acceptAppendix;
		document.cookie = "gatsby-gdpr-linked-in" + acceptAppendix;

		// console.log("Initializing tracking");
		initializeAndTrack(location);
	}
};
export const rejectCookies = (date) => {
	// console.log("rejectCookies running");
	const rejectAppendix =
		"=false;path=/;SameSite=none;Secure;expires=" + date.toGMTString();

	if (typeof document != "undefined") {
		document.cookie =
			"cookiesStored" +
			"=true;path=/;SameSite=none;Secure;expires=" +
			date.toGMTString();

		document.cookie = "cookiesAccepted" + rejectAppendix;
		document.cookie = "gatsbynpm-gdpr-google-analytics" + rejectAppendix;
		document.cookie = "gatsby-gdpr-facebook-pixel" + rejectAppendix;
		document.cookie = "gatsby-gdpr-google-tagmanager" + rejectAppendix;
		document.cookie = "gatsby-gdpr-tiktok-pixel" + rejectAppendix;
		document.cookie = "gatsby-gdpr-hotjar" + rejectAppendix;
		document.cookie = "gatsby-gdpr-linked-in" + rejectAppendix;
	}
};
export const getCookie = (name) => {
	if (typeof document != "undefined") {
		// console.log(document);
		var v = document?.cookie?.match("(^|;) ?" + name + "=([^;]*)(;|$)");
		// console.log(v);
		if (v) {
			if (v[2] === "true") {
				return true;
			} else if (v[2] === "false") {
				return false;
			} else {
				return v[2];
			}
		}
	}
	return null;
};

// component
export default function CookieBanner() {
	const { t } = useTranslation();

	const [funcCookies, setFuncCookies] = React.useState(true);
	const [mktCookies, setMktCookies] = React.useState(
		getCookie("cookiesAccepted")
	);
	const [cookiesStored, setCookiesStored] = React.useState(
		getCookie("cookiesStored")
	);

	const location = useLocation();

	// console.log(cookiesStored);

	// console.log("cookiesStored is: " + cookiesStored);
	// console.log("cookiesAccepted is: " + cookiesAccepted);

	React.useEffect(() => {
		// console.log("useEffect running");
		// we have to do this inside the useEffect to prevent Date mismatches from server to client
		const expiry = new Date();
		expiry.setTime(expiry.getTime() + 365 * 24 * 60 * 60 * 1000);

		if (mktCookies && cookiesStored) {
			// if cookies are accepted and have not been previously added, store them
			// console.log("Accepting cookies");
			addCookies(expiry, location);
		}

		if (!mktCookies && cookiesStored) {
			// if cookies are disabled, remove them
			// console.log("Rejecting cookies");
			rejectCookies(expiry);
		}
	}, [mktCookies, cookiesStored, location]);

	return (
		<>
			{!cookiesStored && (
				<div className={`cookiesBanner`}>
					<p className="boxxy">
						<Trans>cookies</Trans>
					</p>
					<p>
						<Trans>
							We use our own and third-party cookies to improve our services by
							analyzing your browsing habits.
						</Trans>
					</p>
					<p>
						<Trans>
							You can accept cookies by clicking on the "accept" button or
							configure or reject their use by clicking on the{" "}
							<Link to="/legal/cookies">Cookie Policy</Link>
						</Trans>
						.
					</p>
					<ToggleButton
						className="boxxy"
						label={t("Functional")}
						checked={funcCookies}
						onClick={() => setFuncCookies(true)}
					/>
					<ToggleButton
						className="boxxy"
						label={t("Marketing")}
						checked={mktCookies}
						onClick={() => {
							setMktCookies(!mktCookies);
						}}
					/>
					<button onClick={() => setCookiesStored(true)}>
						<Trans>Save configuration</Trans>
					</button>
					<button
						onClick={() => {
							setCookiesStored(true);
							setMktCookies(true);
						}}
						className="boxxy acceptAllButton"
					>
						<Trans>ACCEPT ALL</Trans>
					</button>
				</div>
			)}
		</>
	);
}
