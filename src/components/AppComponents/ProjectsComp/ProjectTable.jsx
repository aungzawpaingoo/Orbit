import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Box,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useProject } from '../../../data/Context/ProjectContext';

import apiClient from '../../../api/apiClient';

const ProjectTable = () => {

  const [projects, setProjects] = useState([]);

  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await apiClient.get('/projects');
        setProjects(response.data); 
        console.log('Projects:', response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const navigate = useNavigate();
  const { setProject } = useProject();

  const handleRowClick = (project) => {
    setProject(project);
    navigate('/dashboard');
  };

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 1, boxShadow:'none' }}>
      <Table>
        <TableHead sx={{ backgroundColor: 'white' }}>
          <TableRow>
            <TableCell sx={{ color: 'black', fontWeight: 'bold', fontSize: 14, padding: '8px 16px' }}>
              Name
            </TableCell>
            <TableCell sx={{ color: 'black', fontWeight: 'bold', fontSize: 14, padding: '8px 16px' }}>
              Key
            </TableCell>
            <TableCell sx={{ color: 'black', fontWeight: 'bold', fontSize: 14, padding: '8px 16px' }}>
              Type
            </TableCell>
            <TableCell sx={{ color: 'black', fontWeight: 'bold', fontSize: 14, padding: '8px 16px' }}>
              Product Owner
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow
              key={project._id}
              onClick={() => handleRowClick(project)}
              sx={{
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                '&:hover': { backgroundColor: '#ffffff' },
                '&:last-child td': { borderBottom: 0 },
              }}
            >
              <TableCell sx={{ padding: '8px 16px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{ height: '40px', width: '40px', borderRadius: '6px' }}
                  />
                  <Typography variant="body2" fontWeight="bold" sx={{ color: '#424242' }}>
                    {project.name}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px' }}>
                <Typography variant="body2" sx={{ color: '#1E88E5', fontWeight: 'medium' }}>
                  {project.key}
                </Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px' }}>
                <Typography variant="body2" sx={{ color: '#757575' }}>
                  {project.type}
                </Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar src={project.assigned.avatar} alt={project.assigned.name} sx={{ width: 32, height: 32 }} />
                  <Typography variant="body2" sx={{ color: '#616161' }}>
                    {project.assigned.name}
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectTable;
