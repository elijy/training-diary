import ExerciseList from "../../components/ExerciseList";
import ExerciseCreate from "../../components/ExerciseCreate";
import { useCreateWorkoutMutation } from "../../store/apis/workoutsApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function WorkoutDetails() {
  const { workoutId } = useParams();
  const [createWorkout, results] = useCreateWorkoutMutation();

  useEffect(() => {
    if (workoutId === "new") {
      createWorkout(new Date());
    }
  }, [workoutId, createWorkout]);

  return (
    <div>
      <ExerciseCreate workoutId={results?.data?.id} />
      <ExerciseList />
    </div>
  );
}

export default WorkoutDetails;
