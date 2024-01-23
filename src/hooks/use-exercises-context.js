import { useContext } from "react";
import ExerciseContext from "../context/exercises";

function useExcercisesContext() {
  return useContext(ExerciseContext);
}

export default useExcercisesContext;
