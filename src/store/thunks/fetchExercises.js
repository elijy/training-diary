import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchExercises = createAsyncThunk("exercises/fetch", async () => {
  const { data } = await axios.get("http://localhost:3001/exercises");
  return data;
});
