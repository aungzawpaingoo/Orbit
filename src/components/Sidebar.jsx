import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHouse,
  faFolderTree,
  faCoins,
  faFolderOpen,
  faArrowUpRightDots,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';

import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/cardImg.png';
import { useProject } from '../data/Context/ProjectContext';

library.add(faHouse, faFolderTree, faCoins, faFolderOpen, faArrowUpRightDots, faPeopleGroup);

const Sidebar = () => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FontAwesomeIcon icon="fa-solid fa-house" size="sm" />, href: '/dashboard' },
    // { id: 'projects', label: 'Projects', icon: <FontAwesomeIcon icon="fa-solid fa-folder-tree" size="sm" />, href: '/projects' },
    { id: 'goals', label: 'Goals', icon: <FontAwesomeIcon icon="fa-solid fa-coins" size="sm" />, href: '/goals' },
    { id: 'project-update', label: 'Project Update', icon: <FontAwesomeIcon icon="fa-solid fa-folder-open" size="sm" />, href: '/project-update' },
    { id: 'goal-update', label: 'Goal Update', icon: <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-dots" size="sm" />, href: '/goal-update' },
    { id: 'team', label: 'Team', icon: <FontAwesomeIcon icon="fa-solid fa-people-group" size="sm" />, href: '/team' },
  ];

  const { project } = useProject();

  return (
    <div className="h-screen w-60 bg-white text-black flex flex-col items-center border border-gray-200">
      <div className="py-6 flex items-center bg-white w-full px-8">
        <img src={project.image} alt="Logo" className="w-10 h-10 object-cover border-white border-2" />
        <div className='pl-4'>
          <h4 className='font-semibold text-sm'>{project.name}</h4>
          <h4 className='font-medium text-xs'>{project.type}</h4>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="flex flex-col gap-0 w-full">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-3 w-full ${
                  isActive ? 'bg-blue-50 rounded-md font-semibold text-blue-500' : 'hover:bg-white'
                }`
              }
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
