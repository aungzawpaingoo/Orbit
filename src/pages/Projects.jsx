import React, { useContext, useState } from 'react';
import CustomAppBar from '../components/CustomAppBar';
import ProjectTable from '../components/AppComponents/ProjectsComp/ProjectTable';
import { Box, Modal, Typography, TextField, Select, MenuItem, Button, Avatar, Icon } from '@mui/material';
import { UserContext } from '../data/Context/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [projects,setProjects] = useState('');

  const [open, setOpen] = useState(false);
  
  const handleCreateProject =() => {
      alert('Clicked')
  };


  return (
    <div className=''>
      <CustomAppBar setProjects={setProjects} />

      <div className='px-10 pt-5 pb-10 bg-white'>

        <div className='mt-3 mb-3'>

          
          <div className='mb-2'>
          <Typography variant='h5' sx={{fontWeight:'bold'}}>Welcome back, {user?.displayName}</Typography>
          </div>

          <div className='ml-1'>
          <Typography variant='body2'>What would you like to do with your projects today!</Typography>
            </div>

        </div>

        <Box sx={{ padding: 0, width: 'full' }}>
          <ProjectTable />
        </Box>

      </div>

     
    </div>
  );
};

export default Projects;
