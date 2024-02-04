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

  const getWorkoutId = () => {
    return workoutId === "new" ? results?.data?.id : workoutId;
  };

  return (
    <div>
      <ExerciseCreate workoutId={getWorkoutId()} />
      <ExerciseList workoutId={getWorkoutId()} />
    </div>
  );
}

export default WorkoutDetails;
