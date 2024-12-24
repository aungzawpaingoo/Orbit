import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaProjectDiagram, FaBullseye } from 'react-icons/fa';
import TextLogo from '../assets/OrbitLogo.png'

const ProjectDetailsSidebar = () => (
  <div className="bg-gray-200 w-52 p-6 text-black border border-r-gray-300 h-full">
    <ul className='h-full'>
      <li className="mb-4 flex items-center space-x-2">
      </li>
      <li className="mb-4 flex items-center space-x-2">
        <FaProjectDiagram className="text-black" />
        <NavLink
          to="/projects/goals"
          className="hover:text-gray-50 font-sans text-base py-1"
          style={({ isActive }) => ({
            color: isActive ? 'red' : 'black',
          })}
        >
          Goals
        </NavLink>
      </li>
      <li className="mb-4 flex items-center space-x-2">
        <FaBullseye className="text-black" />
        <NavLink
          to="/projects/team"
          className="hover:text-gray-50 font-sans text-base py-1"
          style={({ isActive }) => ({
            color: isActive ? 'red' : 'black',
          })}
        >
          Team
        </NavLink>
      </li>
      <li className="mb-4 flex items-center space-x-2">
        <FaBullseye className="text-black" />
        <NavLink
          to="/projects/feedback"
          className="hover:text-gray-50 font-sans text-base py-1"
          style={({ isActive }) => ({
            color: isActive ? 'red' : 'black',
          })}
        >
          Give Feedback
        </NavLink>
      </li>
    </ul>
  </div>
);

export default ProjectDetailsSidebar;
