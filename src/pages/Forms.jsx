import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import TitleBreadCrump from '../components/AppComponents/CommonComp/TitleBreadCrump';
import { useProject } from '../data/Context/ProjectContext';
import { Typography } from '@mui/material';
import FormChoices from '../components/AppComponents/FormsComp/FormChoices';


const Forms = () => {
  const { project } = useProject();
  const projectId = project?._id;

  useEffect(() => {
    console.log('Project:', projectId);
  }, [projectId]);

  return (
    <div className="flex h-screen">
      <div>
        <Sidebar />
      </div>

      <div className="flex-1 p-6 bg-white overflow-y-auto px-4">
        <TitleBreadCrump titleOne={project.name} titleTwo={project.key} titleThree={"Forms Data"} />

        <h1 className="text-2xl font-bold my-4">Forms</h1>

        <div className='w-full h-3/4'>

          <div className='my-6'>
          <Typography variant='h6' sx={{fontWeight:'normal'}}>Create a new form</Typography>
          </div>

          <FormChoices/>


        </div>


      </div>
    </div>
  );
};

export default Forms;

