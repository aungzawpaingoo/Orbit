// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Tab } from '@mui/material';
// import apiClient from '../../../api/apiClient';

// export default function BacklogDataTable({ projectId }) {
//   const [backlogs, setBacklogs] = useState([]);

//   useEffect(() => {
//     const fetchBacklogs = async () => {
//       try {
//         const response = await apiClient.get(`/projects/${projectId}/backlogs`);
//         setBacklogs(response.data);
//       } catch (error) {
//         console.error('Error fetching backlogs:', error.message);
//       }
//     };

//     fetchBacklogs();
//   }, [projectId]);

//   return (
//     <TableContainer component={Paper}>
//       {backlogs.length === 0 ? (
//         <Typography variant="h6" align="center" padding={2}>
//           No backlogs to display
//         </Typography>
//       ) : (
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Person</TableCell>
//               <TableCell>Backlog Details</TableCell>
//               <TableCell>Priority</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Assigned Person</TableCell>
//               <TableCell>Due Date</TableCell>
//               <TableCell>Estimated Hours</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {backlogs.map((backlog) => (
//               <TableRow>
//                 <TableCell>
//                   <img
//                     src={backlog.assignee.avatar}
//                     alt={backlog.assignee.name}
//                     style={{ width: '30px', height: '30px', borderRadius: '50%', objectFit: 'contain' }}
//                   />
//                 </TableCell>
//                 <TableCell>{backlog.name}</TableCell>
//                 <TableCell>{backlog.priority}</TableCell>
//                 <TableCell>{backlog.status}</TableCell>
//                 <TableCell>{backlog.assignee.name}</TableCell>
//                 <TableCell>{new Date(backlog.dueDate).toTimeString()}</TableCell>
//                 <TableCell>{backlog.estimatedHours}</TableCell>
//               </TableRow>

//             ))}
//           </TableBody>
//         </Table>
//       )}
//     </TableContainer>
//   );
// }




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Tab } from '@mui/material';
import apiClient from '../../../api/apiClient';

export default function BacklogDataTable({ projectId }) {
  const [backlogs, setBacklogs] = useState([]);

  useEffect(() => {
    const fetchBacklogs = async () => {
      try {
        const response = await apiClient.get(`/projects/${projectId}/backlogs`);
        setBacklogs(response.data);
      } catch (error) {
        console.error('Error fetching backlogs:', error.message);
      }
    };

    fetchBacklogs();
  }, [projectId]);

  return (
    <TableContainer component={Paper}>
      {backlogs.length === 0 ? (
        <Typography variant="h6" align="center" padding={2}>
          No backlogs to display
        </Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Person</TableCell>
              <TableCell>Backlog Details</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Assigned Person</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Estimated Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {backlogs.map((backlog) => (
              <TableRow>
                <TableCell>
                  <img
                    src={backlog.assignee.avatar}
                    alt={backlog.assignee.name}
                    style={{ width: '30px', height: '30px', borderRadius: '50%', objectFit: 'contain' }}
                  />
                </TableCell>
                <TableCell>{backlog.name}</TableCell>
                <TableCell>{backlog.priority}</TableCell>
                <TableCell>{backlog.status}</TableCell>
                <TableCell>{backlog.assignee.name}</TableCell>
                <TableCell>{new Date(backlog.dueDate).toTimeString()}</TableCell>
                <TableCell>{backlog.estimatedHours}</TableCell>
              </TableRow>

            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}



