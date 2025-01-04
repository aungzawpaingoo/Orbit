import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProjectUpdate from './pages/ProjectUpdate';
import GoalUpdate from './pages/GoalUpdate';
import Projects from './pages/Projects';
import Goals from './pages/Goals';
import Team from './pages/Team';
import GiveFeedback from './pages/GiveFeedback';
import Backlog from './pages/Backlog';
import Activesprint from './pages/Activesprint';
import Calendar from './pages/Calendar';
import Issues from './pages/Issues';

const LandingNav = () => (
  <nav className="bg-blue-500 p-6 fixed top-0 left-0 w-full z-50">
    <div className="flex items-center">
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="/"
            className="text-white hover:text-gray-300 transition duration-200"
            style={({ isActive }) => ({
              color: isActive ? 'green' : 'white',
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/features"
            className="text-white hover:text-gray-300 transition duration-200"
            style={({ isActive }) => ({
              color: isActive ? 'green' : 'white',
            })}
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pricing"
            className="text-white hover:text-gray-300 transition duration-200"
            style={({ isActive }) => ({
              color: isActive ? 'green' : 'white',
            })}
          >
            Pricing
          </NavLink>
        </li>
      </ul>
      <ul className="ml-auto flex space-x-4">
        <li>
          <NavLink
            to="/signUp"
            className="text-white hover:text-gray-300 transition duration-200"
            style={({ isActive }) => ({
              color: isActive ? 'green' : 'white',
            })}
          >
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/logIn"
            className="text-white hover:text-gray-300 transition duration-200"
            style={({ isActive }) => ({
              color: isActive ? 'green' : 'white',
            })}
          >
            Log In
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingNav />
                <div className="flex-grow p-0 mt-16">
                  <Home />
                </div>
              </>
            }
          />
          <Route
            path="/features"
            element={
              <>
                <LandingNav />
                <div className="flex-grow p-6 mt-24">
                  <Features />
                </div>
              </>
            }
          />
          <Route
            path="/pricing"
            element={
              <>
                <LandingNav />
                <div className="flex-grow p-6 mt-24">
                  <Pricing />
                </div>
              </>
            }
          />
          <Route
            path="/signUp"
            element={
              <>
                <LandingNav />
                <div className="flex-grow p-6 mt-24">
                  <Signup />
                </div>
              </>
            }
          />
          <Route
            path="/logIn"
            element={
              <>
                <LandingNav />
                <div className="flex-grow p-6 mt-24">
                  <Login />
                </div>
              </>
            }
          />
          <Route path="/project-update" element={<ProjectUpdate />} />
          <Route path="/goal-update" element={<GoalUpdate />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/feedback" element={<GiveFeedback />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/backlog' element={<Backlog/>}/>
          <Route path='/active-sprint' element={<Activesprint/>}/>
          <Route path='/calendar' element={<Calendar/>}/>
          <Route path="/goals" element={<Goals />} />
          <Route path='/issues' element={<Issues/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

