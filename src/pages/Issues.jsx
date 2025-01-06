import React from 'react';
import Sidebar from '../components/Sidebar';
import TitleBreadCrump from '../components/AppComponents/CommonComp/TitleBreadCrump';
import { useProject } from '../data/Context/ProjectContext';
import DragandDropView from '../components/AppComponents/ActiveSprintsComp/DragandDropView'
import DataFilterBar from '../components/AppComponents/CommonComp/DataFilterBar';
import { Typography } from '@mui/material';


const Issues = () => {
  const { project } = useProject();

  return (
    <div className="flex h-screen">
      <div>
        <Sidebar />
      </div>

      <div className="flex-1 p-6 bg-white overflow-y-auto px-4">
        <TitleBreadCrump titleOne={project.name} titleTwo={project.key} titleThree={"Issues Data"} />

        <div className='my-4'>
        <h1 className="text-2xl font-bold my-2">Issues</h1>
        
        <Typography variant='subtitle2' sx={{marginTop:'2',marginBlock:'2'}}>Quickly assign responsibilities, set deadlines, and monitor your team's workflow all in one place. Let Issues help you stay focused and deliver on time.</Typography>
        </div>

        <div className='mb-2'>
        <DataFilterBar/>
        </div>

        {/* Container for BacklogDataTable with specific height and scrolling */}
        <div className="overflow-y-auto max-h-[650px]"> {/* Adjust max-h as needed */}
          <DragandDropView/>
        </div>
      </div>
    </div>
  );
};

export default Issues;
