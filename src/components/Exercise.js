function Exercise({ exercise, onClick, onDeleteExercise }) {
  return (
    <li>
      <a>
        <div
          className="is-flex is-align-items-center is-justify-content-space-between"
          onClick={() => onClick(exercise)}
        >
          {exercise.name}
          <button
            onClick={() => onDeleteExercise(exercise.id)}
            className="delete is-small"
          ></button>
        </div>
      </a>
    </li>
  );
}

export default Exercise;
