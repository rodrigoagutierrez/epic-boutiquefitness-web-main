// main imports
import * as React from "react";

// Lazy-loads a component via dynamic import only when it scrolls near the viewport
export default function LazyLoad({ importFn, ...props }) {
	const [Component, setComponent] = React.useState(null);
	const containerRef = React.useRef(null);
	const startedRef = React.useRef(false);

	React.useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !startedRef.current) {
					startedRef.current = true;
					observer.disconnect();
					importFn().then((module) => {
						setComponent(() => module.default);
					});
				}
			},
			{ rootMargin: "600px 0px" }
		);

		observer.observe(container);
		return () => observer.disconnect();
	}, [importFn]);

	return (
		<div ref={containerRef} className="lazyLoad">
			{Component && <Component {...props} />}
		</div>
	);
}