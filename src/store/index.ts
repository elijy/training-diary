import { configureStore } from "@reduxjs/toolkit";
import { exercisesApi } from "./apis/exercisesApi";
import { setsApi } from "./apis/setsApi";
import { workoutsApi } from "./apis/workoutsApi";
import selectedExerciseReducer from "./slices/selectedExerciseSlice";

export default configureStore({
  reducer: {
    selectedExercise: selectedExerciseReducer,
    [exercisesApi.reducerPath]: exercisesApi.reducer,
    [setsApi.reducerPath]: setsApi.reducer,
    [workoutsApi.reducerPath]: workoutsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(exercisesApi.middleware)
      .concat(setsApi.middleware)
      .concat(workoutsApi.middleware),
});
