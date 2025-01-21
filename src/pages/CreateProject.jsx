import React from 'react';
import { useNavigate } from 'react-router-dom';
import CreateProjectAppbar from '../components/AppComponents/CreateProjectComp/CreateProjectAppbar';
import CreateProjectForm from '../components/AppComponents/CreateProjectComp/CreateProjectForm';

const CreateProject = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/projects');
  };

  return (
    <div className="w-full min-h-screen flex flex-col overflow-hidden">
      <div className="sticky top-0 z-10">
        <CreateProjectAppbar onBackToProject={handleNavigation} />
      </div>

      <div className="flex-grow overflow-hidden">
        <CreateProjectForm />
      </div>
    </div>
  );
};

export default CreateProject;
