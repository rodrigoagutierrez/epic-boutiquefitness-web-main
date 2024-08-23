// main imports
import * as React from "react";
import { graphql } from "gatsby";

// plugin imports
import { Trans, useTranslation } from "react-i18next";

// style imports
import "./jobs.scss";

// components imports
import Layout from "../../components/Layout/Layout.js";
import Seo from "../../components/Seo/Seo.js";
import ContactDetails from "../../components/Sections/ContactDetails";

// svg imports

// page
export default function IndexPage() {
	const { t } = useTranslation();

	return (
		<Layout>
			<Seo title={t("Join")} />
			<div id="joinForm">
				<div className="contactTitle boxxy">
					<h2 className="stripes white">
						<Trans ns="work">Have you got what it takes to</Trans>
					</h2>
					<h2>
						<Trans ns="work">deliver the best in class, in every class?</Trans>
					</h2>
				</div>

				<p>
					<Trans ns="work">
						We're always on the hunt for new team members. Our aim is to always
						deliver exceptional service in our workouts and customer relations.
					</Trans>
				</p>

				<p>
					<Trans ns="work">
						Being part of EPIC means truly living and breathing who we are as a
						company.
					</Trans>
				</p>

				<h2 className="boxxy outline applyCTA">
					<Trans ns="work">Apply now</Trans>
				</h2>

				<p>
					<Trans ns="work">
						If you are interested in joining our team, please email your CV with
						a covering note explaining why you are right for the job:
					</Trans>
				</p>

				<a href="mailto:admin@epicboutiquefitness.com" className="applyMail">
					<h3>admin@epicboutiquefitness.com</h3>
				</a>
			</div>

			<ContactDetails />
		</Layout>
	);
}

// graphql query
export const query = graphql`
	query ($language: String!) {
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`;
