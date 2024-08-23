// main imports
import * as React from "react";

// plugin imports
import { Trans } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";

// style imports
import "./DownloadApp.scss";

// components imports

// svg imports
import PlayStoreBadge from "../../svg/app/PlayStore.svg";
import AppStoreBadge from "../../svg/app/AppStore.svg";

// component
export default function DownloadApp() {
	const { t } = useTranslation();

	return (
		<div id="downloadApp">
			<h1 className="boxxy stripes black">
				<Trans>Download our app</Trans>
			</h1>

			<p>
				<Trans>
					We have an exclusive app that will let you manage your bookings, see
					the training sessions, find out how many people are registered for
					each session and even keep a personal record of each training session.
				</Trans>
			</p>

			<StaticImage
				src={`../../images/app/appMockup.png`}
				className="appImg"
				alt={t("A smartphone displaying the Epic app")}
				objectFit="contain"
			/>

			<div className="appBadges">
				<a
					href="https://play.google.com/store/apps/details?id=com.epicbfit.mainapp"
					rel="noopener noreferrer"
					target="_blank"
				>
					<PlayStoreBadge />
				</a>

				<a
					href="https://apps.apple.com/es/app/epic-boutique-fitness/id1645886973"
					rel="noopener noreferrer"
					target="_blank"
				>
					<AppStoreBadge />
				</a>
			</div>
		</div>
	);
}
