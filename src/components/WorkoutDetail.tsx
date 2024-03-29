import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";

import { Workout } from "../types/Workout";
import { Exercise } from "../types/Exercise";

import { GET_WORKOUTS, GET_EXERCISES, DELETE_WORKOUT } from "../queries";

import Card from "./core/Card";

import "./WorkoutDetail.css";

function WorkoutDetail({ workout }: { workout: Workout }): JSX.Element {
  const navigate = useNavigate();

  const {
    loading,
    data,
  }: { loading: Boolean; data: { exercises: Exercise[] } } = useQuery(
    GET_EXERCISES,
    { variables: { workoutId: workout.id } }
  );

  const [deleteWorkout] = useMutation(DELETE_WORKOUT, {
    refetchQueries: [{ query: GET_WORKOUTS }],
  });
  const date = new Date(workout.date);

  const handleDelete = () => {
    deleteWorkout({ variables: { id: workout.id } });
  };

  const workoutExercises = () => {
    return data?.exercises
      ?.slice(0, 3)
      .map(({ id, name }) => <div key={id}>{name}</div>);
  };

  // TODO: Replace this
  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <Card
      onClick={() => navigate(`/workouts/${workout.id}`)}
      onDelete={handleDelete}
      header={date.toDateString()}
      content={workoutExercises()}
    />
  );
}

export default WorkoutDetail;
