import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import AppBarIcon from '../assets/LogoWithTextAlign.png';
import NotificationIcon from '../assets/bell (1).png';
import HelpIcon from '../assets/interrogation (2).png';
import SettingsIcon from '../assets/settings (1).png';
import { UserContext } from '../data/Context/UserContext';
import { getAuth, signOut } from 'firebase/auth';
import apiClient from '../api/apiClient';
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grid2, Modal, Select } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const CustomAppBar = ({ setProjects }) => {
  const { user, setUser } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    key: '',
    type: '',
    startDate:'',
    endDate:'',
    assigned: { name: '', avatar: '' },
    image: '',
  });

  const users = [
    { id: '1', name: 'John Doe', avatar: 'https://via.placeholder.com/40' },
    { id: '2', name: 'Jane Smith', avatar: 'https://via.placeholder.com/40' },
    { id: '3', name: 'Alice Johnson', avatar: 'https://via.placeholder.com/40' },
    { id: '4', name: 'Zaw Paing', avatar: 'https://via.placeholder.com/40' },
  ];

  const handleModalOpen = () => {
    setFormData(defaultFormData);
    setOpen(true);
  }

  const handleModalClose = () => {
    setFormData(defaultFormData);
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const defaultFormData = {
    name: '',
    key: '',
    type: '',
    startDate:'',
    endDate:'',
    assigned: { name: '', avatar: '' },
    image: '',
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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(event.target.files[0]);
    if (file) {
      setFormData({
        ...formData,
        image: {
          file,
          preview: URL.createObjectURL(file),
        }
      });
    }
  };

  const handleRemoveImage = () => {
    if (formData.image?.preview) {
      URL.revokeObjectURL(formData.image.preview);
    }
    setFormData({
      ...formData,
      image: null,
    });
  };

  // const handleFormSubmit = async () => {
  //   try {
  //     const response = await apiClient.post('projects', formData);
  //     alert('Project created successfully');
  //     setProjects((prev) => [...prev, response.data]);
  //     setFormData(defaultFormData);
  //     setOpen(false);

  //   } catch (err) {
  //     alert('Error creating project : ' + err.message);
  //   }
  // };

  const handleFormSubmit = async () => {
    try {
      
      const data = new FormData();
      data.append('name', formData.name);
      data.append('key', formData.key);
      data.append('type', formData.type);
      data.append('startDate',new Date(formData.startDate).toISOString());
      data.append('endDate', new Date(formData.endDate).toISOString());
      data.append('assigned', JSON.stringify(formData.assigned));
      if (formData.image?.file) {
        data.append('image', formData.image.file); 
      }
console.log(formData);
      const response = await apiClient.post('projects', data);
      console.log('Project created:', response.data);
      setFormData(defaultFormData);
      setOpen(false);
      console.log('FormData Preview:');
      for (let [key, value] of data.entries()) {
        console.log(`${key}:`, value); 
      }
  
      
    } catch (err) {
      alert('Error creating project: ' + err.message);
    }
  };


  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    console.log('Profile clicked');
    handleMenuClose();
  };

  const handleThemeClick = () => {
    console.log('Theme clicked');
    handleMenuClose();
  };

  const handleLogoutClick = () => {
    handleMenuClose();

    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert('User signed out successfully.');
        setUser(null);
        window.location.href = '/';
      })
      .catch((error) => {
        console.error('Error signing out:', error);
        alert('Error signing out:', error);
      });
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'white', padding: 0, boxShadow: 'none', borderBottom: '1px solid lightgray' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box>
            <img
              src={AppBarIcon}
              alt="App Bar"
              style={{ height: '60px', width: '170px', objectFit: 'cover' }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Search"
              sx={{ backgroundColor: 'white', borderRadius: '4px', width: '200px' }}
            />
            <TextField
              select
              size="small"
              variant="outlined"
              sx={{ backgroundColor: 'white', borderRadius: '4px', width: '150px' }}
              defaultValue=""
            >
              <MenuItem value="">Option 1</MenuItem>
              <MenuItem value="2">Option 2</MenuItem>
              <MenuItem value="3">Option 3</MenuItem>
            </TextField>
            <Button
              variant="contained"
              size="medium"
              sx={{ backgroundColor: '#3B82F6', textTransform: 'none', fontSize: '14px' }}
              onClick={handleModalOpen}
            >
              Create Project
            </Button>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <img
                  src={NotificationIcon}
                  alt="Notifications"
                  style={{ height: '18px', width: '18px' }}
                />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <img
                src={HelpIcon}
                alt="Help"
                style={{ height: '18px', width: '18px' }}
              />
            </IconButton>
            <IconButton color="inherit">
              <img
                src={SettingsIcon}
                alt="Settings"
                style={{ height: '18px', width: '18px' }}
              />
            </IconButton>
            <IconButton onClick={handleMenuOpen}>
              <Avatar
                alt="User Profile"
                src={user.photoURL}
                sx={{
                  border: '2px solid white',
                  borderRadius: '50%',
                }}
              />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              PaperProps={{
                sx: {
                  width: '300px',
                  backgroundColor: 'white',
                  color: 'black',
                  borderRadius: '6px',
                  padding: '4px',
                },
              }}
            >
              <Box
                sx={{
                  padding: 1,
                  backgroundColor: 'white',
                  borderRadius: '0px',
                  fontFamily: 'Roboto, sans-serif',
                }}
              >
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  sx={{ fontSize: '12px', color: '#444', marginBottom: 1 }}
                >
                  Account Information
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Avatar
                    alt="User Profile"
                    src={user.photoURL}
                    sx={{
                      width: '35px',
                      height: '35px',
                      marginTop: '10px',
                      marginBottom: '10px',
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight="semibold"
                      sx={{ fontSize: '13.5px', color: '#222' }}
                    >
                      {user.displayName}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: '11.5px', color: '#666', marginTop: '2px' }}
                    >
                      {user.email}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <MenuItem
                onClick={handleProfileClick}
                sx={{
                  fontSize: '14px',
                  color: '#555',
                  fontFamily: 'Roboto, sans-serif',
                  '&:hover': { backgroundColor: 'white' },
                  marginTop: '5px',
                  marginBottom: '5px',
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={handleThemeClick}
                sx={{
                  fontSize: '14px',
                  color: '#555',
                  fontFamily: 'Roboto, sans-serif',
                  '&:hover': { backgroundColor: 'white' },
                  marginTop: '5px',
                  marginBottom: '5px',
                }}
              >
                Theme
              </MenuItem>
              <MenuItem
                onClick={handleLogoutClick}
                sx={{
                  fontSize: '14px',
                  color: '#555',
                  fontFamily: 'Roboto, sans-serif',
                  '&:hover': { backgroundColor: 'white' },
                  marginTop: '5px',
                  marginBottom: '5px',
                }}
              >
                Logout
              </MenuItem>


            </Menu>
          </Box>
        </Toolbar>
      </AppBar>


      <Dialog open={open} onClose={handleModalClose} maxWidth="md" fullWidth>
        <DialogTitle sx={{ backgroundColor: '#3B82F6', marginBottom: '18px', color: 'white' }}>
          Create new project
        </DialogTitle>

        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <div className='my-1'>
                <Typography variant='body2'>Enter project name*</Typography>
                <TextField
                  label="Project Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{ width: '100%' }}
                  margin="normal"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className='my-1'>
                <Typography variant='body2'>Enter unique key for project*</Typography>
                <TextField
                  label="Key"
                  name="key"
                  value={formData.key}
                  onChange={handleChange}
                  sx={{ width: '100%' }}
                  margin="normal"
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className='my-1'>
                <Typography variant='body2'>Select project start date*</Typography>
                <TextField
                  name="startDate"
                  type='date'
                  value={formData.startDate}
                  onChange={handleChange}
                  sx={{ width: '100%' }}
                  margin="normal"
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className='my-1'>
                <Typography variant='body2'>Select project end date*</Typography>
                <TextField
                  name="endDate"
                  type='date'
                  value={formData.endDate}
                  onChange={handleChange}
                  sx={{ width: '100%' }}
                  margin="normal"
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className='my-1'>
                <Typography variant='body2'>Enter project type*</Typography>
                <TextField
                  label="Type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  sx={{ width: '100%' }}
                  margin="normal"
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className='my-3'>
                <Typography variant='body2'>Select Assigned User*</Typography>
                <Select
                  value={users.find((user) => user.name === formData.assigned.name)?.id || ''}
                  onChange={handleUserSelect}
                  sx={{ width: '100%', marginTop: '8px' }}
                  displayEmpty
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 200,
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
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className='my-6'>
                <Typography variant='body2' sx={{ color: 'black', marginBottom: '6px' }}>Attachments</Typography>
                {formData.image && formData.image.preview ?
                  (<Box
                    sx={{
                      marginTop: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        display: 'inline-block',
                      }}
                    >
                      <img
                        src={formData.image.preview}
                        alt="Uploaded"
                        style={{
                          maxWidth: '100%',
                          maxHeight: '200px',
                          borderRadius: '8px',
                          border: '1px solid grey',
                        }}
                      />
                      <IconButton
                        aria-label="remove image"
                        onClick={handleRemoveImage}
                        sx={{
                          position: "absolute",
                          height: "22px",
                          width: "22px",
                          top: "8px",
                          right: "8px",
                          backgroundColor: "white",
                          color: "black",
                          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                          "&:hover": {
                            backgroundColor: "white",
                          },
                        }}
                      >
                        <CloseIcon sx={{ height: '20px', width: '20px' }} />
                      </IconButton>
                    </Box>
                  </Box>)
                  :
                  (<Box
                    sx={{
                      border: '2px dashed grey',
                      borderRadius: '8px',
                      padding: '16px',
                      textAlign: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <Typography variant='body2' sx={{ marginBottom: '10px' }}>Drag and drop files here or click to upload</Typography>
                    <Button variant='outlined' component='label'>
                      Upload File
                      <input hidden accept='image/*' type='file' onChange={handleImageChange} />
                    </Button>
                  </Box>)}
              </div>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" sx={{ backgroundColor: '' }} onClick={handleModalClose}>
            Cancel
          </Button>
          <Button variant="contained" sx={{ backgroundColor: '#3B82F6' }} onClick={handleFormSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CustomAppBar;
