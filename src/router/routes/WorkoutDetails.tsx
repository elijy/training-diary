import ExerciseList from "../../components/ExerciseList";
import ExerciseCreate from "../../components/ExerciseCreate";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_WORKOUT } from "../../queries/addWorkout";

function WorkoutDetails() {
  const { workoutId } = useParams();
  const [createWorkout, { data }] = useMutation(ADD_WORKOUT);

  useEffect(() => {
    if (workoutId === "new") {
      createWorkout({ variables: { date: new Date() } });
    }
  }, [workoutId, createWorkout]);

  const getWorkoutId = () => {
    return workoutId === "new" ? data?.id : workoutId;
  };

  return (
    <div>
      <ExerciseCreate workoutId={getWorkoutId()} />
      <ExerciseList workoutId={getWorkoutId()} />
    </div>
  );
}

export default WorkoutDetails;
