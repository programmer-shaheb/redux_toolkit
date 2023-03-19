import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { blogLikes } from "../blogLikes/blogLikesAPI";
import { saveBlog } from "../saveBlogAPI/saveBlogAPI";
import { getBlog } from "./blogAPI";

const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchUpdatedBlog = createAsyncThunk(
  "blog/fetchUpdatedBlog",
  async ({ id, likes }) => {
    const blog = await blogLikes({ id, likes });
    return blog.likes;
  }
);

export const fetchUpdatedSaveBlog = createAsyncThunk(
  "blog/fetchUpdatedSaveBlog",
  async ({ id, save }) => {
    const blog = await saveBlog({ id, save });
    return blog.isSaved;
  }
);

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
  const blog = await getBlog(id);
  return blog;
});

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.blog = {};
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(fetchUpdatedBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog.likes = action.payload;
      })
      .addCase(fetchUpdatedSaveBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog.isSaved = action.payload;
      });
  },
});

export default blogSlice.reducer;
