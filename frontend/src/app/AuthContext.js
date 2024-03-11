import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// Provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Example function to simulate login
  const login = (userData) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
    // Normally, you'd also set something like an auth token here
  };

  // Example function to simulate logout
  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    // Clear auth tokens, etc.
  };

  useEffect(() => {
    // You could check local storage or cookies for an existing auth token here
    // and set the user state accordingly
  }, []);

  const value = {
    currentUser,
    isAuthenticated,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
