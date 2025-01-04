// import React from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Avatar,
//   Box,
//   Typography,
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { useProject } from '../../../data/Context/ProjectContext';

// const projectsData = [
//   {
//     id: 1,
//     name: 'Project A',
//     key: 'PROJ-A',
//     type: 'Web Development',
//     assigned: { name: 'Alice', avatar: 'https://images.squarespace-cdn.com/content/v1/6091c3e4f5f6071721c43f77/83c7930e-0a72-449e-99ed-12a97d0986c2/DSC00940-2.jpg' },
//     image: 'https://iconomator.com/wp-content/uploads/2020/03/ufo-three.png',
//   },
//   {
//     id: 2,
//     name: 'Project B',
//     key: 'PROJ-B',
//     type: 'Mobile App',
//     assigned: { name: 'Angela', avatar: 'https://images.squarespace-cdn.com/content/v1/592738c58419c2fe84fbdb81/1625504366201-WJ91GHMRTZUUDAE5BYC1/DBS_Amira_web_0037.jpg?format=500w' },
//     image: 'https://iconomator.com/wp-content/uploads/2020/03/UFO-two.png',
//   },
//   {
//     id: 3,
//     name: 'Project C',
//     key: 'PROJ-C',
//     type: 'UI/UX Design',
//     assigned: { name: 'Charlie', avatar: 'https://b1688923.smushcdn.com/1688923/wp-content/uploads/2022/06/Melbourne-Branding-Photography_professional_headshots-Huss-52-3-web.jpg?lossy=2&strip=1&webp=1' },
//     image: 'https://iconomator.com/wp-content/uploads/2020/03/Yin-Yang.png',
//   },
// ];

// const ProjectTable = () => {

//   const navigate = useNavigate();
//   const { setProject } = useProject();

//   const handleRowClick = (project) => {
//     setProject(project);
//     navigate('/dashboard');
//   };

//   return (
//     <TableContainer component={Paper} sx={{ boxShadow: 'none', borderRadius:'100', width: 'full', }}>
//       <Table>
//         <TableHead className='bg-black'>
//           <TableRow>
//             <TableCell sx={{color:'white', fontWeight: 'bold', fontSize:14}}>Name</TableCell>
//             <TableCell sx={{color:'white', fontWeight: 'bold', fontSize:14}}>Key</TableCell>
//             <TableCell sx={{color:'white', fontWeight: 'bold', fontSize:14}}>Type</TableCell>
//             <TableCell sx={{color:'white', fontWeight: 'bold', fontSize:14}}>Product Owner</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {projectsData.map((project) => (
//             <TableRow key={project.id} onClick={() => handleRowClick(project)}>
//               <TableCell>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                   <img
//                     src={project.image}
//                     alt={project.name}
//                     style={{ height: '50px', width: '50px', borderRadius: '8px' }}
//                   />
//                   <Typography variant="body1" fontWeight="bold">
//                     {project.name}
//                   </Typography>
//                 </Box>
//               </TableCell>
//               <TableCell>
//                 <Typography variant="body2" sx={{color:'blue',fontWeight:'semibold'}}>{project.key}</Typography>
//               </TableCell>
//               <TableCell>
//                 <Typography variant="body2">{project.type}</Typography>
//               </TableCell>
//               <TableCell>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   <Avatar src={project.assigned.avatar} alt={project.assigned.name} />
//                   <Typography variant="body2">{project.assigned.name}</Typography>
//                 </Box>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default ProjectTable;

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Box,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useProject } from '../../../data/Context/ProjectContext';

const projectsData = [
  {
    id: 1,
    name: 'Project A',
    key: 'PROJ-A',
    type: 'Web Development',
    assigned: { name: 'Alice', avatar: 'https://images.squarespace-cdn.com/content/v1/6091c3e4f5f6071721c43f77/83c7930e-0a72-449e-99ed-12a97d0986c2/DSC00940-2.jpg' },
    image: 'https://iconomator.com/wp-content/uploads/2020/03/ufo-three.png',
  },
  {
    id: 2,
    name: 'Project B',
    key: 'PROJ-B',
    type: 'Mobile App',
    assigned: { name: 'Angela', avatar: 'https://images.squarespace-cdn.com/content/v1/592738c58419c2fe84fbdb81/1625504366201-WJ91GHMRTZUUDAE5BYC1/DBS_Amira_web_0037.jpg?format=500w' },
    image: 'https://iconomator.com/wp-content/uploads/2020/03/UFO-two.png',
  },
  {
    id: 3,
    name: 'Project C',
    key: 'PROJ-C',
    type: 'UI/UX Design',
    assigned: { name: 'Charlie', avatar: 'https://b1688923.smushcdn.com/1688923/wp-content/uploads/2022/06/Melbourne-Branding-Photography_professional_headshots-Huss-52-3-web.jpg?lossy=2&strip=1&webp=1' },
    image: 'https://iconomator.com/wp-content/uploads/2020/03/Yin-Yang.png',
  },
];

const ProjectTable = () => {
  const navigate = useNavigate();
  const { setProject } = useProject();

  const handleRowClick = (project) => {
    setProject(project);
    navigate('/dashboard');
  };

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 1, boxShadow:'none' }}>
      <Table>
        <TableHead sx={{ backgroundColor: '#212121' }}>
          <TableRow>
            <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: 14, padding: '8px 16px' }}>
              Name
            </TableCell>
            <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: 14, padding: '8px 16px' }}>
              Key
            </TableCell>
            <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: 14, padding: '8px 16px' }}>
              Type
            </TableCell>
            <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: 14, padding: '8px 16px' }}>
              Product Owner
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projectsData.map((project) => (
            <TableRow
              key={project.id}
              onClick={() => handleRowClick(project)}
              sx={{
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                '&:hover': { backgroundColor: '#ffffff' },
                '&:last-child td': { borderBottom: 0 },
              }}
            >
              <TableCell sx={{ padding: '8px 16px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{ height: '40px', width: '40px', borderRadius: '6px' }}
                  />
                  <Typography variant="body2" fontWeight="bold" sx={{ color: '#424242' }}>
                    {project.name}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px' }}>
                <Typography variant="body2" sx={{ color: '#1E88E5', fontWeight: 'medium' }}>
                  {project.key}
                </Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px' }}>
                <Typography variant="body2" sx={{ color: '#757575' }}>
                  {project.type}
                </Typography>
              </TableCell>
              <TableCell sx={{ padding: '8px 16px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar src={project.assigned.avatar} alt={project.assigned.name} sx={{ width: 32, height: 32 }} />
                  <Typography variant="body2" sx={{ color: '#616161' }}>
                    {project.assigned.name}
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectTable;
