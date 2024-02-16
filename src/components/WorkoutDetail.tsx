import { useGetExercisesQuery } from "../store/apis/exercisesApi";
import { useNavigate } from "react-router-dom";
import { Workout } from "../types/Workout";
import { useDeleteWorkoutMutation } from "../store/apis/workoutsApi";
import "./WorkoutDetail.css";

function WorkoutDetail({ workout }: { workout: Workout }): JSX.Element {
  const navigate = useNavigate();
  const { data: exercises } = useGetExercisesQuery(workout.id);
  const [deleteWorkout] = useDeleteWorkoutMutation();
  const date = new Date(workout.date);

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteWorkout(workout.id);
  };

  return (
    <div className="card" onClick={() => navigate(`/workouts/${workout.id}`)}>
      <div className="card-header">
        <div className="card-header-title is-justify-content-space-between">
          {date.toDateString()}
          <button
            data-testid="delete"
            onClick={handleDelete}
            className="delete is-small"
          ></button>
        </div>
      </div>
      <div className="card-content">
        {exercises?.slice(0, 3).map((exercise) => (
          <div key={exercise.id}>{exercise.name}</div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutDetail;
