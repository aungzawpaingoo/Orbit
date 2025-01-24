
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Button,
  Modal,
  TextField,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import apiClient from '../api/apiClient';

const CustomAppBar = ({ projects, setProjects }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    key: '',
    type: '',
    assigned: { name: '', avatar: '' },
    image: '',
  });

  const users = [
    { id: '1', name: 'John Doe', avatar: 'https://via.placeholder.com/40' },
    { id: '2', name: 'Jane Smith', avatar: 'https://via.placeholder.com/40' },
    { id: '3', name: 'Alice Johnson', avatar: 'https://via.placeholder.com/40' },
  ];

  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUserSelect = (e) => {
    const selectedUserId = e.target.value;
    const selectedUser = users.find((user) => user.id === selectedUserId);
    if (selectedUser) {
      setFormData((prev) => ({
        ...prev,
        assigned: {
          name: selectedUser.name,
          avatar: selectedUser.avatar,
        },
      }));
    }
  };

  const handleFormSubmit = async () => {
    try {
      const response = await apiClient.post('projects', formData);
      alert('Project created successfully!');
      setProjects((prev) => [...prev, response.data]); // Update the project list locally
      setOpen(false);
    } catch (err) {
      alert('Error creating project: ' + err.message);
    }
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img
              src="/path-to-your-logo.png"
              alt="Logo"
              style={{ height: 50 }}
            />
          </Box>
          <Button variant="contained" color="primary" onClick={handleModalOpen}>
            Create Project
          </Button>
        </Toolbar>
      </AppBar>
      <Modal open={open} onClose={handleModalClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" mb={2}>
            Create New Project
          </Typography>
          <TextField
            label="Project Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Key"
            name="key"
            value={formData.key}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Box mt={2}>
            <Typography>Select Assigned User</Typography>
            <Select
              value={users.find((user) => user.name === formData.assigned.name)?.id || ''}
              onChange={handleUserSelect}
              fullWidth
              displayEmpty
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 200, // Reduce dropdown height
                  },
                },
              }}
            >
              <MenuItem value="" disabled>
                Select a user
              </MenuItem>
              {users.map((user) => (
                <MenuItem key={user.id} value={user.id}>
                  <Box display="flex" alignItems="center">
                    <Avatar src={user.avatar} alt={user.name} sx={{ mr: 1, width: 24, height: 24 }} />
                    {user.name}
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </Box>
          <TextField
            label="Project Image (URL)"
            name="image"
            value={formData.image}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button variant="outlined" onClick={handleModalClose}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleFormSubmit}>
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default CustomAppBar;
