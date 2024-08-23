// main imports
import { Link } from "gatsby-plugin-react-i18next";
import * as React from "react";

// plugin imports
import { Trans } from "react-i18next";

// style imports
import "./FirstTimer.scss";

// components imports

// svg imports

// page
export default function FirstTimer() {
	return (
		<div id="firstTimer">
			<h1 className="boxxy">
				<Trans>
					First timer?
					<br></br>
					<span className="boxxy outline">we have you covered</span>
				</Trans>
			</h1>
			<h2 className="boxxy">
				<Trans>
					<span className="boxxy outline">how to</span> prepare
				</Trans>
			</h2>

			<div>
				<h3>
					<Trans>stay hydrated</Trans>
				</h3>
				<Trans>
					sweating is part of the fun, but dehydration isn’t, so drink plenty of
					fluids beforehand.
				</Trans>
			</div>

			<div>
				<h3>
					<Trans>what to wear</Trans>
				</h3>
				<Trans i18nKey="ft-wear">
					keep it light and keep it tight too if you prefer, just make sure
					you're comfortable.
					<br></br>
					make sure you bring indoor shoes that will keep you stable and
					supported.
				</Trans>
			</div>

			<div className="boxxy">
				<h2>
					<Trans>
						<span className="boxxy outline">When you </span>arrive
						<span className="boxxy outline"> at epic</span>
					</Trans>
				</h2>
			</div>
			<div>
				<h3>
					<Trans>check-in</Trans>
				</h3>
				<Trans i18nKey="ft-checkin">
					for your first session we recommend you arrive 15 minutes beforehand,
					our team will be ready to welcome you.
					<br></br>
					we're here to make sure you get the most out of every session with us,
					our team will be there to show you around and to get you started.
				</Trans>
			</div>

			<div className="boxxy">
				<h2>
					<Trans>
						after
						<span className="boxxy outline"> your workout</span>
					</Trans>
				</h2>
			</div>

			<div>
				<h3>
					<Trans>book again</Trans>
				</h3>
				<Trans>we can't wait to see you for another workout!</Trans>
			</div>

			<div>
				<h3>
					<Trans>don't miss out</Trans>
				</h3>
				<Trans>follow us on </Trans>{" "}
				<a
					href="https://www.instagram.com/epicboutiquefitness/"
					target="_blank"
					rel="noopener noreferrer"
					style={{ textDecoration: "underline" }}
				>
					instagram
				</a>
			</div>

			<div>
				<h3>
					<Trans>any doubts?</Trans>
				</h3>
				<Trans>
					pass by reception and our team will be more than happy to answer any
					final questions you have.
				</Trans>
				<br />
				<Trans>
					you can also check our{" "}
					<Link style={{ textDecoration: "underline" }} to="/faq">
						FAQ
					</Link>
					.
				</Trans>
			</div>
		</div>
	);
}
