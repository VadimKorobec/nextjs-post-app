import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "";


export const fetchPosts = createAsyncThunk('posts/fetchAll', async () => {
    const response = await axios.get('/posts');
    return response.data;
})