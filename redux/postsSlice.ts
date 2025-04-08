import { Post } from "@/types/post";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { addPost, fetchPosts } from "./operations";
import { NewPostData } from "@/types/newPostData";

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.isLoading = false;
        state.error = null;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error loading posts";
      })
      .addCase(addPost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.isLoading = false;
        state.error = null;
        state.posts = [...state.posts, action.payload];
      }).addCase(addPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Error loading posts'
      })
  },
});

export const {} = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
