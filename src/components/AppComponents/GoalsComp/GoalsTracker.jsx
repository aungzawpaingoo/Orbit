import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import ErrorIcon from '@mui/icons-material/Error';
import WorkIcon from '@mui/icons-material/Work';
import backlogData from '../../../data/backlogData.json';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const statusDetails = {
    'Completed': { color: '#28A745', icon: <CheckCircleIcon sx={{ fontSize: '20px', color: '#28A745' }} /> },
    'In Progress': { color: '#FFC107', icon: <WorkIcon sx={{ fontSize: '20px', color: '#FFC107' }} /> },
    'Pending': { color: '#007BFF', icon: <PendingIcon sx={{ fontSize: '20px', color: '#007BFF' }} /> },
    'On Hold': { color: '#DC3545', icon: <ErrorIcon sx={{ fontSize: '20px', color: '#DC3545' }} /> },
  };

  return (
    <React.Fragment>
      <TableRow
        sx={{
          '& > *': { borderBottom: 'unset' },
          '&:hover': { backgroundColor: '#ffffff', transform: 'scale(1.02)', transition: '0.3s ease-in-out' },
          cursor: 'pointer',
        }}
      >
        <TableCell align="center">
          {statusDetails[row.status].icon}
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            sx={{
              transition: 'transform 0.2s ease',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={{ fontWeight: 'semibold', color: '#333' }}>
          <Typography variant="body1" sx={{ fontWeight: 'semibold' }}>
            {row.name}
          </Typography>
        </TableCell>
        <TableCell align="center" sx={{ fontWeight: 'bold', color: row.priority === 'High' ? '#FF5733' : '#1E3E62' }}>
          {row.priority}
        </TableCell>
        <TableCell align="center" sx={{ color: '#4B5563' }}>
          {row.assignee.name}
        </TableCell>
        <TableCell align="center" sx={{ color: '#4B5563' }}>
          {row.dueDate}
        </TableCell>
        <TableCell align="center" sx={{ color: '#4B5563' }}>
          {row.estimatedHours} hours
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, backgroundColor: '#ffffff', borderRadius: '10px' }}>
              <Typography variant="h6" gutterBottom component="div" sx={{ color: '#333', fontWeight: 'bold' }}>
                Task History
              </Typography>
              <Table size="small" aria-label="task history">
                <TableHead sx={{ backgroundColor: '#ffffff', color: '#333', borderRadius: '10px' }}>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Update</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row" sx={{ color: '#4B5563' }}>
                        {historyRow.date}
                      </TableCell>
                      <TableCell sx={{ color: '#6B7280' }}>{historyRow.update}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    assignee: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    dueDate: PropTypes.string.isRequired,
    estimatedHours: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        update: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default function GoalsTracker() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: 'none',
        marginTop: '20px',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <Table aria-label="collapsible table">
        {/* <TableHead>
          <TableRow>
            <TableCell align="center">Status</TableCell>
            <TableCell />
            <TableCell>Goal Name</TableCell>
            <TableCell align="center">Priority</TableCell>
            <TableCell align="center">Assignee</TableCell>
            <TableCell align="center">Due Date</TableCell>
            <TableCell align="center">Estimated Hours</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {backlogData.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
