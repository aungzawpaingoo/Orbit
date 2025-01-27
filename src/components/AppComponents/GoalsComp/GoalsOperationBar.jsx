import { Avatar, Select, TextField, Box, Button, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';

const GoalsOperationBar = ({ addTask }) => {
  const selectStyle = {
    marginRight: '8px',
    width: '150px',
    height: '40px',
    '.MuiSelect-select': {
      height: '40px',
    },
  };

  const [openModal, setOpenModal] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [assignee, setAssignee] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [estimatedHours, setEstimatedHours] = useState('');
  const [formError, setFormError] = useState('');

  const assignees = [
    { name: 'John Doe', avatar: 'https://images.squarespace-cdn.com/content/v1/54ab66dee4b0da465dd06039/1476559947089-11G8JA4HI2NYQUNDXYND/Justin+Wilson9075.jpg' },
    { name: 'Jane Smith', avatar: 'https://static.vecteezy.com/system/resources/thumbnails/044/045/851/small_2x/portrait-of-a-smiling-business-woman-in-white-background-photo.jpg' }
  ];

  const mainAvatarImage = "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg";

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    // Reset form fields
    setTaskName('');
    setPriority('');
    setStatus('');
    setAssignee('');
    setDueDate('');
    setEstimatedHours('');
    setFormError('');
  };

  const handleFormSubmit = () => {
    if (!taskName || !priority || !status || !assignee || !dueDate || !estimatedHours) {
      setFormError('All fields are required!');
      return;
    }

    // Prepare the new task object
    const newTask = {
      name: taskName,
      priority,
      status,
      assignee,
      dueDate,
      estimatedHours,
    };

    // Pass the new task to the parent component (Backlog)
    addTask(newTask);

    handleCloseModal(); // Close the modal and reset the form
  };

  return (
    <Box className="bg-white w-full" display="flex" alignItems="center">
      <TextField
        sx={{
          marginRight: '16px',
          width: '260px',
          height: '40px',
          '& .MuiInputBase-root': {
            height: '40px',
          },
        }}
        type='search'
        placeholder='Search'
      />

      <Box sx={{ marginRight: '16px' }}>
        <Avatar src={mainAvatarImage} sx={{ width: '40px', height: '40px' }} />
      </Box>

      <Box display="flex">
        {[1, 2, 3, 4].map((_, index) => (
          <Select key={index} sx={selectStyle} />
        ))}
      </Box>

      <Button
        onClick={handleOpenModal}
        variant="contained"
        startIcon={<AddIcon />}
        sx={{
          color: 'white',
          textTransform: 'none',
          backgroundColor: '#3B82F6',
          '&:hover': {
            backgroundColor: '#2563EB',
          },
        }}
      >
        Create
      </Button>

      {/* Modal for task creation */}
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="xs" fullWidth sx={{ backgroundColor: '' }}>
         <DialogTitle sx={{ backgroundColor: '#3B82F6', marginBottom: '18px', color: 'white' }}>Create goal</DialogTitle>
        <DialogContent className="flex flex-col ">
        <div className='mt-2 mb-4'>
            <Typography variant='body2' sx={{ color: 'black', marginBottom: '6px' }}>Goal Title*</Typography>
            <TextField
              placeholder='Enter title of the goal you want to create'
              color='black'
              sx={{ width: '400px', height: '40px' }} />
          </div>

          <div className='mt-6 mb-4'>
            <Typography variant='body2' sx={{ color: 'black', marginBottom: '6px' }}>Goal Description*</Typography>
            <TextField
              placeholder='Enter description of the goal you want to create'
              color='black'
              sx={{ width: '400px', height: '40px' }} />
          </div>

          <div className='mt-6 mb-4'>
            <Typography variant='body2' sx={{ color: 'black', marginBottom: '6px' }}>Target Date*</Typography>
            <TextField
              type='date'
              
              color='black'
              sx={{ width: '400px', height: '40px' }} />
          </div>

          <div className='mt-6 mb-4'>
            <Typography variant='body2' sx={{ color: 'black', marginBottom: '6px' }}>Set Priority Level*</Typography>
            <TextField
              select
              placeholder='Enter title of the backlog you want to create'
              color='black'
              sx={{ width: '400px', height: '40px' }} />
          </div>
          <Typography variant='body2' color='gray' sx={{ marginTop: '2px' }}>This is the initial priority upon creation</Typography>

          <div className='mt-6 mb-4'>
            <Typography variant='body2' sx={{ color: 'black', marginBottom: '6px' }}>Select Status*</Typography>
            <TextField
            select
              placeholder='Enter title of the backlog you want to create'
              color='black'
              sx={{ width: '400px', height: '40px' }} />
          </div>
          <Typography variant='body2' color='gray' sx={{ marginTop: '2px' }}>This is the initial status upon creation</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} variant='outlined' sx={{backgroundColor:''}}>Cancel</Button>
          <Button onClick={handleFormSubmit} sx={{backgroundColor:'#3B82F6'}} variant='contained'>Create</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default GoalsOperationBar;
