import React from 'react';
import Sidebar from '../components/Sidebar';
import TitleBreadCrump from '../components/AppComponents/CommonComp/TitleBreadCrump';
import { Button } from '@mui/material';
import DataFilter from '../components/AppComponents/ProjectsComp/DataFilter';
import DataTable from '../components/AppComponents/ProjectsComp/DataTable';

const Projects = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen px-10">
        <TitleBreadCrump
          titleOne={"Orbit"}
          titleTwo={"Dashboard"}
          titleThree={"Report View"}
        />

        <div className="flex justify-normal items-center space-x-4">
          <h1 className="text-2xl font-bold my-4">Projects Content</h1>
          <Button
            size="small"
            variant="contained"
            sx={{
              ...styles.btn,
              textTransform: 'none',}}
          >
            Create Project
          </Button>
        </div>
        
        <DataFilter/>

        <DataTable/>

      </div>
    </div>
  );
};

const styles = {
  btn: {
    width: '100px', 
    height: '30px', 
    fontSize: '0.7rem',
    padding: '4px 8px',
    lineHeight: 1.2,
  },
};

export default Projects;
