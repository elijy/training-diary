import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_WORKOUTS } from "../../queries/getWorkouts";

import { Workout } from "../../types/Workout";

import WorkoutDetail from "../../components/WorkoutDetail";

function WorkoutOverview() {
  const navigate = useNavigate();

  const { loading, data }: { loading: Boolean; data: { workouts: Workout[] } } =
    useQuery(GET_WORKOUTS);

  const sortedWorkouts = useMemo(() => {
    let sortedWorkouts: Workout[] = [];
    if (!loading) {
      sortedWorkouts = data?.workouts?.slice();
      sortedWorkouts.sort((a, b) => {
        return new Date(b.date).valueOf() - new Date(a.date).valueOf();
      });
    }
    return sortedWorkouts;
  }, [data, loading]);

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
          {sortedWorkouts?.map((workout) => {
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
