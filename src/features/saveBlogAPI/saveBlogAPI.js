import axios from "../../utils/axios";

export const saveBlog = async ({ id, save }) => {
  const response = await axios.patch(`/blogs/${id}`, { isSaved: save });

  return response.data;
};
