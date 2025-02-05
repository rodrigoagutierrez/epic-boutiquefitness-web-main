// main imports
import * as React from "react";

// plugin imports
import { Trans } from "react-i18next";

// style imports
import "./WorkoutSelector.scss";

// svg imports

// components imports
// workout icons
import BootcampIcon from "../../svg/workouts/bootcamp.svg";
import WodIcon from "../../svg/workouts/wod.svg";
import Epic45Icon from "../../svg/workouts/epic45.svg";
import YogaIcon from "../../svg/workouts/yoga.svg";
import WorkoutContent from "./WorkoutContent";

// component
export default function WorkoutSelector() {
	const [activeWorkout, setActiveWorkout] = React.useState("bootcamp");

	const changeWorkout = (workout) => {
		if (typeof document !== "undefined") {
			if (document.documentElement.clientWidth < 960) {
				window.location.hash = "";
				window.location.hash = "#workoutContent";
			}
		}

		setActiveWorkout(workout);
	};

	return (
		<div id="workoutSelector">
			<div className="workoutList boxxy outline">
				<button
					onClick={() => changeWorkout("bootcamp")}
					className={`${activeWorkout === "bootcamp" ? "active" : ""}`}
				>
					<div className="blue">Bootcamp</div>
					<BootcampIcon />
				</button>
				<button
					onClick={() => changeWorkout("wod")}
					className={`${activeWorkout === "wod" ? "active" : ""}`}
				>
					<div className="blue">wod</div>
					<WodIcon />
				</button>
				<button
					onClick={() => changeWorkout("epic45")}
					className={`${activeWorkout === "epic45" ? "active" : ""}`}
				>
					<div className="blue">Epic45</div>
					<Epic45Icon />
				</button>

				<button
					onClick={() => changeWorkout("yoga")}
					className={`${activeWorkout === "yoga" ? "active" : ""}`}
				>
					<div className="blue">Yoga</div>
					<YogaIcon />
				</button>
				<button
					onClick={() => changeWorkout("ptraining")}
					className={`${activeWorkout === "ptraining" ? "active" : ""}`}
				>
					<div className="blue">
						<Trans>Personal training</Trans>
					</div>
				</button>
			</div>

			<WorkoutContent section={activeWorkout} />
		</div>
	);
}
