import React from 'react';
import Sidebar from '../components/Sidebar';
import TitleBreadCrump from '../components/AppComponents/CommonComp/TitleBreadCrump';
import ResponsiveGrid from '../components/AppComponents/DashboardComp/ResponsiveGrid';
import { useLocation } from 'react-router-dom';
import { useProject } from '../data/Context/ProjectContext';

const Dashboard = () => {

  const { project } = useProject();


  return (
    <div className="flex h-screen">
      
      <div className="">
        <Sidebar />
      </div>

      
      <div className="flex-1 p-6 bg-white overflow-y-auto px-10">
        <TitleBreadCrump titleOne={project.name} titleTwo={project.key} titleThree={"Report View"}/>

        <h1 className="text-2xl font-bold my-4">Summary</h1>

        <ResponsiveGrid />
      </div>

    </div>
  );
};

export default Dashboard;


