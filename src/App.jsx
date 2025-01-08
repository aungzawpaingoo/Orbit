// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
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

// const LandingNav = () => (
//   <nav className="bg-white p-6 fixed top-0 left-0 w-full z-50">
//     <div className="flex items-center">
//       <ul className="flex space-x-4">
//         <li>
//           <NavLink
//             to="/"
//             className="text-black transition duration-200"
//             style={({ isActive }) => ({
//               color: isActive ? '#3B82F6' : 'black',
//             })}
//           >
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/features"
//             className="text-black transition duration-200"
//             style={({ isActive }) => ({
//               color: isActive ? '#3B82F6' : 'black',
//             })}
//           >
//             Features
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/pricing"
//             className="text-black transition duration-200"
//             style={({ isActive }) => ({
//               color: isActive ? '#3B82F6' : 'black',
//             })}
//           >
//             Pricing
//           </NavLink>
//         </li>
//       </ul>
//       <ul className="ml-auto flex space-x-4">
//         <li>
//           <NavLink
//             to="/signUp"
//             className="text-black transition duration-200"
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
//             className="text-black transition duration-200"
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
//           <Route path="/project-update" element={<ProjectUpdate />} />
//           <Route path="/goal-update" element={<GoalUpdate />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/team" element={<Team />} />
//           <Route path="/feedback" element={<GiveFeedback />} />

//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path='/backlog' element={<Backlog/>}/>
//           <Route path='/active-sprint' element={<Activesprint/>}/>
//           <Route path='/calendar' element={<Calendar/>}/>
//           <Route path="/goals" element={<Goals />} />
//           <Route path='/issues' element={<Issues/>}/>
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

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
import HomeImage from './assets/LogoWithTextAlign.png';
import NavbarIcon from './assets/NavbarIcon.png';


const LandingNav = () => (
  <nav className="bg-white p-4 fixed top-0 left-0 w-full z-50 shadow-sm">
    <div className="flex items-center justify-between">
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
          <Route path="/backlog" element={<Backlog />} />
          <Route path="/active-sprint" element={<Activesprint />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/issues" element={<Issues />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
