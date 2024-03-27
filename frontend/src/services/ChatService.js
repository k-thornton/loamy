import axiosInstance from "./AxiosInstance";
const BASE_URL = `api/chat`;
const withCredentials = true;

export const sendQuery = async (message) => {
  try {
    const response = await axiosInstance.post(`${BASE_URL}`, {'message': message}, { withCredentials });
    return response.data;
  } catch (error) {
    console.error("Error sending query:", error);
    // Return a default error message or the error message from the server if available
    return { error: error.response?.data?.message || "An error occurred while sending the query." };
  }
};
