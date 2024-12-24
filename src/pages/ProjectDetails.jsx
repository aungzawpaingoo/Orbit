import React from 'react';
import { useLocation, useParams, Routes, Route } from 'react-router-dom';
import ProjectDetailsSidebar from '../components/ProjectDetailsSidebar'; 

import Projects from '../pages/Projects';
import Goals from '../pages/Goals';
import Team from '../pages/Team';
import GiveFeedback from '../pages/GiveFeedback';

export default function ProjectDetails() {
  const { key } = useParams(); // Access the dynamic segment in the URL
  const location = useLocation(); // Access the state passed via navigation
  const project = location.state; // Retrieve project data

  return (
    <div className="flex">
      {/* Sidebar for navigation */}
      <ProjectDetailsSidebar />
      
      {/* Main content area */}
      <div className="flex-1 p-6">
        <h1>Project Details</h1>
        {project ? (
          <div>
            <p><strong>Name:</strong> {project.name}</p>
            <p><strong>Key:</strong> {project.key}</p>
            <p><strong>Type:</strong> {project.type}</p>
            <p><strong>Lead Person:</strong> {project.leadPerson}</p>
          </div>
        ) : (
          <p>No project details available.</p>
        )}

        {/* Nested Routes */}
        <Routes>
          <Route path="goals" element={<Goals />} />
          <Route path="team" element={<Team />} />
          <Route path="feedback" element={<GiveFeedback />} />
        </Routes>
      </div>
    </div>
  );
}
