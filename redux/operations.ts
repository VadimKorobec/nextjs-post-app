import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "@/types/post";
import { NewPostData } from "@/types/newPostData";

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

export const addPost = createAsyncThunk<Post, NewPostData>(
  "posts/addPost",
  async (post: NewPostData, thunkAPI) => {
    try {
      const response = await axios.post("/posts", post);
      return response.data.post;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
