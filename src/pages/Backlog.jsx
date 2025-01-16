import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import TitleBreadCrump from '../components/AppComponents/CommonComp/TitleBreadCrump';
import { useProject } from '../data/Context/ProjectContext';
import BackLogOperationBar from '../components/AppComponents/BacklogComp/BackLogOperationBar';
import BacklogDataTable from '../components/AppComponents/BacklogComp/BacklogDataTable';

const Backlog = () => {
  const { project } = useProject();
  const projectId = project?._id;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('Project:', projectId);
  }, [projectId]);

  return (
    <div className="flex h-screen">
      <div>
        <Sidebar />
      </div>

      <div className="flex-1 p-6 bg-white overflow-y-auto px-4">
        <TitleBreadCrump titleOne={project.name} titleTwo={project.key} titleThree={"Backlog Data"} />

        <h1 className="text-2xl font-bold my-4">Backlog</h1>

        {/* Operation Bar for creating tasks */}
        <BackLogOperationBar projectId={projectId} setTasks={setTasks} />

        <div className="overflow-y-auto max-h-[650px]">
          {/* Data Table to display tasks */}
          <BacklogDataTable tasks={tasks} setTasks={setTasks} projectId={projectId} />
        </div>
      </div>
    </div>
  );
};

export default Backlog;
