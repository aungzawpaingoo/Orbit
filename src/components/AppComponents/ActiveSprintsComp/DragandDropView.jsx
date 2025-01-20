import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Box, Typography, Paper, Card, CardContent, Grid } from '@mui/material';
import todoImg from '../../../assets/icons8-bookmark-480 (1).png';
import pendingImg from '../../../assets/pending.png';
import inProgressImg from '../../../assets/arrow-progress.png';
import completedImg from '../../../assets/clipboard-check.png';

const DragandDropView = () => {
  const [columns, setColumns] = useState({
    ToDo: [
      { task: 'Design the UI', details: 'Create a responsive UI .....', date: '2025-01-05' },
      { task: 'Set up backend', details: 'Create API routes and .....', date: '2025-01-07' },
    ],
    InProgress: [
      { task: 'Develop features', details: 'Develop authentication and .....', date: '2025-01-03' },
      { task: 'Integrate API', details: 'Connect frontend to backend .....', date: '2025-01-04' },
    ],
    Review: [
      { task: 'Code review', details: 'Review pull request for .....', date: '2025-01-02' },
    ],
    Done: [
      { task: 'Deploy to production', details: 'Deploy app to AWS .....', date: '2025-01-01' },
      { task: 'Team meeting', details: 'Discuss upcoming .....', date: '2025-01-01' },
    ],
  });

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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: 2,
          position: 'sticky',
          top: 0,
          backgroundColor: 'white',
          zIndex: 1,
        }}
      >
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
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              color: 'black',
              textTransform: 'none',
              letterSpacing: 1,
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            {name}
          </Typography>
        </Box>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          sx={{
            fontSize: '12px',
            fontWeight: 'bold',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          {items.length} Tasks
        </Typography>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center',
          maxHeight: 'calc(100vh - 180px)',
          overflowY: 'auto',
          paddingRight: '8px',
          
        }}
      >
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
    item: { task: item.task, index, fromCol },
  });

  let taskImage;
  switch (fromCol) {
    case 'ToDo':
      taskImage = todoImg;
      break;
    case 'InProgress':
      taskImage = inProgressImg;
      break;
    case 'Review':
      taskImage = pendingImg;
      break;
    case 'Done':
      taskImage = completedImg;
      break;
    default:
      taskImage = todoImg;
  }

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
            <img
              src={taskImage}
              alt="status"
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '2px',
                objectFit: 'contain',
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                color: 'black',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '13px',
              }}
            >
              {item.task}
            </Typography>
           
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{
                fontSize: '12px',
                fontFamily: 'Roboto, sans-serif',
              }}
            >
              {item.details}
            </Typography>


          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default DragandDropView;
