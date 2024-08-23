// main imports
import * as React from "react";
import { graphql } from "gatsby";

// plugin imports
import { Trans, useTranslation } from "react-i18next";

// style imports
import "./join.scss";

// components imports
import Layout from "../../components/Layout/Layout.js";
import Seo from "../../components/Seo/Seo.js";
import ContactForm from "../../components/Forms/ContactForm";
import ContactDetails from "../../components/Sections/ContactDetails";
import { Link } from "gatsby-plugin-react-i18next";

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
						<Trans>Come and experience it</Trans>
					</h2>
					<h1>
						<Trans>The first class is free</Trans>
					</h1>
				</div>

				<ContactForm formName="join" messageForm={false} />

				<div style={{ textAlign: "right" }}>
					<Trans>
						and don't forget to check{" "}
						<Link to="/#firstTimer" className="bold">
							our guide
						</Link>{" "}
						to fully enjoy your class
					</Trans>
				</div>
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
