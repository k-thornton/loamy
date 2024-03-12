import axios from "axios";
import { store } from "../app/store"; // Adjust the path as necessary
import { setAuthInfo, logout } from "../features/auth/authSlice";
import { fetchGreeting } from "../features/survey/surveySlice";


export const setAxiosAuthHeader = (jwt) => {
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

export const handleLogout = () => {
  store.dispatch(logout());
  axios.defaults.headers.common["Authorization"] = "";
  localStorage.removeItem("jwt");
};

export const handleGoogleLoginSuccess = async (response) => {
  console.log("Google login success:", response);
  const token = response?.credential;
  await sendGoogleTokenToBackend(token);
};

export const handleGoogleLoginFailure = (response) => {
  console.error("Google login failed:", response);
};

const sendGoogleTokenToBackend = async (token) => {
  try {
    const response = await axios.post("/api/auth/google", { token });
    console.log("Backend response:", response.data);
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

