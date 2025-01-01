import React from 'react';
import CustomAppBar from '../components/CustomAppBar';
import ProjectTable from '../components/AppComponents/ProjectsComp/ProjectTable';
import { Box, Button, TextField, Select, MenuItem, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TitleBreadCrump from '../components/AppComponents/CommonComp/TitleBreadCrump'

const Projects = () => {
  const navigate = useNavigate();

  const handleCreateProject = () => {
    alert('Create Project')
  };

  return (
    <div className=''>
      
      <CustomAppBar />
      
      
      <div className='px-10 bg-white'>

      <div className='py-5'>
      <TitleBreadCrump titleOne={"All Projects"} titleTwo={"Table View"} titleThree={"Project Lists"}/>
      </div>

      <Box sx={{ padding: 0, width:'full' }}>
        <ProjectTable />
      </Box>

      </div>
    
    </div>
  );
};

export default Projects;
