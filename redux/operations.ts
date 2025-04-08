import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:8080/api/";

export const fetchPosts = createAsyncThunk(
  "posts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/posts");
      return response.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (post, thunkAPI) => {
    try {
      const response = await axios.post("/posts", post);
      return response.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
