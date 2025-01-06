import { Avatar, Select, TextField, Box, Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const DataFilterBar = ({btnClick}) => {
  const selectStyle = {
    marginRight: '8px',
    width: '150px',
    height: '40px',  // Increased height
    '.MuiSelect-select': {
      height: '40px', // Increased internal dropdown height
    },
  };

  const selects = [1, 2, 3, 4];

  return (
    <Box className="bg-white w-full" display="flex" alignItems="center">
      <TextField
        sx={{
          marginRight: '16px',
          width: '260px',
          height: '40px',  // Increased height
          '& .MuiInputBase-root': {
            height: '40px',  // Increased internal height
          },
        }}
        type='search'
        placeholder='Search'
      />

      <Box sx={{ marginRight: '16px' }}>
        <Avatar sx={{ width: '40px', height: '40px' }} />  {/* Optional, adjusted avatar size */}
      </Box>

      <Box display="flex">
        {selects.map((_, index) => (
          <Select key={index} sx={selectStyle} />
        ))}
      </Box>

      {/* <Button
        onClick={btnClick}
        variant="contained"
        startIcon={<AddIcon />}
        sx={{
          color:'white',
          textTransform: 'none', 
          backgroundColor: '#3B82F6',
          '&:hover': {
            backgroundColor: '#2563EB', 
          }
        }}
      >
        Create
      </Button> */}

    </Box>
  )
}

export default DataFilterBar
