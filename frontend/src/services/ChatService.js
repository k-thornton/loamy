import axios from 'axios';
const BASE_URL = '/api/chat';
const withCredentials = true;

export const sendQuery = async (message) => {
  const response = await axios.post(`${BASE_URL}`, {'message': message}, { withCredentials });
  return response.data;
};