// import React, { useContext, useState } from 'react';
// import CustomAppBar from '../components/CustomAppBar';
// import ProjectTable from '../components/AppComponents/ProjectsComp/ProjectTable';
// import { Box, Modal, Typography, TextField, Select, MenuItem, Button, Avatar, Icon } from '@mui/material';
// import { UserContext } from '../data/Context/UserContext';
// import axios from 'axios';

// const Projects = () => {
//   const { user } = useContext(UserContext);

//   const [open, setOpen] = useState(false);
//   const [formValues, setFormValues] = useState({
//     name: '',
//     key: '',
//     type: '',
//     assignedName: '',
//     avatar: '',
//     image: '',
//   });
//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => {
//     setFormValues({ name: '', key: '', type: '', assignedName: '', avatar: '', image: '' });
//     setErrors({});
//     setOpen(false);
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formValues.name) newErrors.name = 'Project Name is required';
//     if (!formValues.key) newErrors.key = 'Project Key is required';
//     if (!formValues.type) newErrors.type = 'Project Type is required';
//     if (!formValues.assignedName) newErrors.assignedName = 'Product Owner is required';
//     if (!formValues.avatar) newErrors.avatar = 'Avatar is required';
//     if (!formValues.image) newErrors.image = 'Image is required';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate the form before proceeding
//     if (!validateForm()) return;

//     const projectData = {
//       name: formValues.name,
//       key: formValues.key,
//       type: formValues.type,
//       assigned: {
//         name: formValues.assignedName,
//         avatar: formValues.avatar,
//       },
//       image: formValues.image,
//     };

//     try {
//       const response = await axios.post('http://localhost:5000/api/projects', projectData);
//       alert('Project Created Successfully');
//       console.log('Response:', response.data);
//       setFormValues({
//         name: '',
//         key: '',
//         type: '',
//         assignedName: '',
//         avatar: '',
//         image: '',
//       });
//       handleClose();
//     } catch (error) {
//       console.error('Error creating project:', error.response?.data?.error || error.message);
//       alert('Failed to create project. Please try again.');
//     }
//   };

//   return (
//     <div className=''>
//       <CustomAppBar onCreateProject={handleOpen} />

//       <div className='px-10 pt-5 pb-10 bg-white'>

//         <div className='mt-3 mb-3'>

//           <h1 className='font-bold text-2xl font-sans mb-2'>Welcome back, {user?.displayName}</h1>

//           <h2 className='font-normal ml-1 text-sm font-sans'>What would you like to do with your projects today!</h2>

//         </div>

//         <Box sx={{ padding: 0, width: 'full' }}>
//           <ProjectTable />
//         </Box>

//       </div>

//       {/* Modal for Create Project */}
//       <Modal open={open} onClose={handleClose}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 500,
//             bgcolor: 'background.paper',
//             borderRadius: '8px',
//             boxShadow: 24,
//             p: 4,
//           }}
//         >
//           <Typography variant="h6" component="h2" sx={{ marginBottom: 3 }}>
//             Create Project
//           </Typography>
//           <form noValidate autoComplete="off">
//             <TextField
//               fullWidth
//               label="Project Name"
//               variant="outlined"
//               name="name"
//               value={formValues.name}
//               onChange={handleInputChange}
//               error={!!errors.name}
//               helperText={errors.name}
//               sx={{ marginBottom: 3 }}
//             />
//             <TextField
//               fullWidth
//               label="Project Key"
//               variant="outlined"
//               name="key"
//               value={formValues.key}
//               onChange={handleInputChange}
//               error={!!errors.key}
//               helperText={errors.key}
//               sx={{ marginBottom: 3 }}
//             />
//             <Select
//               fullWidth
//               variant="outlined"
//               name="type"
//               value={formValues.type}
//               onChange={handleInputChange}
//               error={!!errors.type}
//               displayEmpty
//               sx={{ marginBottom: 3 }}
//             >
//               <MenuItem value="" disabled>Select Project Type</MenuItem>
//               <MenuItem value="Type1">Type 1</MenuItem>
//               <MenuItem value="Type2">Type 2</MenuItem>
//               <MenuItem value="Type3">Type 3</MenuItem>
//             </Select>
//             <TextField
//               fullWidth
//               label="Product Owner"
//               variant="outlined"
//               name="assignedName"
//               value={formValues.assignedName}
//               onChange={handleInputChange}
//               error={!!errors.assignedName}
//               helperText={errors.assignedName}
//               sx={{ marginBottom: 3 }}
//             />
//             <TextField
//               fullWidth
//               label="Avatar"
//               variant="outlined"
//               name="avatar"
//               value={formValues.avatar}
//               onChange={handleInputChange}
//               error={!!errors.avatar}
//               helperText={errors.avatar}
//               sx={{ marginBottom: 3 }}
//             />
//             <TextField
//               fullWidth
//               label="Project Image URL"
//               variant="outlined"
//               name="image"
//               value={formValues.image}
//               onChange={handleInputChange}
//               error={!!errors.image}
//               helperText={errors.image}
//               sx={{ marginBottom: 3 }}
//             />
//             <Box display="flex" justifyContent="flex-end" sx={{ marginTop: 2, gap: 2 }}>
//               <Button variant="contained" color="primary" onClick={handleSubmit}>
//                 Submit
//               </Button>
//               <Button variant="outlined" color="secondary" onClick={handleClose}>
//                 Cancel
//               </Button>
//             </Box>
//           </form>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default Projects;


import React, { useContext, useState } from 'react';
import CustomAppBar from '../components/CustomAppBar';
import ProjectTable from '../components/AppComponents/ProjectsComp/ProjectTable';
import { Box, Modal, Typography, TextField, Select, MenuItem, Button, Avatar, Icon } from '@mui/material';
import { UserContext } from '../data/Context/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [projects,setProjects] = useState('');

  const [open, setOpen] = useState(false);
  
  const handleCreateProject =() => {
      alert('Clicked')
  };


  return (
    <div className=''>
      <CustomAppBar setProjects={setProjects} />

      <div className='px-10 pt-5 pb-10 bg-white'>

        <div className='mt-3 mb-3'>

          <h1 className='font-bold text-2xl font-sans mb-2'>Welcome back, {user?.displayName}</h1>

          <h2 className='font-normal ml-1 text-sm font-sans'>What would you like to do with your projects today!</h2>

        </div>

        <Box sx={{ padding: 0, width: 'full' }}>
          <ProjectTable />
        </Box>

      </div>

     
    </div>
  );
};

export default Projects;
