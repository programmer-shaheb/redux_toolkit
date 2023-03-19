import Likes from "./Likes";
import Saved from "./Saved";
import TagList from "./TagList";

const BlogDetails = ({ blog }) => {
  const { id, description, image, likes, isSaved, title, tags } = blog || {};

  return (
    <>
      <main className="post">
        <img
          src={image}
          alt={title}
          className="w-full rounded-md"
          id="lws-megaThumb"
        />
        <div>
          <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
            {title}
          </h1>
          <div className="tags" id="lws-singleTags">
            <TagList tags={tags} />
          </div>
          <div className="btn-group">
            <Likes id={id} likes={likes} />
            <Saved id={id} saved={isSaved} />
          </div>
          <div className="mt-6">
            <p>{description}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogDetails;
