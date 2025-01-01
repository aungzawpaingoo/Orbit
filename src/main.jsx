import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ProjectProvider } from './data/Context/ProjectContext.jsx'; 
import { UserProvider } from './data/Context/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectProvider>
      <UserProvider>
      <App />
      </UserProvider>
    </ProjectProvider>
  </StrictMode>
);
