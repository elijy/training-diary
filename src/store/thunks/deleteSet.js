import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteSet = createAsyncThunk("set/delete", async (id) => {
  await axios.delete(`http://localhost:3001/sets/${id}`);
  return id;
});
