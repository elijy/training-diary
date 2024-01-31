import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createSet = createAsyncThunk(
  "set/create",
  async ({ exerciseId, weight, reps }) => {
    const { data } = await axios.post("http://localhost:3001/sets", {
      exerciseId,
      weight,
      reps,
    });
    return data;
  }
);
