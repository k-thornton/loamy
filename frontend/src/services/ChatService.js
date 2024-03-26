import axios from 'axios';
const SERVER_URL = process.env.REACT_APP_BACKEND_URL || "";
const BASE_URL = `${SERVER_URL}/api/chat`;
const withCredentials = true;

export const sendQuery = async (message) => {
  try {
    const response = await axios.post(`${BASE_URL}`, {'message': message}, { withCredentials });
    return response.data;
  } catch (error) {
    console.error("Error sending query:", error);
    // Return a default error message or the error message from the server if available
    return { error: error.response?.data?.message || "An error occurred while sending the query." };
  }
};
