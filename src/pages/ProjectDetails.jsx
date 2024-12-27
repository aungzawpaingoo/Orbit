import React from 'react';
import { useLocation, useParams, Routes, Route } from 'react-router-dom';
import ProjectDetailsSidebar from '../components/ProjectDetailsSidebar';
import Projects from '../pages/Projects';
import Goals from '../pages/Goals';
import Team from '../pages/Team';
import GiveFeedback from '../pages/GiveFeedback';
import Appbar from '../components/ProjectsComp/Appbar';
import { Typography } from '@mui/material';

import DataFilters from '../components/ProjectsComp/DataFilters';

export default function ProjectDetails() {
  const { key } = useParams();
  const location = useLocation();
  const project = location.state;

  return (
    <div className="flex">
      <ProjectDetailsSidebar />
      <div className="flex-1 p-6">

        {/* Main Content */}
        <Appbar project={project} />

        <Typography variant="h6" gutterBottom>
          TimeLine
        </Typography>

        <DataFilters/>


        {/* Main Content */}

        <Routes>
          <Route path="goals" element={<Goals />} />
          <Route path="team" element={<Team />} />
          <Route path="feedback" element={<GiveFeedback />} />
        </Routes>
      </div>
    </div>
  );
}
