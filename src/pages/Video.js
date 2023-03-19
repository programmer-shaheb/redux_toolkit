import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import BlogDetails from "../components/details/BlogDetails";
import RelatedBlogList from "../components/list/RelatedBlogList";
import { fetchBlog } from "../features/blog/blogSlice";
import Loading from "../utils/loading";

const Video = () => {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );

  const { id, tags } = blog || {};

  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);

  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !blog?.id) {
    content = <div className="col-span-12">No blog found!</div>;
  }

  if (!isLoading && !isError && blog?.id) {
    content = (
      <>
        <BlogDetails blog={blog} />
        <RelatedBlogList currentBlogId={id} tags={tags} />
      </>
    );
  }

  return (
    <>
      <div class="container mt-8">
        <Link
          to="/"
          class="inline-block text-gray-600 home-btn"
          id="lws-goHome"
        >
          <i class="mr-2 fa-solid fa-house"></i>Go Home
        </Link>
      </div>
      <section class="post-page-container">{content}</section>
    </>
  );
};

export default Video;
