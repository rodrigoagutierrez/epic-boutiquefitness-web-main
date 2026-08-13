// main imports
import * as React from "react";

// Generic reveal-on-scroll hook.
// Marks the body as "reveal-ready" and observes every [data-reveal] element,
// adding .reveal-in when it enters the viewport. Content is always visible
// when JS is unavailable (progressive enhancement).
// Pass an array of deps (e.g. the current pathname) so it re-observes after
// client-side navigation.
export function useRevealOnScroll(deps = []) {
	React.useEffect(() => {
		if (typeof window === "undefined") return undefined;

		document.body.classList.add("reveal-ready");

		if (!("IntersectionObserver" in window)) {
			document
				.querySelectorAll("[data-reveal]")
				.forEach((el) => el.classList.add("reveal-in"));
			return undefined;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("reveal-in");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
		);

		const els = document.querySelectorAll("[data-reveal]");
		els.forEach((el) => observer.observe(el));

		return () => {
			observer.disconnect();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps);
}