import React, { useState } from 'react';
import axios from 'axios';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function App() {
  const [answer, setAnswer] = useState('');
  const [greeting, setGreeting] = useState('');

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
      // Handle response data
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

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div className="App">
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