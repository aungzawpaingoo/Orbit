import { Avatar, Select, TextField, Box, Button, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Divider, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import { Check, CheckBox, FileUpload, FileUploadOutlined, Upload, UploadFile } from '@mui/icons-material';

const BackLogOperationBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formValues, setFormValues] = useState({
    
    title: "",
    description: "",
    priority: "Low",
    status: "To Do",
    assignee: "",
    estimatedEffort: "",
    actualEffort: "",
    acceptanceCriteria: "",
    selectedLabels: [],
  });

  const handleChange = (field) => (event) => {
    const value = field === "selectedLabels" ? event.target.value : event.target.value;
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formValues);
    onClose();
  };

  const selectStyle = {
    marginRight: '8px',
    width: '150px',
    height: '40px',
    '.MuiSelect-select': {
      height: '40px',
    },
  };

  const mainAvatarImage = "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg";

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box className="bg-white w-full" display="flex" alignItems="center">
      {/* Search field */}
      <TextField
        sx={{
          marginRight: '16px',
          width: '260px',
          height: '40px',
          '& .MuiInputBase-root': {
            height: '40px',
          },
        }}
        type="search"
        placeholder="Search"
      />

      {/* Avatar */}
      <Box sx={{ marginRight: '16px' }}>
        <Avatar src={mainAvatarImage} sx={{ width: '40px', height: '40px' }} />
      </Box>

      {/* Dropdowns */}
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {[1, 2, 3, 4].map((_, index) => (
          <Select key={index} sx={selectStyle}>
            <MenuItem value={index + 1}>Option {index + 1}</MenuItem>
          </Select>
        ))}
      </Box>

      {/* Create Button */}
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

      {/* Modal */}
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="md" fullWidth sx={{ backgroundColor: '' }}>
        <DialogTitle sx={{ backgroundColor: '#3B82F6', marginBottom: '18px', color: 'white' }}>Create</DialogTitle>
        <DialogContent>

          <Typography variant='body2' color='gray'>Required fields are marked with an asterisk *</Typography>

          <div className='my-8'>
            <Typography variant='body2' sx={{ color: 'black', marginBottom: '6px' }}>Backlog Title*</Typography>
            <TextField
              placeholder='Enter title of the backlog you want to create'
              color='black'
              sx={{ width: '400px', height: '40px' }} />
          </div>

          <div className='my-8'>
            <Typography variant='body2' sx={{ color: 'black', marginBottom: '6px' }}>Backlog Description*</Typography>
            <TextField
              placeholder='Enter description you want to create'
              color='black'
              sx={{ width: '500px', height: '40px' }} />
          </div>

          <div className='mt-12 mb-6'>
            <Divider />
          </div>

          <div className='my-6'>
            <Typography variant='body2' sx={{ color: 'black', marginBottom: '6px' }}>Status*</Typography>
            <Select
              value={''}
              color='black'
              sx={{ width: '250px', height: '40px' }} displayEmpty
              renderValue={(selected) => {
                if (!selected) {
                  return <span style={{ fontSize: "12px", color: "black" }}>Select Status Type</span>;
                }
                return selected;
              }}>
              <MenuItem value="" disabled>
                Select Status
              </MenuItem>
            </Select>
            <Typography variant='body2' color='gray' sx={{ marginTop: '2px' }}>This is the initial priority upon creation</Typography>
          </div>

          <div className='my-6'>
            <Typography variant='body2' sx={{ color: 'black', marginBottom: '6px' }}>Priority*</Typography>
            <Select
              value={''}
              color='black'
              sx={{ width: '250px', height: '40px' }} displayEmpty
              renderValue={(selected) => {
                if (!selected) {
                  return <span style={{ fontSize: "12px", color: "black" }}>Select Priority</span>;
                }
                return selected;
              }}>
              <MenuItem value="" disabled>
                Select Priority
              </MenuItem>
            </Select>
            <Typography variant='body2' color='gray' sx={{ marginTop: '2px' }}>This is the initial status upon creation</Typography>
          </div>

         

          <div className='my-6'>
            <Typography variant='body2' sx={{ color: 'black', marginBottom: '6px' }}>Assignee</Typography>
            <Select
              value={''}
              color='black'
              sx={{ width: '250px', height: '40px' }} displayEmpty
              renderValue={(selected) => {
                if (!selected) {
                  return <span style={{ fontSize: "12px", color: "black" }}>Select Assignee</span>;
                }
                return selected;
              }}>
              <MenuItem value="" disabled>
                Select Assignee
              </MenuItem>
            </Select>
            <Button variant='text' size='medium' color='primary' sx={{ marginTop: '2px', textTransform: 'none' }}>Assigned To Me</Button>
          </div>

          <div className='my-6'>
            <Typography variant='body2' sx={{ color: 'black', marginBottom: '6px' }}>Labels</Typography>
            <Select
              value={''}
              color='black'
              sx={{ width: '250px', height: '40px' }} displayEmpty
              renderValue={(selected) => {
                if (!selected) {
                  return <span style={{ fontSize: "12px", color: "black" }}>Select Labels</span>;
                }
                return selected;
              }}>
              <MenuItem value="" disabled>
                Select Labels
              </MenuItem>
            </Select>
          </div>

          <div className='my-8'>
            <Typography variant='body2' sx={{ color: 'black', marginBottom: '6px' }}>Estimated Effort Time From</Typography>
            <TextField
            placeholder='Estimated Effort'
            type='time'
            sx={{ width: '250px', height: '40px' }}/>
           
          </div>

          <div className='my-8'>
            <Typography variant='body2' sx={{ color: 'black', marginBottom: '6px' }}>Estimated Effort Time To</Typography>
            <TextField
            placeholder='Estimated Effort'
            type='time'
            sx={{ width: '250px', height: '40px' }}/>
            
          </div>



          <div className='my-6'>
            <Typography variant='body2' sx={{ color: 'black', marginBottom: '6px' }}>Team</Typography>
            <Select
              value={''}
              color='black'
              sx={{ width: '250px', height: '40px' }} displayEmpty
              renderValue={(selected) => {
                if (!selected) {
                  return <span style={{ fontSize: "12px", color: "black" }}>Select Team</span>;
                }
                return selected;
              }}>
              <MenuItem value="" disabled>
                Select Project
              </MenuItem>
            </Select>
            <Typography variant='body2' color='gray' sx={{ marginTop: '2px' }}>Associates a team to an issue. You can use this field to search and filter issues by team.
            </Typography>
          </div>

          <div className='my-6'>
            <Typography variant='body2' sx={{ color: 'black', marginBottom: '6px' }}>Reporter*</Typography>
            <Select
              value={''}
              color='black'
              sx={{ width: '250px', height: '40px' }} displayEmpty
              renderValue={(selected) => {
                if (!selected) {
                  return <span style={{ fontSize: "12px", color: "black" }}>Select Project</span>;
                }
                return selected;
              }}>
              <MenuItem value="" disabled>
                Select Project
              </MenuItem>
            </Select>
          </div>


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


        




        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} variant='outlined'>Close</Button>
          <Button onClick={handleCloseModal} variant='contained' sx={{ backgroundColor: '#3B82F6' }}>Create</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BackLogOperationBar;
