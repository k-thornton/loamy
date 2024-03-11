import axios from 'axios';
import { store } from '../app/store'; // Adjust the path as necessary
import { setAuthInfo, logout } from '../features/auth/authSlice';

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
        // Set the token as the default authorization header
        axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
    } catch (error) {
        console.error("Error sending token to backend:", error);
        store.dispatch(setAuthInfo({ jwt: null, isAuthenticated: false })); // Reset on error
    }
};
