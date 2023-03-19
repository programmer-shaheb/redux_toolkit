import { Link } from "react-router-dom";
import TagList from "../details/TagList";

const RelatedBlogListItem = ({ blog }) => {
  const { id, title, description, image, tags, likes, isSaved, createdAt } =
    blog || {};

  return (
    <>
      <div className="card">
        <Link to={`/blogs/${id}`}>
          <img src={image} className="card-image" alt={title} />
        </Link>
        <div className="p-4">
          <Link
            to={`/blogs/${id}`}
            className="text-lg post-title lws-RelatedPostTitle"
          >
            {title}
          </Link>
          <div className="mb-0 tags">
            <TagList tags={tags} />
          </div>
          <p>{createdAt}</p>
        </div>
      </div>
    </>
  );
};

export default RelatedBlogListItem;
