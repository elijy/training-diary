import useExcercisesContext from "../hooks/use-exercises-context";

function Exercise({ exercise }) {
  const { deleteExercise, setSelectedExercise } = useExcercisesContext();

  return (
    <li>
      <a>
        <div
          className="is-flex is-align-items-center is-justify-content-space-between"
          onClick={() => setSelectedExercise(exercise)}
        >
          {exercise.name}
          <button
            onClick={() => deleteExercise(exercise.id)}
            className="delete is-small"
          ></button>
        </div>
      </a>
    </li>
  );
}

export default Exercise;
