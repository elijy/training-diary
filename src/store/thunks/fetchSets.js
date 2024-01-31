import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSetsByExercise = createAsyncThunk(
  "sets/fetch",
  async (id) => {
    const { data } = await axios.get(
      `http://localhost:3001/sets?exerciseId=${id}`
    );
    return data;
  }
);
