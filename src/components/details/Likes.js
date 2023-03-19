import { useDispatch } from "react-redux";
import { fetchUpdatedBlog } from "../../features/blog/blogSlice";

const Likes = ({ id, likes }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(fetchUpdatedBlog({ id, likes: likes + 1 }));
  };

  return (
    <>
      <button className="like-btn" id="lws-singleLinks" onClick={handleLike}>
        <i className="fa-regular fa-thumbs-up"></i> {likes}
      </button>
    </>
  );
};

export default Likes;
