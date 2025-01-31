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
  CircularProgress,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useProject } from '../../../data/Context/ProjectContext';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import FolderOffIcon from '@mui/icons-material/FolderOff';
import apiClient, {getImageUrl} from '../../../api/apiClient';

const ProjectTable = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await apiClient.get('/projects');
        setProjects(response.data);
      } catch (error) {
        console.log(error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [projects]);

  const navigate = useNavigate();
  const { setProject } = useProject();

  const handleRowClick = (project) => {
    setProject(project);
    navigate('/dashboard');
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent:'center', height: '50vh' }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ mt: 2, color: 'gray' }}>
          Loading Projects...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent:'center', height: '50vh' }}>
        <ErrorOutlineIcon sx={{ fontSize: 48, color: '#EF4444' }} />
        <Typography variant="h6" sx={{ mt: 2, color: '#EF4444', textAlign: 'center' }}>
          Can't Fetch Data From the Backend<br />Please Try Again Or Contact The Developer
        </Typography>
      </Box>
    );
  }

  if (projects.length === 0) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent:'center', height: '50vh' }}>
        <FolderOffIcon sx={{ fontSize: 48, color: '#9CA3AF' }} />
        <Typography variant="h6" sx={{ mt: 2, color: '#9CA3AF', textAlign: 'center' }}>
          No Projects Found
        </Typography>
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 1, boxShadow: 'none' }}>
      <Table>
        <TableHead sx={{ backgroundColor: 'white' }}>
          <TableRow>
            <TableCell sx={{ color: 'black', fontWeight: 'semibold', fontSize: '13px', padding: '8px 16px' }}>Name</TableCell>
            <TableCell sx={{ color: 'black', fontWeight: 'semibold', fontSize: '13px', padding: '8px 16px' }}>Key</TableCell>
            <TableCell sx={{ color: 'black', fontWeight: 'semibold', fontSize: '13px', padding: '8px 16px' }}>Type</TableCell>
            <TableCell sx={{ color: 'black', fontWeight: 'semibold', fontSize: '13px', padding: '8px 16px' }}>Product Owner</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow
              key={project._id}
              onClick={() => handleRowClick(project)}
              sx={{
                cursor: 'pointer',
                backgroundColor: 'white',
                height: '60px',
                transition: 'background-color 0.3s',
                '&:hover': { backgroundColor: '#ffffff' },
                '&:last-child td': { borderBottom: 'none' },
              }}
            >
              <TableCell sx={{ padding: '8px 16px', borderBottom: 'none' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <img
                    // src={project.image}
                    src={getImageUrl(project.image)}
                    alt={project.name}
                    style={{
                      height: '40px',
                      width: '40px',
                      borderRadius: '3px',
                      border: '1px solid',
                      borderColor:'#F8E7F6',
                      objectFit: 'cover',
                      imageResolution:'initial'
                    }}
                  />
                  <Typography variant="body2" fontWeight="semibold" sx={{ color: '#3B82F6' }}>
                    {project.name}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px', borderBottom: 'none' }}>
                <Typography variant="body2" sx={{ color: 'black', fontWeight: 'normal' }}>
                  {project.key}
                </Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px', borderBottom: 'none' }}>
                <Typography variant="body2" sx={{ color: 'black' }}>
                  {project.type}
                </Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px', borderBottom: 'none' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar src={project.assigned.avatar} alt={project.assigned.name} sx={{ width: '30px', height: '30px', objectFit:'cover' }} />
                  <Typography variant="body2" sx={{ color: 'black' }}>
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

