import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createExercise = createAsyncThunk(
  "exercise/create",
  async (exercise) => {
    const { data } = await axios.post("http://localhost:3001/exercises", {
      name: exercise,
      sets: [],
    });
    return data;
  }
);
