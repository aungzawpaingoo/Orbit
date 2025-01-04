// import React, { createContext, useState, useContext } from 'react';

// // Create context
// const ProjectContext = createContext();

// // Custom hook to use the context
// export const useProject = () => useContext(ProjectContext);

// // Provider component
// export const ProjectProvider = ({ children }) => {
//   const [project, setProject] = useState(null);

//   return (
//     <ProjectContext.Provider value={{ project, setProject }}>
//       {children}
//     </ProjectContext.Provider>
//   );
// };


import React, { createContext, useState, useEffect, useContext } from 'react';

// Create context
const ProjectContext = createContext();

// Custom hook to use the context
export const useProject = () => useContext(ProjectContext);

// Provider component
export const ProjectProvider = ({ children }) => {
  // Initialize project state from localStorage, if available
  const [project, setProject] = useState(() => {
    const savedProject = localStorage.getItem('selectedProject');
    return savedProject ? JSON.parse(savedProject) : null;
  });

  // Save project to localStorage whenever it changes
  useEffect(() => {
    if (project) {
      localStorage.setItem('selectedProject', JSON.stringify(project));
    }
  }, [project]);

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
