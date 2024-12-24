import React from 'react';
import TitleComponent from '../components/ProjectsComp/TitleComponent'
import ProjectsTable from '../components/ProjectsComp/ProjectsTable';

const Projects = () => {
  return (
    <div className="w-full bg-white">
      <TitleComponent/>
      <ProjectsTable/>
    </div>
  );
};

export default Projects;
