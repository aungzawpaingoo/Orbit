import React from 'react';
import Sidebar from '../components/Sidebar';
import TitleBreadCrump from '../components/AppComponents/CommonComp/TitleBreadCrump';
import { useProject } from '../data/Context/ProjectContext';
import DataFilterBar from '../components/AppComponents/CommonComp/DataFilterBar';
import CalendarView from '../components/AppComponents/CalendarComp/CalendarView';

const Calendar = () => {
  const { project } = useProject();

  return (
    <div className="flex h-screen">
      <div>
        <Sidebar />
      </div>

      <div className="flex-1 p-6 bg-white overflow-y-auto px-4">
        <TitleBreadCrump titleOne={project.name} titleTwo={project.key} titleThree={"Calendar Data"} />

        <h1 className="text-2xl font-bold my-4">Caledar View</h1>
        <h1 className="text-sm font-semibold my-4">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </h1>



        <DataFilterBar />


        <div className="overflow-y-auto mt-4 mb-0">
          <CalendarView />
        </div>

      </div>
    </div>
  );
};

export default Calendar;
