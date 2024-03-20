import ExerciseList from "../../components/ExerciseList";
import ExerciseCreate from "../../components/ExerciseCreate";

import { useParams } from "react-router-dom";

function WorkoutDetails() {
  const { workoutId } = useParams();

  return (
    <div>
      <ExerciseCreate workoutId={workoutId} />
      <ExerciseList workoutId={workoutId} />
    </div>
  );
}

export default WorkoutDetails;
