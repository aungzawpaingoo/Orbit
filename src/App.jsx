// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
// import { FaTachometerAlt, FaProjectDiagram, FaBullseye } from 'react-icons/fa';
// import HomeIcon from '../src/assets/Logo.png';
// import TextLogo from '../src/assets/OrbitLogo.png'
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
// import ProjectDetails from './pages/ProjectDetails';


// const LandingNav = () => (
//   <nav className="bg-blue-500 p-6 fixed top-0 left-0 w-full z-50">
//     <div className="flex items-center">
//       <ul className="flex space-x-4">
//         <li>
//           <NavLink
//             to="/"
//             className="text-white hover:text-gray-300 transition duration-200"
//             style={({ isActive }) => ({
//               color: isActive ? 'green' : 'white',
//             })}
//           >
//             <img src={TextLogo} alt="Home" className="w-48 h-8 inline-block object-cover" />

//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/features"
//             className="text-white hover:text-gray-300 transition duration-200"
//             style={({ isActive }) => ({
//               color: isActive ? 'green' : 'white',
//             })}
//           >
//             Features
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/pricing"
//             className="text-white hover:text-gray-300 transition duration-200"
//             style={({ isActive }) => ({
//               color: isActive ? 'green' : 'white',
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
//             className="text-white hover:text-gray-300 transition duration-200"
//             style={({ isActive }) => ({
//               color: isActive ? 'green' : 'white',
//             })}
//           >
//             Sign Up
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/logIn"
//             className="text-white hover:text-gray-300 transition duration-200"
//             style={({ isActive }) => ({
//               color: isActive ? 'green' : 'white',
//             })}
//           >
//             Log In
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   </nav>
// );

// const AppLayout = ({ children }) => (
//   <div className="flex flex-col h-screen">
//     <nav className="bg-blue-500 p-4">
//       <div className="flex items-center">
//       <img src={TextLogo} alt="Home" className="w-48 h-8 inline-block object-cover" />
//         <ul className="ml-auto flex space-x-4">
//           <li>
//             <NavLink
//               to="/projects"
//               className="text-white hover:text-gray-300"
//               style={({ isActive }) => ({
//                 color: isActive ? 'red' : 'white',
//               })}
//             >
//               Projects
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/goals"
//               className="text-white hover:text-gray-300"
//               style={({ isActive }) => ({
//                 color: isActive ? 'red' : 'white',
//               })}
//             >
//               Goals
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/team"
//               className="text-white hover:text-gray-300"
//               style={({ isActive }) => ({
//                 color: isActive ? 'red' : 'white',
//               })}
//             >
//               Team
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/feedback"
//               className="text-white hover:text-gray-300"
//               style={({ isActive }) => ({
//                 color: isActive ? 'red' : 'white',
//               })}
//             >
//               Give Feedback
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//     <div className="flex flex-1">
//       <div className="bg-white w-52 p-6 text-black border border-r-gray-300">
//         <ul>
//           <li className="mb-4 flex items-center space-x-2">
//             <FaTachometerAlt className="text-black"/>
//             <NavLink
//               to="/dashboard"
//               className="hover:text-gray-50 font-sans text-base py-1"
//               style={({ isActive }) => ({
//                 color: isActive ? 'red' : 'black',
//               })}
//             >
//               Dashboard
//             </NavLink>
//           </li>
//           <li className="mb-4 flex items-center space-x-2">
//             <FaProjectDiagram className="text-black" />
//             <NavLink
//               to="/project-update"
//               className="hover:text-gray-50 font-sans text-base py-1"
//               style={({ isActive }) => ({
//                 color: isActive ? 'red' : 'black',
//               })}
//             >
//               Project Update
//             </NavLink>
//           </li>
//           <li className="mb-4 flex items-center space-x-2">
//             <FaBullseye className="text-black" />
//             <NavLink
//               to="/goal-update"
//               className="hover:text-gray-50 font-sans text-base py-1"
//               style={({ isActive }) => ({
//                 color: isActive ? 'red' : 'black',
//               })}
//             >
//               Goal Update
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       <div className="flex-1 p-6">{children}</div>
//     </div>
//   </div>
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
//                 <div className="flex-grow p-6 mt-24">
//                   <Home />
//                 </div>
//               </>
//             }
//           />
//           <Route path="/projects/:key" element={<ProjectDetails />} />
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
//           <Route
//             path="/dashboard"
//             element={
//               <AppLayout>
//                 <Dashboard />
//               </AppLayout>
//             }
//           />
//           <Route
//             path="/project-update"
//             element={
//               <AppLayout>
//                 <ProjectUpdate />
//               </AppLayout>
//             }
//           />
//           <Route
//             path="/goal-update"
//             element={
//               <AppLayout>
//                 <GoalUpdate />
//               </AppLayout>
//             }
//           />
//           <Route
//             path="/projects"
//             element={
//               <AppLayout>
//                 <Projects />
//               </AppLayout>
//             }
//           />
//           <Route
//             path="/goals"
//             element={
//               <AppLayout>
//                 <Goals />
//               </AppLayout>
//             }
//           />
//           <Route
//             path="/team"
//             element={
//               <AppLayout>
//                 <Team />
//               </AppLayout>
//             }
//           />
//           <Route
//             path="/feedback"
//             element={
//               <AppLayout>
//                 <GiveFeedback />
//               </AppLayout>
//             }
//           />
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

