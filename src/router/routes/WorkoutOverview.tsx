import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useGetWorkoutsQuery } from "../../store/apis/workoutsApi";

import { Workout } from "../../types/Workout";

import WorkoutDetail from "../../components/WorkoutDetail";

function WorkoutOverview() {
  const navigate = useNavigate();
  const { data: workouts, isSuccess } = useGetWorkoutsQuery();

  const sortedWorkouts = useMemo(() => {
    let sortedWorkouts: Workout[] = [];
    if (isSuccess) {
      sortedWorkouts = workouts?.slice();
      sortedWorkouts.sort((a, b) => {
        return new Date(b.date).valueOf() - new Date(a.date).valueOf();
      });
    }
    return sortedWorkouts;
  }, [workouts, isSuccess]);

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
