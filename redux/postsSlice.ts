import { Post } from "@/types/post";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PostState {
  posts: Post[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const { } = postsSlice.actions;
export const postsReducer = postsSlice.reducer 