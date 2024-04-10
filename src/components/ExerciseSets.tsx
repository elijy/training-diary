import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";

import { GET_SETS, ADD_SET } from "../queries";
import { DELETE_SET } from "../queries/deleteSet";

import ExerciseName from "./ExerciseName";
import ListItem from "./core/ListItem";

import { Exercise } from "../types/Exercise";
import { Set } from "../types/Set";

function ExerciseSets({ exercise }: { exercise: Exercise }): JSX.Element {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");

  const { loading, data }: { loading: Boolean; data: { sets: Set[] } } =
    useQuery(GET_SETS, {
      variables: { exerciseId: exercise.id },
    });

  const [createSet] = useMutation(ADD_SET, {
    refetchQueries: [
      { query: GET_SETS, variables: { exerciseId: exercise.id } },
    ],
  });
  const [deleteSet] = useMutation(DELETE_SET);

  const handleAddSet = () => {
    const weightNum = parseInt(weight) || 0;
    const repsNum = parseInt(reps) || 0;
    createSet({
      variables: { exerciseId: exercise.id, weight: weightNum, reps: repsNum },
    });
  };

  const handleDeleteSet = (id: string) => {
    deleteSet({ variables: { id } });
  };

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="box">
      <ExerciseName key={exercise.id} exercise={exercise} />
      {data?.sets?.map((set, index) => {
        return (
          <ListItem key={set.id} onDelete={() => handleDeleteSet(set.id)}>
            <div>
              <span className="has-text-weight-bold">Set {index + 1}:</span>{" "}
              {set.weight} x {set.reps}
            </div>
          </ListItem>
        );
      })}
      <div className="field is-grouped mt-2">
        <div className="control">
          <label className="label">Weight:</label>
          <input
            value={weight || ""}
            onChange={(e) => setWeight(e.target.value)}
            type="number"
            className="input"
            min={0}
          />
        </div>

        <div className="control">
          <label className="label">Reps:</label>
          <input
            value={reps || ""}
            onChange={(e) => setReps(e.target.value)}
            type="number"
            className="input"
            min={0}
          />
        </div>

        <div className="control is-align-self-flex-end">
          <button className="button is-primary" onClick={handleAddSet}>
            Add Set
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExerciseSets;
