import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/AccessTime';
import CircularProgressIcon from '@mui/icons-material/Autorenew';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import apiClient from '../../../api/apiClient';

export default function BacklogDataTable({ projectId }) {
  const [backlogs, setBacklogs] = useState([]);

  useEffect(() => {
    const fetchBacklogs = async () => {
      try {
        const response = await apiClient.get(`/projects/${projectId}/backlogs`);
        setBacklogs(response.data);
      } catch (error) {
        console.error('Error fetching backlogs:', error.message);
      }
    };

    fetchBacklogs();
  }, [projectId]);

  // Function to determine icon and button color styles based on status
  const getStatusStyles = (status) => {
    switch (status) {
      case 'To Do':
        return {
          icon: <BookmarkIcon sx={{ color: 'white' }} />,
          styles: {
            backgroundColor: 'blue',
            color: 'white', // White text color
            borderColor: 'blue',
          },
        };
      case 'In Progress':
        return {
          icon: <BookmarkIcon sx={{ color: 'white' }} />,
          styles: {
            backgroundColor: 'orange',
            color: 'white', // White text color
            borderColor: 'orange',
          },
        };
      case 'Done':
        return {
          icon: <BookmarkIcon sx={{ color: 'white' }} />,
          styles: {
            backgroundColor: 'green',
            color: 'white', // White text color
            borderColor: 'green',
          },
        };
      default:
        return {
          icon: <BookmarkIcon sx={{ color: 'white' }} />,
          styles: {
            backgroundColor: 'gray',
            color: 'white', // White text color
            borderColor: 'gray',
          },
        };
    }
  };

  return (
    <TableContainer component={Paper}>
      {backlogs.length === 0 ? (
        <Typography variant="h6" align="center" padding={2}>
          No backlogs to display
        </Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Person</TableCell>
              <TableCell>Backlog Details</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Assigned Person</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Estimated Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {backlogs.map((backlog) => {
              const { icon, styles } = getStatusStyles(backlog.status);
              return (
                <TableRow key={backlog.id}>
                  <TableCell>
                    <img
                      src={backlog.assignee.avatar}
                      alt={backlog.assignee.name}
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        objectFit: 'contain',
                      }}
                    />
                  </TableCell>
                  <TableCell>{backlog.name}</TableCell>
                  <TableCell>{backlog.priority}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      sx={{
                        width: 'normal',
                        height: '28px',
                        borderRadius: '0.1',
                        fontSize: '12px',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textTransform: 'none',
                        ...styles,
                      }}
                      startIcon={icon}
                    >
                      {backlog.status}
                    </Button>
                  </TableCell>
                  <TableCell>{backlog.assignee.name}</TableCell>
                  <TableCell>{new Date(backlog.dueDate).toDateString()}</TableCell>
                  <TableCell>{backlog.estimatedHours}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}
