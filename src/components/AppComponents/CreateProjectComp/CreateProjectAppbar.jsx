import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const CreateProjectAppbar = ({ onBackToProject }) => {

  

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', padding: 0, boxShadow: 'none', borderBottom: '1px solid lightgray' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Button 
          variant="text" 
          color="primary" 
          onClick={onBackToProject}
          startIcon={<ArrowBackIcon/>}
          sx={{ textTransform: 'none', fontSize: '14px', fontWeight: 'semibold' }}
        >
          Back to Template
        </Button>

        
      </Toolbar>
    </AppBar>
  );
};

export default CreateProjectAppbar;
