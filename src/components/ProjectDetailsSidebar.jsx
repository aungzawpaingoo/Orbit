import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaProjectDiagram, FaBullseye, FaCogs, FaChartLine } from 'react-icons/fa';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { useProject } from '../data/Context/ProjectContext';


const ProjectDetailsSidebar = () => {

  const {project} = useProject();
console.log("Sidebar project:", project);
  const projectId = project?._id;



  <Drawer
    variant="permanent"
    anchor="left"
    sx={{
      width: 240,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
        backgroundColor: '#f4f4f4',
      },
    }}
  >
    <List>
      <ListItem>
        <img src="TextLogo" alt="Logo" style={{ height: '40px', margin: '0 auto' }} />
      </ListItem>
      <Divider />

      {/* Dashboard */}
      <ListItem button component={NavLink} 
      // to="/dashboard" 
       to={`/dashboard/${projectId}`}
      style={({ isActive }) => ({
        backgroundColor: isActive ? 'rgba(0,0,0,0.1)' : 'transparent',
      })}>
        <ListItemIcon>
          <FaTachometerAlt />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      {/* Goals */}
      <ListItem button component={NavLink} to="/projects/goals" style={({ isActive }) => ({
        backgroundColor: isActive ? 'rgba(0,0,0,0.1)' : 'transparent',
      })}>
        <ListItemIcon>
          <FaProjectDiagram />
        </ListItemIcon>
        <ListItemText primary="Goals" />
      </ListItem>

      {/* Team */}
      <ListItem button component={NavLink} to="/projects/team" style={({ isActive }) => ({
        backgroundColor: isActive ? 'rgba(0,0,0,0.1)' : 'transparent',
      })}>
        <ListItemIcon>
          <FaBullseye />
        </ListItemIcon>
        <ListItemText primary="Team" />
      </ListItem>

      {/* Feedback */}
      <ListItem button component={NavLink} to="/projects/feedback" style={({ isActive }) => ({
        backgroundColor: isActive ? 'rgba(0,0,0,0.1)' : 'transparent',
      })}>
        <ListItemIcon>
          <FaBullseye />
        </ListItemIcon>
        <ListItemText primary="Give Feedback" />
      </ListItem>

      {/* Settings */}
      <ListItem button component={NavLink} to="/settings" style={({ isActive }) => ({
        backgroundColor: isActive ? 'rgba(0,0,0,0.1)' : 'transparent',
      })}>
        <ListItemIcon>
          <FaCogs />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>

      {/* Reports */}
      <ListItem button component={NavLink} to="/reports" style={({ isActive }) => ({
        backgroundColor: isActive ? 'rgba(0,0,0,0.1)' : 'transparent',
      })}>
        <ListItemIcon>
          <FaChartLine />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
    </List>
  </Drawer>
};

export default ProjectDetailsSidebar;
