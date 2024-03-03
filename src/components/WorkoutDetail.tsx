import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { Workout } from "../types/Workout";
import { Exercise } from "../types/Exercise";

import { useDeleteWorkoutMutation } from "../store/apis/workoutsApi";

import { GET_EXERCISES } from "../queries/getExercises";

import "./WorkoutDetail.css";

function WorkoutDetail({ workout }: { workout: Workout }): JSX.Element {
  const navigate = useNavigate();

  const { data }: { data: { exercises: Exercise[] } } = useQuery(
    GET_EXERCISES,
    { variables: { workoutId: workout.id } }
  );

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
        {data?.exercises?.slice(0, 3).map((exercise) => (
          <div key={exercise.id}>{exercise.name}</div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutDetail;
