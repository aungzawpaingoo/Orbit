import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from '../../firebase'; // Import your Firebase authentication

// Protected Route Component
const ProtectedRoute = ({ element, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user); // Update authentication state based on Firebase user
    });
    
    return () => unsubscribe(); // Clean up on unmount
  }, []);

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          element
        ) : (
          <Redirect to="/logIn" /> // Redirect to login page if not authenticated
        )
      }
    />
  );
};
