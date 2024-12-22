import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeIcon from '../src/assets/react.svg'; // Update the path if needed
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Signup from './pages/Signup';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Fixed Navigation Bar */}
        <nav className="bg-blue-500 p-6 fixed top-0 left-0 w-full z-50 shadow-lg">
          <div className="flex items-center">
            {/* Left-side navigation items */}
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-gray-300 transition duration-200"
                >
                  <img src={HomeIcon} alt="Home" className="w-6 h-6 inline-block" />
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-white hover:text-gray-300 transition duration-200"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-white hover:text-gray-300 transition duration-200"
                >
                  Pricing
                </Link>
              </li>
            </ul>

            {/* Right-side navigation items */}
            <ul className="ml-auto flex space-x-4">
              <li>
                <Link
                  to="/signUp"
                  className="text-white hover:text-gray-300 transition duration-200"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to="/logIn"
                  className="text-white hover:text-gray-300 transition duration-200"
                >
                  Log In
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Page Content */}
        <div className="flex-grow p-6 mt-24"> {/* Added mt-24 to prevent content from being hidden behind the fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/signUp" element={<Signup />} />
            <Route path="/logIn" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
