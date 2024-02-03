import { Link } from "react-router-dom";

function WorkoutOverview() {
  return (
    <div>
      <div>Start a new workout</div>
      <Link to="/new-workout">Start</Link>
    </div>
  );
}

export default WorkoutOverview;
