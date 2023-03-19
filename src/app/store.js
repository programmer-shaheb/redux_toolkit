import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../features/blog/blogSlice";
import blogsSlice from "../features/blogs/blogsSlice";
import relatedBlogsSlice from "../features/relatedBlogs/relatedBlogsSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsSlice,
    blog: blogSlice,
    relatedBlogs: relatedBlogsSlice,
  },
});
