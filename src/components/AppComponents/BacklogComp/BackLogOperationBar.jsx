// import { Avatar, Select, TextField, Box, Button, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import React, { useState } from 'react';

// const BackLogOperationBar = ({ btnClick }) => {
//   const selectStyle = {
//     marginRight: '8px',
//     width: '150px',
//     height: '40px',
//     '.MuiSelect-select': {
//       height: '40px',
//     },
//   };

//   const selects = [1, 2, 3, 4];

//   const [openModal, setOpenModal] = useState(false);
//   const [taskName, setTaskName] = useState('');
//   const [priority, setPriority] = useState('');
//   const [status, setStatus] = useState('');
//   const [assignee, setAssignee] = useState('');
//   const [dueDate, setDueDate] = useState('');
//   const [estimatedHours, setEstimatedHours] = useState('');
//   const [formError, setFormError] = useState('');

//   const assignees = [
//     { name: 'John Doe', avatar: 'https://images.squarespace-cdn.com/content/v1/54ab66dee4b0da465dd06039/1476559947089-11G8JA4HI2NYQUNDXYND/Justin+Wilson9075.jpg' },
//     { name: 'Jane Smith', avatar: 'https://static.vecteezy.com/system/resources/thumbnails/044/045/851/small_2x/portrait-of-a-smiling-business-woman-in-white-background-photo.jpg' }
//   ];

//   const handleOpenModal = () => setOpenModal(true);
//   const handleCloseModal = () => {
//     setOpenModal(false);
//     // Reset form fields
//     setTaskName('');
//     setPriority('');
//     setStatus('');
//     setAssignee('');
//     setDueDate('');
//     setEstimatedHours('');
//     setFormError('');
//   };

//   const handleFormSubmit = () => {
//     if (!taskName || !priority || !status || !assignee || !dueDate || !estimatedHours) {
//       setFormError('All fields are required!');
//       return;
//     }

//     console.log({
//       taskName,
//       priority,
//       status,
//       assignee,
//       dueDate,
//       estimatedHours,
//     });

//     handleCloseModal(); // Close the modal and reset the form
//   };

//   return (
//     <Box className="bg-white w-full" display="flex" alignItems="center">
//       <TextField
//         sx={{
//           marginRight: '16px',
//           width: '260px',
//           height: '40px',
//           '& .MuiInputBase-root': {
//             height: '40px',
//           },
//         }}
//         type='search'
//         placeholder='Search'
//       />

//       <Box sx={{ marginRight: '16px' }}>
//         <Avatar sx={{ width: '40px', height: '40px' }} />
//       </Box>

//       <Box display="flex">
//         {selects.map((_, index) => (
//           <Select key={index} sx={selectStyle} />
//         ))}
//       </Box>

//       <Button
//         onClick={handleOpenModal}
//         variant="contained"
//         startIcon={<AddIcon />}
//         sx={{
//           color: 'white',
//           textTransform: 'none',
//           backgroundColor: '#3B82F6',
//           '&:hover': {
//             backgroundColor: '#2563EB',
//           },
//         }}
//       >
//         Create
//       </Button>

//       <Dialog open={openModal} onClose={handleCloseModal} maxWidth="sm" fullWidth>
//         <DialogTitle>Create Task</DialogTitle>
//         <DialogContent className="space-y-4">
//           {formError && (
//             <Box className="text-red-500 text-sm">{formError}</Box>
//           )}

//           <TextField
//             label="Task Name"
//             fullWidth
//             variant="outlined"
//             value={taskName}
//             onChange={(e) => setTaskName(e.target.value)}
//             required
//           />

//           <FormControl fullWidth required>
//             <InputLabel>Priority</InputLabel>
//             <Select
//               value={priority}
//               onChange={(e) => setPriority(e.target.value)}
//               label="Priority"
//             >
//               <MenuItem value="Low">Low</MenuItem>
//               <MenuItem value="Medium">Medium</MenuItem>
//               <MenuItem value="High">High</MenuItem>
//             </Select>
//           </FormControl>

//           <FormControl fullWidth required>
//             <InputLabel>Status</InputLabel>
//             <Select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               label="Status"
//             >
//               <MenuItem value="Todo">Todo</MenuItem>
//               <MenuItem value="In Progress">In Progress</MenuItem>
//               <MenuItem value="Completed">Completed</MenuItem>
//             </Select>
//           </FormControl>

//           <FormControl fullWidth required>
//             <InputLabel>Assignee</InputLabel>
//             <Select
//               value={assignee}
//               onChange={(e) => setAssignee(e.target.value)}
//               label="Assignee"
//             >
//               {assignees.map((assigneeData, index) => (
//                 <MenuItem key={index} value={assigneeData.name}>
//                   <Avatar sx={{ width: '24px', height: '24px', marginRight: '8px' }} src={assigneeData.avatar} />
//                   {assigneeData.name}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           <TextField
//             label="Due Date"
//             fullWidth
//             type="date"
//             value={dueDate}
//             onChange={(e) => setDueDate(e.target.value)}
//             InputLabelProps={{ shrink: true }}
//             required
//           />

//           <TextField
//             label="Estimated Hours"
//             fullWidth
//             type="time"
//             value={estimatedHours}
//             onChange={(e) => setEstimatedHours(e.target.value)}
//             InputLabelProps={{ shrink: true }}
//             required
//           />
//         </DialogContent>

//         <DialogActions>
//           <Button
//             onClick={handleCloseModal}
//             color="secondary"
//             startIcon={<AddIcon />}
//             variant="outlined"
//           >
//             Cancel
//           </Button>

//           <Button
//             onClick={handleFormSubmit}
//             color="primary"
//             startIcon={<AddIcon />}
//             variant="contained"
//             sx={{
//               textTransform: 'none',
//               backgroundColor: '#3B82F6',
//               '&:hover': {
//                 backgroundColor: '#2563EB',
//               },
//             }}
//           >
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default BackLogOperationBar;



import { Avatar, Select, TextField, Box, Button, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';

const BackLogOperationBar = ({ addTask }) => {
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
        <Avatar sx={{ width: '40px', height: '40px' }} />
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
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="sm" fullWidth>
        <DialogTitle>Create Task</DialogTitle>
        <DialogContent className="space-y-4">
          {formError && (
            <Box className="text-red-500 text-sm">{formError}</Box>
          )}

          <TextField
            label="Task Name"
            fullWidth
            variant="outlined"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />

          <FormControl fullWidth required>
            <InputLabel>Priority</InputLabel>
            <Select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              label="Priority"
            >
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth required>
            <InputLabel>Status</InputLabel>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              label="Status"
            >
              <MenuItem value="Todo">Todo</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth required>
            <InputLabel>Assignee</InputLabel>
            <Select
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              label="Assignee"
            >
              {assignees.map((person) => (
                <MenuItem key={person.name} value={person.name}>
                  <Avatar src={person.avatar} sx={{ width: 24, height: 24, marginRight: 1 }} />
                  {person.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Due Date"
            type="date"
            fullWidth
            variant="outlined"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            label="Estimated Hours"
            type="time"
            fullWidth
            variant="outlined"
            value={estimatedHours}
            onChange={(e) => setEstimatedHours(e.target.value)}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">Cancel</Button>
          <Button onClick={handleFormSubmit} color="primary">Create</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BackLogOperationBar;
