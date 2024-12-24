import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  cursor: 'pointer', 
}));

const StyledTableContainer = styled(TableContainer)({
  boxShadow: 'none',
  borderRadius: 0,
});

function createData(name, key, type, leadPerson) {
  return { name, key, type, leadPerson };
}

const rows = [
  createData('Project Alpha', 'P001', 'Development', 'John Doe'),
  createData('Project Beta', 'P002', 'Design', 'Jane Smith'),
  createData('Project Gamma', 'P003', 'Research', 'Albert Johnson'),
  createData('Project Delta', 'P004', 'Testing', 'Emily Davis'),
  createData('Project Epsilon', 'P005', 'Deployment', 'Michael Brown'),
];

export default function ProjectsTable() {
  const navigate = useNavigate(); 

  const handleRowClick = (row) => {
    navigate(`/projects/${row.key}`, { state: row }); 
  };

  return (
    <StyledTableContainer className="w-full bg-white">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Key</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Lead Person</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.key} onClick={() => handleRowClick(row)}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.key}</StyledTableCell>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="right">{row.leadPerson}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
