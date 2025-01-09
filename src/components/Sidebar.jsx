// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {
//   faTableColumns,
//   faRectangleList,
//   faPersonRunning,
//   faCalendarDays,
//   faBullseye,
//   faBug,
// } from '@fortawesome/free-solid-svg-icons';

// import { NavLink } from 'react-router-dom';
// import Logo from '../assets/cardImg.png';
// import { useProject } from '../data/Context/ProjectContext';

// library.add(faTableColumns, faRectangleList, faPersonRunning, faCalendarDays, faBullseye, faBug);

// const Sidebar = () => {
//   const menuItems = [
//     { id: 'dashboard', label: 'Dashboard', icon: <FontAwesomeIcon icon="fa-solid fa-table-columns" size="sm" />, href: '/dashboard' },
    
//     { id: 'backlog', label: 'Backlog', icon: <FontAwesomeIcon icon="fa-solid fa-rectangle-list" size="sm" />, href: '/backlog' },
    
//     { id: 'active-sprint', label: 'Active Sprint', icon: <FontAwesomeIcon icon="fa-solid fa-person-running" size="sm" />, href: '/active-sprint' },
    
//     { id: 'calendar', label: 'Calendar', icon: <FontAwesomeIcon icon="fa-solid fa-calendar-days" size="sm" />, href: '/calendar' },
    
//     { id: 'goals', label: 'Goals', icon: <FontAwesomeIcon icon="fa-solid fa-bullseye" size="sm" />, href: '/goals' },
    
//     { id: 'issues', label: 'Issues', icon: <FontAwesomeIcon icon="fa-solid fa-bug" size="sm" />, href: '/issues' },
//   ];

//   const { project } = useProject();

//   return (
//     <div className="h-screen w-60 bg-white text-black flex flex-col items-center border border-gray-200">
//       <div className="py-6 flex items-center bg-white w-full px-8">
//         <img src={project.image} alt="Logo" className="w-11 h-11 object-cover border-white border-2" />
//         <div className='pl-4'>
//           <h4 className='font-bold text-sm'>{project.name}</h4>
//           <h4 className='font-semibold text-xs'>{project.type}</h4>
//         </div>
//       </div>
//       <div className="flex-1 flex justify-center">
//         <div className="flex flex-col gap-0 w-full">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.id}
//               to={item.href}
//               className={({ isActive }) =>
//                 `flex items-center gap-4 px-12 py-3 w-full ${
//                   isActive ? 'bg-blue-50 rounded-md font-semibold text-blue-500' : 'hover:bg-white'
//                 }`
//               }
//             >
//               {item.icon}
//               <span className="text-sm">{item.label}</span>
//             </NavLink>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTableColumns,
  faRectangleList,
  faPersonRunning,
  faCalendarDays,
  faBullseye,
  faBug,
  faSignOutAlt, // Import the logout icon
} from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';
import Logo from '../assets/cardImg.png';
import { useProject } from '../data/Context/ProjectContext';
import { getAuth, signOut } from 'firebase/auth'; // Import Firebase auth

library.add(faTableColumns, faRectangleList, faPersonRunning, faCalendarDays, faBullseye, faBug, faSignOutAlt);

const Sidebar = () => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FontAwesomeIcon icon="fa-solid fa-table-columns" size="sm" />, href: '/dashboard' },
    { id: 'backlog', label: 'Backlog', icon: <FontAwesomeIcon icon="fa-solid fa-rectangle-list" size="sm" />, href: '/backlog' },
    { id: 'active-sprint', label: 'Active Sprint', icon: <FontAwesomeIcon icon="fa-solid fa-person-running" size="sm" />, href: '/active-sprint' },
    { id: 'calendar', label: 'Calendar', icon: <FontAwesomeIcon icon="fa-solid fa-calendar-days" size="sm" />, href: '/calendar' },
    { id: 'goals', label: 'Goals', icon: <FontAwesomeIcon icon="fa-solid fa-bullseye" size="sm" />, href: '/goals' },
    { id: 'issues', label: 'Issues', icon: <FontAwesomeIcon icon="fa-solid fa-bug" size="sm" />, href: '/issues' },
  ];

  const { project } = useProject();

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert('User signed out successfully.');
        window.location.href = '/';
       })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <div className="h-screen w-60 bg-white text-black flex flex-col items-center border border-gray-200">
      <div className="py-6 flex items-center bg-white w-full px-8">
        <img src={project.image} alt="Logo" className="w-11 h-11 object-cover border-white border-2" />
        <div className="pl-4">
          <h4 className="font-bold text-sm">{project.name}</h4>
          <h4 className="font-semibold text-xs">{project.type}</h4>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="flex flex-col gap-0 w-full">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-4 px-12 py-3 w-full ${
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
      <div className="w-full px-12 py-4">
        <button
          onClick={handleLogout}
          className="flex items-center gap-4 w-full bg-blue-500 text-white px-6 py-2 rounded-md"
        >
          <FontAwesomeIcon icon="fa-solid fa-sign-out-alt" size="sm" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
