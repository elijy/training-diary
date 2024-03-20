import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";

import { GET_WORKOUTS, ADD_WORKOUT } from "../../queries";

import Card from "../../components/core/Card";
import { IoIosAddCircle } from "react-icons/io";

import { Workout } from "../../types/Workout";

import WorkoutDetail from "../../components/WorkoutDetail";

function WorkoutOverview() {
  const [createWorkout] = useMutation(ADD_WORKOUT, {
    refetchQueries: [{ query: GET_WORKOUTS }],
  });

  const { loading, data }: { loading: Boolean; data: { workouts: Workout[] } } =
    useQuery(GET_WORKOUTS);

  const handleClick = () => {
    createWorkout({ variables: { date: new Date() } });
  };

  const newWorkoutCard = () => {
    return (
      <div className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
        <div className="subtitle">Add a new workout</div>
        <IoIosAddCircle className="icon is-large" />
      </div>
    );
  };

  // TODO: Add skeleton loading component
  if (loading) {
    return <div></div>;
  }

  return (
    <div className="block">
      <div className="columns is-multiline">
        <div className="column is-one-quarter">
          <Card onClick={handleClick} content={newWorkoutCard()} />
        </div>
        {data?.workouts?.map((workout) => {
          return (
            <div className="column is-one-quarter" key={workout.id}>
              <WorkoutDetail workout={workout} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorkoutOverview;
