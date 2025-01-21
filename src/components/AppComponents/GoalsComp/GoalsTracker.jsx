import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';
import apiClient from '../../../api/apiClient';

export default function GoalsTracker({ projectId }) {

  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await apiClient.get(`/projects/${projectId}/goals`);
        setGoals(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching goals:', error.message);
      }
    };
    fetchGoals();
  }, [projectId]);

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      {goals.length === 0 ? (
        <Typography variant="h6" align="center" padding={2}>
          No goals to display
        </Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Person</TableCell>
              <TableCell>Task Name</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Assigned Person</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Estimated Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {goals.map((goal) => (
              <TableRow>
                <TableCell>
                  <img
                    src={goal.assignee.avatar}
                    alt={goal.assignee.name}
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      objectFit: 'contain',
                      marginRight: '10px',
                    }}
                  />

                </TableCell>
                <TableCell>{goal.name}</TableCell>
                <TableCell>{goal.priority}</TableCell>
                <TableCell>{goal.status}</TableCell>

                <TableCell>{goal.assignee.name}</TableCell>
                <TableCell>
                  {new Date(goal.dueDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </TableCell>
                <TableCell>{goal.estimatedHours || 'N/A'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};


