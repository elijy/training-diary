import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_WORKOUTS } from "../../queries/getWorkouts";

import { Workout } from "../../types/Workout";

import WorkoutDetail from "../../components/WorkoutDetail";

function WorkoutOverview() {
  const navigate = useNavigate();

  const { loading, data }: { loading: Boolean; data: { workouts: Workout[] } } =
    useQuery(GET_WORKOUTS);

  const handleClick = () => {
    navigate("/workouts/new");
  };

  // TODO: Add skeleton loading component
  if (loading) {
    return <div></div>;
  }

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
          {data?.workouts?.map((workout) => {
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
