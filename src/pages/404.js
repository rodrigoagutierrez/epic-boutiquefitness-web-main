// main imports
import * as React from "react";
import { graphql } from "gatsby";

// plugin imports
import { Link } from "gatsby";
import { Trans, useTranslation } from "react-i18next";

// style imports
import "./404.scss";

// svg imports

// components imports
import Layout from "../components/Layout/Layout.js";
import Seo from "../components/Seo/Seo.js";

// page
const NotFoundPage = () => {
	const { t } = useTranslation();

	return (
		<Layout>
			<Seo title={t("Home")} />

			<div id="errorPage">
				<h2 className="boxxy">Error 404</h2>
				<h1 className="boxxy outline">
					<Trans>Oh, cramp!</Trans>
				</h1>

				<div>
					<Trans>The page you're looking for is not around here</Trans>
				</div>

				<h2>
					<Link to="/">
						<Trans>go home</Trans>
					</Link>
				</h2>
			</div>
		</Layout>
	);
};

export default NotFoundPage;

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
