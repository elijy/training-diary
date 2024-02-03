import ListItem from "./core/ListItem";

function ExerciseListItem({ exercise, onClick, onDelete }) {
  return (
    <ListItem
      onClick={() => onClick(exercise)}
      onDelete={() => onDelete(exercise)}
    >
      {exercise.name}
    </ListItem>
  );
}

export default ExerciseListItem;
