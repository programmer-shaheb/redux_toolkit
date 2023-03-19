import { Link } from "react-router-dom";
import TagList from "../details/TagList";

const BlogGridItem = ({ blog }) => {
  const { id, title, description, image, tags, likes, isSaved, createdAt } =
    blog || {};

  return (
    <>
      <div className="lws-card">
        <Link to={`/blogs/${id}`}>
          <img src={image} className="lws-card-image" alt="" />
        </Link>
        <div className="p-4">
          <div className="lws-card-header">
            <p className="lws-publishedDate">{createdAt}</p>
            <p className="lws-likeCount">
              <i className="fa-regular fa-thumbs-up"></i> {likes}
            </p>
          </div>
          <Link to={`/blogs/${id}`} className="lws-postTitle">
            {title}
          </Link>
          <div className="lws-tags">
            <TagList tags={tags} />
          </div>

          {isSaved && (
            <div className="flex gap-2 mt-4">
              <span className="lws-badge"> Saved </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogGridItem;
