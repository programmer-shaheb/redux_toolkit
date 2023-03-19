import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../../features/relatedBlogs/relatedBlogsSlice";
import RelatedBlogListItem from "./RelatedBlogListItem";

const RelatedBlogList = ({ currentBlogId, tags }) => {
  const dispatch = useDispatch();
  const { relatedBlogs, isLoading, isError, error } = useSelector(
    (state) => state.relatedBlogs
  );

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id: currentBlogId }));
  }, [currentBlogId, dispatch, tags]);

  let content;

  if (isLoading) content = <h1>Loading....</h1>;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && relatedBlogs?.length === 0) {
    content = <div className="col-span-12">No blogs found!</div>;
  }

  if (!isError && !isLoading && relatedBlogs?.length > 0) {
    content = relatedBlogs.map((blog) => (
      <RelatedBlogListItem key={blog.id} blog={blog} />
    ));
  }

  return (
    <>
      <aside>
        <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
          Related Posts
        </h4>
        <div className="space-y-4 related-post-container">{content}</div>
      </aside>
    </>
  );
};

export default RelatedBlogList;
