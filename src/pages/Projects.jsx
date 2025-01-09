import React, { useContext, useState } from 'react';
import CustomAppBar from '../components/CustomAppBar';
import ProjectTable from '../components/AppComponents/ProjectsComp/ProjectTable';
import { Box, Modal, Typography, TextField, Select, MenuItem, Button, Avatar, Icon } from '@mui/material';
import TitleBreadCrump from '../components/AppComponents/CommonComp/TitleBreadCrump';
import { UserContext } from '../data/Context/UserContext';

const Projects = () => {

  const { user } = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    projectName: '',
    projectKey: '',
    projectType: '',
    productOwner: '',
  });
  const [errors, setErrors] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setFormValues({ projectName: '', projectKey: '', projectType: '', productOwner: '' });
    setErrors({});
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.projectName) newErrors.projectName = 'Project Name is required';
    if (!formValues.projectKey) newErrors.projectKey = 'Project Key is required';
    if (!formValues.projectType) newErrors.projectType = 'Project Type is required';
    if (!formValues.productOwner) newErrors.productOwner = 'Product Owner is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert('Project Created Successfully');
      handleClose();
    }
  };

  return (
    <div className=''>
      <CustomAppBar onCreateProject={handleOpen} />
      <div className='px-10 bg-white'>
        <div className='py-5'>
          
          {/* <TitleBreadCrump titleOne={"All Projects"} titleTwo={"Table View"} titleThree={"Project Lists"} /> */}
          <h1 className='font-bold text-2xl font-sans'>Welcome back, {user?.displayName}</h1>
        </div>
        
        <Box sx={{ padding: 0, width: 'full' }}>
          <ProjectTable />
        </Box>
      </div>

      {/* Modal for Create Project */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: 'background.paper',
            borderRadius: '8px',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2" sx={{marginBottom:3}}>
            Create Project
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Project Name"
              variant="outlined"
              name="projectName"
              value={formValues.projectName}
              onChange={handleChange}
              error={!!errors.projectName}
              helperText={errors.projectName}
              sx={{marginBottom:3}}
            />
            <TextField
              fullWidth
              label="Project Key"
              variant="outlined"
              name="projectKey"
              value={formValues.projectKey}
              onChange={handleChange}
              error={!!errors.projectKey}
              helperText={errors.projectKey}
              sx={{marginBottom:3}}
            />
            <Select
              fullWidth
              variant="outlined"
              name="projectType"
              value={formValues.projectType}
              onChange={handleChange}
              error={!!errors.projectType}
              displayEmpty
              sx={{marginBottom:3}}
            >
              <MenuItem value="" disabled>
                Select Project Type
              </MenuItem>
              <MenuItem value="Type1">Type 1</MenuItem>
              <MenuItem value="Type2">Type 2</MenuItem>
              <MenuItem value="Type3">Type 3</MenuItem>
            </Select>
            <Select
              fullWidth
              variant="outlined"
              name="productOwner"
              value={formValues.productOwner}
              onChange={handleChange}
              error={!!errors.productOwner}
              displayEmpty
              sx={{marginBottom:3}}
            >
              <MenuItem value="" disabled>
                Select Product Owner
              </MenuItem>
              <MenuItem value="Owner1">
                <Box display="flex" alignItems="center">
                  <Avatar alt="Owner 1" src="/path/to/image1.jpg" className="mr-2" />
                  Owner 1
                </Box>
              </MenuItem>
              <MenuItem value="Owner2">
                <Box display="flex" alignItems="center">
                  <Avatar alt="Owner 2" src="/path/to/image2.jpg" className="mr-2" />
                  Owner 2
                </Box>
              </MenuItem>
            </Select>
            <Box display="flex" justifyContent="flex-end" sx={{ marginTop: 2, gap: 2 }}>
              <Button variant="contained" color="primary" onClick={handleSubmit} >
                Submit
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleClose} >
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Projects;
