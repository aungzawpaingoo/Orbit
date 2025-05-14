
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTableColumns,
  faRectangleList,
  faPersonRunning,
  faCalendarDays,
  faBullseye,
  faBug,
  faSignOutAlt,
  faFile,
  faFileInvoice,
} from '@fortawesome/free-solid-svg-icons';

import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/cardImg.png';
import { useProject } from '../data/Context/ProjectContext';
import { getAuth, signOut } from 'firebase/auth'; 
import { UserContext } from '../data/Context/UserContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Typography } from '@mui/material';
import apiClient, {getImageUrl} from '../api/apiClient';



library.add(faTableColumns, faRectangleList, faPersonRunning, faCalendarDays, faBullseye, faBug, faSignOutAlt,faFile,faFileInvoice);

const Sidebar = () => {

    const {project} = useProject();
  console.log("Sidebar project:", project);
    const projectId = project?._id;

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FontAwesomeIcon icon="fa-solid fa-table-columns" size="sm" />,  href: projectId ? `/dashboard/${projectId}` : '#' },
    { id: 'backlog', label: 'Backlog', icon: <FontAwesomeIcon icon="fa-solid fa-rectangle-list" size="sm" />, href: projectId ? `/backlog/${projectId}`  : '#'},
    { id: 'active-sprint', label: 'Sprints', icon: <FontAwesomeIcon icon="fa-solid fa-person-running" size="sm" />, href: projectId ? `/active-sprint/${projectId}`  : '#'},
    { id: 'calendar', label: 'Calendar', icon: <FontAwesomeIcon icon="fa-solid fa-calendar-days" size="sm" />, href: projectId ? `/calendar/${projectId}`  : '#'},
    { id: 'goals', label: 'Goals', icon: <FontAwesomeIcon icon="fa-solid fa-bullseye" size="sm" />, href: projectId ? `/goals/${projectId}`  : '#'},
    { id: 'issues', label: 'Issues', icon: <FontAwesomeIcon icon="fa-solid fa-bug" size="sm" />, href: projectId ? `/issues/${projectId}` : '#' },
    { id: 'issues', label: 'Forms', icon: <FontAwesomeIcon icon="fa-solid fa-file-invoice" size="sm" />, href: projectId ? `/forms/${projectId}` : '#' },
  ];


  const { user, setUser } = useContext(UserContext);
  const navigation = useNavigate();

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert('User signed out successfully.');
        setUser(null);
        window.location.href = '/';
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <div className="h-screen w-64 bg-white text-black flex flex-col items-center border border-gray-200">

<div className="w-full py-3 flex items-center justify-between bg-white px-3 shadow-none">
  <Button 
    variant="text" 
    color="black" 
    onClick={() => navigation('/projects')}
    sx={{
      textTransform: 'none',
      fontSize: '11px',
      fontWeight: 'medium',
      padding: '2px 4px',
    }}
  >
    Back to Projects List
  </Button>
</div>

<div className="py-5 mb-4 flex items-center justify-start bg-white w-full px-3 shadow-sm border-t border-gray-200">
  <img src={getImageUrl(project.image)} alt="Logo" className="w-11 h-11 object-cover rounded-md border border-gray-200" />
  <div className="pl-2">
    {/* <h4 className="font-medium text-xs mb-1">{project.name}</h4>
    <h5 className="font-normal text-xs text-gray-500">{project.type}</h5> */}
    <Typography sx={{fontWeight:'bold', fontSize:'11.5px'}}>{project.name}</Typography>
    <Typography variant='caption' color='#3B82F6'>{project.type}</Typography>
  </div>
</div>

    <Typography variant='body2' sx={{color:'gray',alignSelf:'flex-start', marginLeft:'12px', marginBottom:'10px'}}>Planning</Typography>

      <div className="flex-1 flex justify-center">
        <div className="flex flex-col gap-0 w-full">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-6 px-16 py-3 w-full ${isActive ? 'bg-blue-50 rounded-sm font-normal text-blue-500' : 'hover:bg-white'
                }`
              }
            >
              {item.icon}
              {/* <span className="text-sm">{item.label}</span> */}
              <Typography sx={{fontSize:'12.5px'}}>{item.label}</Typography>
            </NavLink>
          ))}
        </div>
      </div>

      <Typography></Typography>
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
