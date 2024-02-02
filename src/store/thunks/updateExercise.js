import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateExercise = createAsyncThunk(
  "exercise/update",
  async (exercise) => {
    const { data } = await axios.put(
      `http://localhost:3001/exercises/${exercise.id}`,
      exercise
    );
    return data;
  }
);
