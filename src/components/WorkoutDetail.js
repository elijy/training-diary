import { useGetExercisesQuery } from "../store/apis/exercisesApi";
import { useNavigate } from "react-router-dom";

function WorkoutDetail({ workout }) {
  const navigate = useNavigate();
  const { data: exercises } = useGetExercisesQuery(workout.id);
  const date = new Date(workout.date);

  return (
    <div
      className="card"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/workouts/${workout.id}`)}
    >
      <div className="card-header">
        <div className="card-header-title">{date.toDateString()}</div>
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
