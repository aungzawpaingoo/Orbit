import React from 'react';
import Sidebar from '../components/Sidebar';
import data from '../data/dashboardData.json'
import TitleBreadCrump from '../components/AppComponents/CommonComp/TitleBreadCrump';
import ResponsiveGrid from '../components/AppComponents/DashboardComp/ResponsiveGrid';
import ChartViews from '../components/AppComponents/DashboardComp/ChartViews';

const Dashboard = () => {
  return (
    <div className="flex">

      <Sidebar />
      
      <div className="flex-1 p-6 bg-gray-100 min-h-screen px-10">

        <TitleBreadCrump titleOne={"Orbit"} titleTwo={"Dashboard"} titleThree={"Report View"}/>
    
        <h1 className="text-2xl font-bold my-4">Summary</h1>
    
        <ResponsiveGrid/>

        <ChartViews/>
      
      </div>
    
    </div>
  );
};

export default Dashboard;
