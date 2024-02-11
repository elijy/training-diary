import { createSlice } from "@reduxjs/toolkit";
import { exercisesApi } from "../apis/exercisesApi";

const exercisesSlice = createSlice({
  name: "exercises",
  initialState: {
    selectedExercise: null,
  },
  reducers: {
    setSelectedExercise: (state, action) => {
      state.selectedExercise = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      exercisesApi.endpoints.updateExercise.matchFulfilled,
      (state, action) => {
        state.selectedExercise = action.payload;
      }
    );
  },
});

export const { setSelectedExercise } = exercisesSlice.actions;
export default exercisesSlice.reducer;
