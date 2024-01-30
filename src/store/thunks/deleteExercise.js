import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteExercise = createAsyncThunk(
  "exercise/delete",
  async (id) => {
    await axios.delete(`http://localhost:3001/exercises/${id}`);
    return id;
  }
);
