import { configureStore } from "@reduxjs/toolkit";
import { exercisesApi } from "./apis/exercisesApi";
import { setsApi } from "./apis/setsApi";
import { workoutsApi } from "./apis/workoutsApi";

export default configureStore({
  reducer: {
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
