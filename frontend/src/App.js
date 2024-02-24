import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Navbar from './components/Navbar';

function App() {
  const [answer, setAnswer] = useState('');
  const [greeting, setGreeting] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    // Check for token in local storage or any other authentication checks on component mount
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
      setIsAuthenticated(true);
    }
  }, []);

  const submitAnswer = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/survey/answers', { answer }, { withCredentials: true });
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  const fetchGreeting = async () => {
    try {
      const response = await axios.get('/api/', { withCredentials: true });
      setGreeting(response.data);
    } catch (error) {
      console.error('Error fetching greeting:', error);
    }
  };

  const sendTokenToBackend = async (token) => {
    try {
      const response = await axios.post('/api/auth/google', { token });
      console.log(response.data);
      // Assume the JWT is in response.data.token
      const jwt = response.data.token;
      localStorage.setItem('jwt', jwt); // Store the JWT for later use
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
    } catch (error) {
      console.error('Error sending token to backend:', error);
    }
  };

  const handleLoginSuccess = (response) => {
    console.log('Success:', response);
    // Extract token from response, send to backend
    const token = response?.credential;
    // Example function to send token to backend
    sendTokenToBackend(token);
  };

  const handleLoginFailure = (response) => {
    console.log('Failed:', response);
  };

  const logout = () => {
    // Remove the token
    localStorage.removeItem('jwt');
    setIsAuthenticated(false);
    // Redirect or perform any additional cleanup
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div className="App">
        <Navbar isAuthenticated={isAuthenticated} onLogout={logout} />
        <h1>Sign in with Google</h1>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
        <h1>Survey</h1>
        <form onSubmit={submitAnswer}>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Your answer"
          />
          <button type="submit">Submit Answer</button>
        </form>
        <button onClick={fetchGreeting}>Fetch Greeting</button>
          <div>
          {greeting ? <p>{greeting}</p> : <p>Loading greeting...</p>}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;