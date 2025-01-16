import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom'; // Use Navigate instead of Redirect
import { UserContext } from '../data/Context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext); // Access the user context

  // If the user is not authenticated, redirect them to the home page
  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
