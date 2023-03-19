import { useDispatch } from "react-redux";
import { fetchUpdatedSaveBlog } from "../../features/blog/blogSlice";

const Saved = ({ id, saved }) => {
  const dispatch = useDispatch();

  const onSave = () => {
    dispatch(fetchUpdatedSaveBlog({ id, save: !saved }));
  };

  return (
    <>
      <button
        onClick={onSave}
        className={`${saved && "active"} save-btn"`}
        id="lws-singleSavedBtn"
      >
        <i className="fa-regular fa-bookmark"></i> {saved ? "Saved" : "Save"}
      </button>
    </>
  );
};

export default Saved;
