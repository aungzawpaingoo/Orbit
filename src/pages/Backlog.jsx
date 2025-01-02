import React from 'react';
import Sidebar from '../components/Sidebar';
import TitleBreadCrump from '../components/AppComponents/CommonComp/TitleBreadCrump';
import { useProject } from '../data/Context/ProjectContext';
import DataFilterBar from '../components/AppComponents/CommonComp/DataFilterBar';
import BacklogDataTable from '../components/AppComponents/BacklogComp/BacklogDataTable';

const Backlog = () => {
  const { project } = useProject();

  return (
    <div className="flex h-screen">
      <div>
        <Sidebar />
      </div>

      <div className="flex-1 p-6 bg-white overflow-y-auto px-4">
        <TitleBreadCrump titleOne={project.name} titleTwo={project.key} titleThree={"Backlog Data"} />

        <h1 className="text-2xl font-bold my-4">Backlog</h1>

        <DataFilterBar />

        {/* Container for BacklogDataTable with specific height and scrolling */}
        <div className="overflow-y-auto max-h-[650px]"> {/* Adjust max-h as needed */}
          <BacklogDataTable />
        </div>
      </div>
    </div>
  );
};

export default Backlog;
