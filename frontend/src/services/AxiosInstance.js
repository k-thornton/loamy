import axios from 'axios';

// Set up base URL from environment variable or default to a specific URL
const baseURL = process.env.REACT_APP_BACKEND_URL || '';

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;