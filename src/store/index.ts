import { configureStore } from "@reduxjs/toolkit";
import selectedExerciseReducer from "./slices/selectedExerciseSlice";

export default configureStore({
  reducer: {
    selectedExercise: selectedExerciseReducer,
  },
});
