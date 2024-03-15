import axios from "axios";
import { store } from "../app/store";
import { setAuthInfo, logout, fetchGreeting } from "../features/auth/authSlice";

const withCredentials = true;
const BASE_URL = '/api/auth';

const setAxiosAuthHeader = (jwt) => {
    if (jwt) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  };

// Initialize Axios default headers based on current auth state
const initializeAuthHeader = () => {
  const jwt = store.getState().auth.jwt;
  setAxiosAuthHeader(jwt);
};

// Subscribe to store changes to automatically update Axios headers
store.subscribe(() => {
  const jwt = store.getState().auth.jwt;
  setAxiosAuthHeader(jwt);
});

initializeAuthHeader();

const handleLogout = () => {
  store.dispatch(logout());
  delete axios.defaults.headers.common["Authorization"];
};

const handleGoogleLoginSuccess = async (response) => {
  const token = response?.credential;
  await sendGoogleTokenToBackend(token);
};

const handleGoogleLoginFailure = (response) => {
  console.error("Google login failed:", response);
};

const fetchGreetingFromAPI = async () => {
  const response = await axios.get(`${BASE_URL}/greeting`, { withCredentials });
  return response.data;
};

const sendGoogleTokenToBackend = async (token) => {
  try {
    const response = await axios.post(`${BASE_URL}/google`, { token });
    const jwt = response.data.token;
    // Update the authentication state in the Redux store
    store.dispatch(setAuthInfo({ jwt, isAuthenticated: true }));
    setAxiosAuthHeader(jwt);
    store.dispatch(fetchGreeting());
  } catch (error) {
    console.error("Error sending token to backend:", error);
    store.dispatch(setAuthInfo({ jwt: null, isAuthenticated: false })); // Reset on error
  }
};

export const authService = {
  setAxiosAuthHeader,
  handleLogout,
  handleGoogleLoginSuccess,
  handleGoogleLoginFailure,
  fetchGreetingFromAPI,
};
