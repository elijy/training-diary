import { createSlice } from "@reduxjs/toolkit";
import { fetchExercises } from "../thunks/fetchExercises";
import { createExercise } from "../thunks/createExercise";
import { deleteExercise } from "../thunks/deleteExercise";

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
  extraReducers: (builder) => {
    builder.addCase(fetchExercises.fulfilled, (state, action) => {
      state.exercises = action.payload;
    });
    builder.addCase(createExercise.fulfilled, (state, action) => {
      state.exercises.push(action.payload);
    });
    builder.addCase(deleteExercise.fulfilled, (state, action) => {
      state.exercises = state.exercises.filter(
        (exercise) => exercise.id !== action.payload
      );
    });
  },
});

export const { setSelectedExercise } = exercisesSlice.actions;
export default exercisesSlice.reducer;
