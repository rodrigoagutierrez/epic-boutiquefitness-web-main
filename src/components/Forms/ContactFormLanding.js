import "./ContactFormLanding.scss";

import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { send } from "emailjs-com";
import queryString from "query-string";
import { Link } from "gatsby-plugin-react-i18next";

const FORM_ENDPOINT = "";

export default function ContactFormLanding({
	formName = "contact",
	messageForm = true,
}) {
	const { t } = useTranslation();
	const [loading, setLoading] = React.useState(false);
	const [sent, setSent] = React.useState(undefined);

	const mailSubjects = {
		contact: "Landing Form - new message",
		join: "Join Form - new applicant",
	};

	const [toSend, setToSend] = React.useState({
		fmailSubject: mailSubjects[formName],
		fname: "",
		sname: "",
		from_email: "",
		phone: "",
		message: undefined,
		privacy: false,
		acquisition: undefined,
		// set ?acq=value for acquisition to have a value
	});
	// console.log(toSend);
	console.log(toSend.privacy);

	React.useEffect(() => {
		const queryParams = queryString.parse(window?.location?.search);
		setToSend((currentToSend) => {
			return { ...currentToSend, acquisition: queryParams?.acq };
		});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		setLoading(true);

		send("HostingerMail", "WebContactForm", toSend, "iJE2rvYwB9lKuIU6d")
			.then((response) => {
				setSent(true);
				setLoading(false);
				console.log("Mensaje enviado", response.status, response.text);
			})
			.catch((err) => {
				setSent(false);
				setLoading(false);
				console.log("Error enviando mensaje", err);
			});
	};

	const handleChange = (e) => {
		// console.log(e.target.name);
		if (e.target.type === "checkbox") {
			const value = e.target.checked === true ? "accept" : "reject";
			setToSend({ ...toSend, [e.target.name]: value });
		} else {
			setToSend({ ...toSend, [e.target.name]: e.target.value });
		}
	};

	return (
		<div className="contactFormLanding">
			<form
				action={FORM_ENDPOINT}
				onSubmit={handleSubmit}
				onChange={handleChange}
				method="POST"
				target="_blank"
				className="bold"
			>
				<div>
					<input
						type="text"
						placeholder={t("Name")}
						id="fname"
						name="fname"
						title=""
						required
					/>
					<input
						type="text"
						placeholder={t("Surname")}
						id="sname"
						name="sname"
						title=""
						required
					/>
					<input
						type="email"
						placeholder={t("Email")}
						id="from_email"
						name="from_email"
						title=""
						required
					/>
					<input
						type="tel"
						placeholder={t("Phone")}
						id="phone"
						name="phone"
						title=""
						required
					/>
					{messageForm && (
						<textarea
							placeholder={t("Message")}
							name="message"
							id="message"
							title=""
							required
						/>
					)}
					<div className="checkbox">
						<input
							type="checkbox"
							id="privacy"
							name="privacy"
							// value="accept"
							required
						/>
						<label htmlFor="privacy">
							<Trans>
								I accept the <Link to="/legal/privacy">privacy policy</Link>
							</Trans>
						</label>
					</div>
					<br></br>
				</div>

				<div className="formSubmit">
					{loading ? (
						<p>Enviando...</p>
					) : (
						<>
							<button type="submit" className="stripeBg turquoiseBg">
								{formName === "join" ? (
									<Trans>Claim free class</Trans>
								) : (
									<Trans>Send</Trans>
								)}
							</button>
						</>
					)}
				</div>
			</form>
			{sent === true && (
				<div className="formPopUp stripeBorder turquoiseBorder">
					<span className="bold">
						<Trans>success!</Trans>
					</span>
					<br></br>
					<br></br>
					<Trans>
						we have received your request and will get in touch with you soon at
					</Trans>{" "}
					<span className="bold"> {toSend.from_email} </span>
					{formName === "join" && (
						<>
							<br></br>
							<br></br>
							<Trans>
								is it your first time?{" "}
								<Link to="/first-timer" className="bold">
									check our tips
								</Link>
							</Trans>
						</>
					)}
				</div>
			)}
			{sent === false && (
				<div className="formError stripeBorder magentaBorder">
					<span className="bold">
						<Trans>error!</Trans>
					</span>
					<Trans>
						we're having some trouble with your request, please try again
					</Trans>
				</div>
			)}
		</div>
	);
}