function Exercise({ exercise, onClick }) {
  return (
    <div onClick={() => onClick(exercise)}>
      <div>{exercise.name}</div>
    </div>
  );
}

export default Exercise;
