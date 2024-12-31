import React from 'react';
import Sidebar from '../components/Sidebar';
import TitleBreadCrump from '../components/AppComponents/CommonComp/TitleBreadCrump';
import ResponsiveGrid from '../components/AppComponents/DashboardComp/ResponsiveGrid';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      
      <div className="">
        <Sidebar />
      </div>

      
      <div className="flex-1 p-6 bg-white overflow-y-auto px-10">
        <TitleBreadCrump titleOne={"Orbit"} titleTwo={"Dashboard"} titleThree={"Report View"}/>

        <h1 className="text-2xl font-bold my-4">Summary</h1>

        <ResponsiveGrid />
      </div>

    </div>
  );
};

export default Dashboard;


