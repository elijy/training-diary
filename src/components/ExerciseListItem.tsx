import { Exercise } from "../models/Exercise";
import ListItem from "./core/ListItem";

interface Props {
  exercise: Exercise;
  onClick: (exercise: Exercise) => void;
  onDelete: (exercise: Exercise) => void;
}

function ExerciseListItem({ exercise, onClick, onDelete }: Props): JSX.Element {
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
