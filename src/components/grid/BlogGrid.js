import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
import Loading from "../../utils/loading";
import BlogGridItem from "./BlogGridItem";

const BlogGrid = ({ selectedValue, selectedOption }) => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );

  const sortedBlogs = [...blogs].sort((a, b) => {
    if (selectedOption === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (selectedOption === "most_liked") {
      return b.likes - a.likes;
    } else {
      return 0;
    }
  });

  const filteredBlogs =
    selectedValue === "saved"
      ? sortedBlogs.filter((blog) => blog.isSaved)
      : sortedBlogs;

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  } else if (!isError && !isLoading && blogs?.length === 0) {
    content = <div className="col-span-12">No blogs found!</div>;
  } else {
    content = filteredBlogs.map((blog) => (
      <BlogGridItem key={blog.id} blog={blog} />
    ));
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
};

export default BlogGrid;
