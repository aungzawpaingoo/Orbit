// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
// import Home from './pages/Home';
// import Features from './pages/Features';
// import Pricing from './pages/Pricing';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import ProjectUpdate from './pages/ProjectUpdate';
// import GoalUpdate from './pages/GoalUpdate';
// import Projects from './pages/Projects';
// import Goals from './pages/Goals';
// import Team from './pages/Team';
// import GiveFeedback from './pages/GiveFeedback';
// import Backlog from './pages/Backlog';
// import Activesprint from './pages/Activesprint';
// import Calendar from './pages/Calendar';
// import Issues from './pages/Issues';
// import HomeImage from './assets/LogoWithTextAlign.png';
// import NavbarIcon from './assets/NavbarIcon.png';
// import {auth} from './firebase';
// import { UserContext } from './data/Context/UserContext';
// import ProtectedRoute from './components/ProtectedRoute';



// const LandingNav = () => (

  
//   <nav className="bg-white p-4 fixed top-0 left-0 w-full z-50 shadow-sm">
//     <div className="flex items-center justify-between">
//       <div className="flex items-center space-x-4">
//         <img
//           src={HomeImage}
//           alt="Logo"
//           className="h-12 w-40 object-cover"
//         />
//         <ul className="flex space-x-6">
//           <li>
//             <NavLink
//               to="/"
//               className="text-black font-medium transition duration-200 hover:text-blue-500"
//               style={({ isActive }) => ({
//                 color: isActive ? '#3B82F6' : 'black',
//               })}
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/features"
//               className="text-black font-medium transition duration-200 hover:text-blue-500"
//               style={({ isActive }) => ({
//                 color: isActive ? '#3B82F6' : 'black',
//               })}
//             >
//               Features
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/pricing"
//               className="text-black font-medium transition duration-200 hover:text-blue-500"
//               style={({ isActive }) => ({
//                 color: isActive ? '#3B82F6' : 'black',
//               })}
//             >
//               Pricing
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       <ul className="flex space-x-4">
//         <li>
//           <NavLink
//             to="/signUp"
//             className="text-black font-medium transition duration-200 hover:text-blue-500"
//             style={({ isActive }) => ({
//               color: isActive ? '#3B82F6' : 'black',
//             })}
//           >
//             Sign Up
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/logIn"
//             className="text-black font-medium transition duration-200 hover:text-blue-500"
//             style={({ isActive }) => ({
//               color: isActive ? '#3B82F6' : 'black',
//             })}
//           >
//             Log In
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   </nav>
// );

// const App = () => {


//   return (
//     <Router>
//       <div className="min-h-screen">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <LandingNav />
//                 <div className="flex-grow p-0 mt-16">
//                   <Home />
//                 </div>
//               </>
//             }
//           />
//           <Route
//             path="/features"
//             element={
//               <>
//                 <LandingNav />
//                 <div className="flex-grow p-6 mt-24">
//                   <Features />
//                 </div>
//               </>
//             }
//           />
//           <Route
//             path="/pricing"
//             element={
//               <>
//                 <LandingNav />
//                 <div className="flex-grow p-6 mt-24">
//                   <Pricing />
//                 </div>
//               </>
//             }
//           />
//           <Route
//             path="/signUp"
//             element={
//               <>
//                 <LandingNav />
//                 <div className="flex-grow p-6 mt-24">
//                   <Signup />
//                 </div>
//               </>
//             }
//           />
//           <Route
//             path="/logIn"
//             element={
//               <>
//                 <LandingNav />
//                 <div className="flex-grow p-6 mt-24">
//                   <Login />
//                 </div>
//               </>
//             }
//           />
          
//           <Route path="/project-update" element={<ProtectedRoute><ProjectUpdate /></ProtectedRoute>} />

//           <Route path="/goal-update" element={<ProtectedRoute><GoalUpdate /></ProtectedRoute>} />
          
//           <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
          
//           <Route path="/team" element={<ProtectedRoute><Team /></ProtectedRoute>} />
          
//           <Route path="/feedback" element={<ProtectedRoute><GiveFeedback /></ProtectedRoute>} />
          
//           <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          
//           <Route path="/backlog" element={<ProtectedRoute><Backlog /></ProtectedRoute>} />
          
//           <Route path="/active-sprint" element={<ProtectedRoute><Activesprint /></ProtectedRoute>} />
          
//           <Route path="/calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
          
//           <Route path="/goals" element={<ProtectedRoute><Goals /></ProtectedRoute>} />
          
//           <Route path="/issues" element={<ProtectedRoute><Issues /></ProtectedRoute>} />
       
//         </Routes>
//       </div>
//     </Router>
    
//   );
// };

// export default App;


import React, { useEffect, useState, useContext } from 'react';
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
import HomeImage from './assets/LogoWithTextAlign.png';
import { UserContext } from './data/Context/UserContext';
import ProtectedRoute from './components/ProtectedRoute';

const LandingNav = () => {
  const { user } = useContext(UserContext); // Access the user context

  return (
    <nav className="bg-white p-4 fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Left side: Logo and links */}
        <div className="flex items-center space-x-4">
          <img
            src={HomeImage}
            alt="Logo"
            className="h-12 w-40 object-cover"
          />
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className="text-black font-medium transition duration-200 hover:text-blue-500"
                style={({ isActive }) => ({
                  color: isActive ? '#3B82F6' : 'black',
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/features"
                className="text-black font-medium transition duration-200 hover:text-blue-500"
                style={({ isActive }) => ({
                  color: isActive ? '#3B82F6' : 'black',
                })}
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className="text-black font-medium transition duration-200 hover:text-blue-500"
                style={({ isActive }) => ({
                  color: isActive ? '#3B82F6' : 'black',
                })}
              >
                Pricing
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right side: Auth-dependent UI */}
        <div>
          {user ? (
            <div className="flex items-center space-x-4">
              {/* Show user image */}
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="h-10 w-10 rounded-full object-cover"
                />
              )}
              {/* Projects button */}
              <NavLink
                to="/projects"
                className="text-blue-500 font-medium transition duration-200 hover:text-blue-500"
              >
                Go To Projects
              </NavLink>
            </div>
          ) : (
            <ul className="flex space-x-4">
              <li>
                <NavLink
                  to="/signUp"
                  className="text-black font-medium transition duration-200 hover:text-blue-500"
                  style={({ isActive }) => ({
                    color: isActive ? '#3B82F6' : 'black',
                  })}
                >
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/logIn"
                  className="text-black font-medium transition duration-200 hover:text-blue-500"
                  style={({ isActive }) => ({
                    color: isActive ? '#3B82F6' : 'black',
                  })}
                >
                  Log In
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

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
          <Route path="/project-update" element={<ProtectedRoute><ProjectUpdate /></ProtectedRoute>} />
          <Route path="/goal-update" element={<ProtectedRoute><GoalUpdate /></ProtectedRoute>} />
          <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
          <Route path="/team" element={<ProtectedRoute><Team /></ProtectedRoute>} />
          <Route path="/feedback" element={<ProtectedRoute><GiveFeedback /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/backlog" element={<ProtectedRoute><Backlog /></ProtectedRoute>} />
          <Route path="/active-sprint" element={<ProtectedRoute><Activesprint /></ProtectedRoute>} />
          <Route path="/calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
          <Route path="/goals" element={<ProtectedRoute><Goals /></ProtectedRoute>} />
          <Route path="/issues" element={<ProtectedRoute><Issues /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
