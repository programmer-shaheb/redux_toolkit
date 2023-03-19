import axios from "../../utils/axios";

export const blogLikes = async ({ id, likes }) => {
  const response = await axios.patch(`/blogs/${id}`, { likes: likes });

  return response.data;
};
