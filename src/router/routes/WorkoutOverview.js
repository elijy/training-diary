import { Link, useNavigate } from "react-router-dom";
import {
  useGetWorkoutsQuery,
  useCreateWorkoutMutation,
} from "../../store/apis/workoutsApi";

function WorkoutOverview() {
  const navigate = useNavigate();
  const { data: workouts } = useGetWorkoutsQuery();
  const [createWorkout, results] = useCreateWorkoutMutation();

  const handleClick = () => {
    // createWorkout(new Date());
    navigate("/workouts/new");
  };

  return (
    <div>
      <button
        className="button is-large is-primary is-rounded is-fullwidth"
        onClick={handleClick}
      >
        Start a new workout
      </button>
      <div className="container">
        {workouts?.map((workout) => {
          return (
            <div key={workout.id}>
              <Link to={`${workout.id}`}>{workout.date}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorkoutOverview;
