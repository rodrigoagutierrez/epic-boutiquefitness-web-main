// main imports
import * as React from "react";
import { graphql } from "gatsby";

// plugin imports
import { Trans, useTranslation } from "react-i18next";

// style imports
import "./faq.scss";

// components imports
import Layout from "../../components/Layout/Layout.js";
import Seo from "../../components/Seo/Seo.js";
import { Link } from "gatsby-plugin-react-i18next";

// svg imports

// page
export default function IndexPage() {
	const { t } = useTranslation();

	return (
		<Layout>
			<Seo title={t("Join")} />
			<div id="faq">
				<div>
					<span className="question boxxy">
						<Trans>What amenities do you provide?</Trans>
					</span>
					<span className="answer">
						<Trans>
							Lockers are available for your personal belongings while you
							workout. If you would like to freshen-up after your workout, we
							have complimentary toiletries and GHD Hair dryers/Straighteners.
						</Trans>
					</span>
				</div>
				<div>
					<span className="question boxxy">
						<Trans>Can I do a trial class?</Trans>
					</span>
					<span className="answer">
						<Trans>
							Yes, we would love you to try before you buy!{" "}
							<Link to="/join">Click here to book your free class</Link>.
						</Trans>
					</span>
				</div>
				<div>
					<span className="question boxxy">
						<Trans>Can I join if I am a beginner?</Trans>
					</span>
					<span className="answer">
						<Trans>
							Of course you can. All our programmes are intensity based and
							ensure that everyone who comes to class gets the best workout
							possible. You can run or walk, go heavy or go light – YOU do YOU!!
						</Trans>
					</span>
				</div>
				<div>
					<span className="question boxxy">
						<Trans>Do I need to book in advance?</Trans>
					</span>
					<span className="answer">
						<Trans>
							Yes all reservations are made over our app and workouts can be
							booked up to 3 days in advance.
						</Trans>
					</span>
				</div>
				{/* <div>
					<span className="question boxxy">
						<Trans>Can I use my classes at any location?</Trans>
					</span>
					<span className="answer">
						<Trans>
							Yes with your membership you can workout in EPIC-Valencia or
							EPIC-Madrid at no extra charge. (Membership must pertain to city
							of residence).
						</Trans>
					</span>
				</div> */}
				<div>
					<span className="question boxxy">
						<Trans>What is your class cancellation policy?</Trans>
					</span>
					<span className="answer">
						<Trans>
							We understand that sometimes bookings need to be changed. You may
							cancel or edit your bookings up to 1 hour before the class.
							Unfortunately any cancellations or changes done within the 1 hour
							window before the class starts, will incur a loss of your class
							credit.
						</Trans>
					</span>
				</div>
				<div>
					<span className="question boxxy">
						<Trans>What if I miss my class?</Trans>
					</span>
					<span className="answer">
						<Trans>
							If you are unable to attend class you will lose the class credit.
							A no-show is considered to be the same as a late cancellation.
						</Trans>
					</span>
				</div>
				<div>
					<span className="question boxxy">
						<Trans>What if I am late to class?</Trans>
					</span>
					<span className="answer">
						<Trans>
							A lot of planning goes into the final minutes before our classes
							start so we ask you to be ready 5 minutes before it begins.{" "}
							<i>
								If a member is waiting to join a class but does not have a
								booking because the class is full, they may be given your spot
								in the class if you are late.
							</i>
						</Trans>
					</span>
				</div>
				<div>
					<span className="question boxxy">
						<Trans>How does the Waitlist work?</Trans>
					</span>
					<span className="answer">
						<Trans>
							If a class is fully booked you can join the waitlist. When someone
							cancels their booking, a pop-up notification will appear on your
							phone that a space has become available.
						</Trans>
					</span>
				</div>
				<div>
					<span className="question boxxy">
						<Trans>Can I change my booking?</Trans>
					</span>
					<span className="answer">
						<Trans>
							Yes, we know schedules change from time to time. Please do
							remember that if you change your booking within 1 hours before the
							class or you will be charged 1 class credit for the cancelled
							class.
						</Trans>
					</span>
				</div>
				<div>
					<span className="question boxxy">
						<Trans>Can I join if I am pregnant or had a baby?</Trans>
					</span>
					<span className="answer">
						<Trans>
							We think it is awesome that you are keen to stay fit and healthy
							while pregnant. Getting back in shape after a baby is also
							important. The most important thing here is that your doctor has
							given you the go-ahead to complete a EPIC workout, which may
							include running, rowing, cycling or strength activities. Please
							take classes at your own pace and best to have a word with our
							instructor prior to the class starting as modifications to
							exercises and exertion levels may be required.
						</Trans>
					</span>
				</div>
				<div>
					<span className="question boxxy">
						<Trans>Are there any events for members?</Trans>
					</span>
					<span className="answer">
						<Trans>
							Yes, there are events for members. Keep an eye on our Instagram
							page to sign up for these, and make sure you have activated our
							app notifications on your phone.
						</Trans>
					</span>
				</div>
			</div>
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
