import useExcercisesContext from "../hooks/use-exercises-context";

function Exercise({ exercise, onClick }) {
  const { deleteExercise } = useExcercisesContext();

  return (
    <li>
      <a>
        <div
          className="is-flex is-align-items-center is-justify-content-space-between"
          onClick={() => onClick(exercise)}
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
