import ExerciseList from "../../components/ExerciseList";
import ExerciseCreate from "../../components/ExerciseCreate";

function NewWorkout() {
  return (
    <div>
      <ExerciseCreate />
      <ExerciseList />
    </div>
  );
}

export default NewWorkout;
