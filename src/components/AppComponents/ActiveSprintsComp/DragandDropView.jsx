import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Box, Typography, Paper, Card, CardContent, Grid } from '@mui/material';
import axios from 'axios';

import todoImg from '../../../assets/icons8-bookmark-480 (1).png';
import pendingImg from '../../../assets/pending.png';
import inProgressImg from '../../../assets/arrow-progress.png';
import completedImg from '../../../assets/clipboard-check.png';
import apiClient from '../../../api/apiClient';

const DragandDropView = ({ projectId }) => {
  const [columns, setColumns] = useState({
    ToDo: [],
    InProgress: [],
    Review: [],
    Done: [],
  });

  useEffect(() => {
    const fetchSprints = async () => {
      try {
        const response = await apiClient.get(`/projects/${projectId}/activesprints`);
        const sprints = response.data;

        // Categorize sprints based on progress
        const categorizedSprints = {
          ToDo: sprints.filter((sprint) => sprint.progress === 0),
          InProgress: sprints.filter((sprint) => sprint.progress > 0 && sprint.progress < 100),
          Review: [], // Add logic if needed for review-specific sprints
          Done: sprints.filter((sprint) => sprint.progress === 100),
        };

        setColumns(categorizedSprints);
      } catch (error) {
        console.error('Failed to fetch sprints:', error);
      }
    };

    fetchSprints();
  }, [projectId]);

  const handleDrop = (item, targetCol) => {
    const { fromCol, index } = item;
    const draggedItem = columns[fromCol][index];

    setColumns((prevColumns) => {
      const newColumns = { ...prevColumns };
      newColumns[fromCol] = newColumns[fromCol].filter((_, i) => i !== index);
      newColumns[targetCol] = [...newColumns[targetCol], draggedItem];
      return newColumns;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={{ display: 'flex', gap: 2, marginTop: 4, backgroundColor: 'white', minHeight: '100vh', justifyContent: 'center' }}>
        {Object.keys(columns).map((col, colIndex) => (
          <Column key={colIndex} name={col} items={columns[col]} onDrop={(item) => handleDrop(item, col)} />
        ))}
      </Box>
    </DndProvider>
  );
};

const Column = ({ name, items, onDrop }) => {
  const [, drop] = useDrop({
    accept: 'ITEM',
    drop: (item) => onDrop(item),
  });

  let columnImage;
  switch (name) {
    case 'ToDo':
      columnImage = todoImg;
      break;
    case 'InProgress':
      columnImage = inProgressImg;
      break;
    case 'Review':
      columnImage = pendingImg;
      break;
    case 'Done':
      columnImage = completedImg;
      break;
    default:
      columnImage = todoImg;
  }

  return (
    <Paper
      ref={drop}
      elevation={0}
      sx={{
        flex: 1,
        minHeight: '300px',
        padding: 2,
        borderRadius: 2,
        backgroundColor: 'white',
        border: '1px solid #E5E7EB',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: 'none',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: 2, position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img
            src={columnImage}
            alt="status"
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '2px',
              objectFit: 'cover',
            }}
          />
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'black', textTransform: 'none', letterSpacing: 1, fontFamily: 'Roboto, sans-serif' }}>
            {name}
          </Typography>
        </Box>
        <Typography variant="subtitle2" color="textSecondary" sx={{ fontSize: '12px', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>
          {items.length} Tasks
        </Typography>
      </Box>

      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', maxHeight: 'calc(100vh - 180px)', overflowY: 'auto', paddingRight: '8px' }}>
        {items.map((item, index) => (
          <DraggableItem key={index} item={item} index={index} fromCol={name} />
        ))}
      </Box>
    </Paper>
  );
};

const DraggableItem = ({ item, index, fromCol }) => {
  const [, drag] = useDrag({
    type: 'ITEM',
    item: { task: item.sprintName, index, fromCol },
  });

  return (
    <Card
      ref={drag}
      sx={{
        marginBottom: 2,
        cursor: 'grab',
        backgroundColor: 'white',
        borderRadius: '8px',
        border: '1px solid #E5E7EB',
        width: '240px',
        boxShadow: 'none',
        flexShrink: 0,
        '&:hover': {
          backgroundColor: '#F3F4F6',
        },
      }}
    >
      <CardContent sx={{ padding: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="body2" sx={{ fontWeight: 500, color: 'black', fontFamily: 'Roboto, sans-serif', fontSize: '13px' }}>
              {item.sprintName}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ fontSize: '12px', fontFamily: 'Roboto, sans-serif' }}>
              {item.description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default DragandDropView;


