import React, { createContext, useState, useContext } from 'react';

// Create context
const ProjectContext = createContext();

// Custom hook to use the context
export const useProject = () => useContext(ProjectContext);

// Provider component
export const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState(null);

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
