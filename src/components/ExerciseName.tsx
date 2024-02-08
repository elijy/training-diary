import { useState } from "react";
import { useUpdateExerciseMutation } from "../store/apis/exercisesApi";

import { MdEdit, MdCancel } from "react-icons/md";
import { Exercise } from "../models/Exercise";

function ExerciseName({ exercise }: { exercise: Exercise }): JSX.Element {
  const [showEdit, setShowEdit] = useState(false);
  const [newName, setNewName] = useState(exercise.name);

  const [updateExercise] = useUpdateExerciseMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateExercise({ ...exercise, name: newName });
    setShowEdit(false);
  };

  return (
    <div className="title is-4 is-flex is-align-items-center is-justify-content-space-between">
      {showEdit ? (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="input"
            />
          </form>
        </div>
      ) : (
        <div>{exercise.name}</div>
      )}
      {showEdit ? (
        <span>
          <MdCancel onClick={() => setShowEdit(false)} />
        </span>
      ) : (
        <span onClick={() => setShowEdit(true)}>
          <MdEdit />
        </span>
      )}
    </div>
  );
}

export default ExerciseName;