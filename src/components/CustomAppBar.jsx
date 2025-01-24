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
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';


const CustomAppBar = ({ setProjects }) => {
  const { user, setUser } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);
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

  const handleImageChange = (e) => {
   const file = e.target.file[0];
   if(file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev)=> ({
        ...prev,
        image: reader.result.split(',')[1],
      }));
    };
    reader.readAsDataURL(file);
   }
  }; 

  const handleFormSubmit = async () => {
    try {
      const response = await apiClient.post('projects', formData);
      alert('Project created successfully');
      setProjects((prev) => [...prev, response.data]);
      setFormData(defaultFormData);
      setOpen(false);
    } catch (err) {
      alert('Error creating project : ' + err.message);
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
              sx={{ backgroundColor:'#3B82F6',textTransform: 'none', fontSize: '14px' }}
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

      {/* <Dialog open={open} onClose={handleModalClose} maxWidth="md" fullWidth sx={{ backgroundColor: '' }}>

        <DialogTitle sx={{ backgroundColor: '#3B82F6', marginBottom: '18px', color: 'white' }}>Create new project</DialogTitle>

        <DialogContent>
          
          <div className='my-4'>
          <Typography variant='body2'>Select Assigned User*</Typography>
            <TextField
              label="Project Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{ width: '250px'}}
              margin="normal"
            />
          </div>
          <div className='my-4'>
          <Typography variant='body2'>Select Assigned User*</Typography>
            <TextField
              label="Key"
              name="key"
              value={formData.key}
              onChange={handleChange}
              sx={{ width: '250px'}}
              margin="normal"
            />
          </div>
          <div className='my-4'>
          <Typography variant='body2'>Select Assigned User*</Typography>
            <TextField
              label="Type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              sx={{ width: '250px'}}
              margin="normal"
            />
          </div>
          <div className='my-4'>
            <Box mt={2}>
              <Typography variant='body2'>Select Assigned User*</Typography>
              <Select
                value={users.find((user) => user.name === formData.assigned.name)?.id || ''}
                onChange={handleUserSelect}
                sx={{ width: '250px'}}
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
            </Box>
          </div>
          

          <Box mt={4}>
          <Typography variant='body2'>Select Assigned User*</Typography>
            <input type='file' accept='image/*' onChange={handleImageChange} style={{marginTop:'10px'}}/>
            {formData.image && <img src={`data:image/png;base64,${formData.image}`} alt="Project" className='w-100px' />}
          </Box>
          
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleFormSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog> */}

<Dialog open={open} onClose={handleModalClose} maxWidth="md" fullWidth>
  <DialogTitle sx={{ backgroundColor: '#3B82F6', marginBottom: '18px', color: 'white' }}>
    Create new project
  </DialogTitle>

  <DialogContent>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <div className='my-4'>
          <Typography variant='body2'>Select Assigned User*</Typography>
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
        <div className='my-4'>
          <Typography variant='body2'>Select Assigned User*</Typography>
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
        <div className='my-4'>
          <Typography variant='body2'>Select Assigned User*</Typography>
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
        <div className='my-6'>
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
          <Box
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
              <input hidden accept='' type='file' />
            </Button>
          </Box>
        </div>
      </Grid>
    </Grid>
  </DialogContent>

            

  <DialogActions>
    <Button variant="outlined" sx={{backgroundColor:''}} onClick={handleModalClose}>
      Cancel
    </Button>
    <Button variant="contained" sx={{backgroundColor:'#3B82F6'}} onClick={handleFormSubmit}>
      Submit
    </Button>
  </DialogActions>
</Dialog>


    </>
  );
};

export default CustomAppBar;
