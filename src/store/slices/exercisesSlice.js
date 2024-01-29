import { createSlice } from "@reduxjs/toolkit";

const exercisesSlice = createSlice({
  name: "exercises",
  initialState: {
    exercises: [],
    selectedExercise: null,
  },
  reducers: {
    setSelectedExercise: (state, action) => {
      state.selectedExercise = action.payload;
    },
  },
});

export const { setSelectedExercise } = exercisesSlice.actions;
export default exercisesSlice.reducer;
