import { createSlice } from "@reduxjs/toolkit";
import { fetchExercises } from "../thunks/fetchExercises";
import { createExercise } from "../thunks/createExercise";
import { deleteExercise } from "../thunks/deleteExercise";
import { fetchSetsByExercise } from "../thunks/fetchSets";
import { createSet } from "../thunks/createSet";
import { deleteSet } from "../thunks/deleteSet";

const exercisesSlice = createSlice({
  name: "exercises",
  initialState: {
    exercises: [],
    selectedExercise: null,
    selectedSets: [],
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
    builder.addCase(fetchSetsByExercise.fulfilled, (state, action) => {
      state.selectedSets = action.payload;
    });
    builder.addCase(createSet.fulfilled, (state, action) => {
      state.selectedSets.push(action.payload);
    });
    builder.addCase(deleteSet.fulfilled, (state, action) => {
      state.selectedSets = state.selectedSets.filter(
        (set) => set.id !== action.payload
      );
    });
  },
});

export const { setSelectedExercise } = exercisesSlice.actions;
export default exercisesSlice.reducer;
