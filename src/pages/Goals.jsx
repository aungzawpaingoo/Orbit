import React from 'react';
import Sidebar from '../components/Sidebar';
import TitleBreadCrump from '../components/AppComponents/CommonComp/TitleBreadCrump';
import { useLocation } from 'react-router-dom';
import { useProject } from '../data/Context/ProjectContext';
import GoalsTracker from '../components/AppComponents/GoalsComp/GoalsTracker';
import GoalsOperationBar from '../components/AppComponents/GoalsComp/GoalsOperationBar'

const Goals = () => {

  const { project } = useProject();


  return (
    <div className="flex h-screen">
      
      
      <div className="">
        <Sidebar />
      </div>

      
      <div className="flex-1 p-6 bg-white overflow-y-auto px-4">
        
        <TitleBreadCrump titleOne={project.name} titleTwo={project.key} titleThree={"Report View"}/>

        <h1 className="text-2xl font-bold my-4">Goals Tracker</h1>

        <GoalsOperationBar/>

        <GoalsTracker/>
        
      </div>

    </div>
  );
};

export default Goals;
