import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import AppBarIcon from '../assets/LogoWithTextAlign.png';
import NotificationIcon from '../assets/bell (1).png';
import HelpIcon from '../assets/interrogation (2).png';
import SettingsIcon from '../assets/settings (1).png';

const CustomAppBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', padding: 0, boxShadow:'none', borderBottomColor:'lightgray', borderWidth:1 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box>
          <img 
            src={AppBarIcon} 
            alt="App Bar" 
            style={{ height: '60px', width: '120px', objectFit: 'cover' }} 
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
            color="primary"
            size="small"
            sx={{ textTransform: 'none', fontSize: '14px' }}
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
          <Avatar
            alt="User"
            src="user-profile-url.png"
            sx={{
              border: '2px solid white',
              borderRadius: '50%',
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
