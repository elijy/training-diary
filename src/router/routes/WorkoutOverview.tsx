import { useNavigate } from "react-router-dom";
import { useGetWorkoutsQuery } from "../../store/apis/workoutsApi";

import WorkoutDetail from "../../components/WorkoutDetail";

function WorkoutOverview() {
  const navigate = useNavigate();
  const { data: workouts } = useGetWorkoutsQuery();

  const handleClick = () => {
    navigate("/workouts/new");
  };

  return (
    <div>
      <div className="block">
        <button
          className="button is-large is-primary is-rounded is-fullwidth"
          onClick={handleClick}
        >
          Start a new workout
        </button>
      </div>
      <div className="block">
        <div className="columns is-multiline">
          {workouts?.map((workout) => {
            return (
              <div className="column is-one-quarter" key={workout.id}>
                <WorkoutDetail workout={workout} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WorkoutOverview;
