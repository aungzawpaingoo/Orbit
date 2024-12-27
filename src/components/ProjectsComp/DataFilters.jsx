import React from 'react';
import {
  Box,
  TextField,
  Avatar,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
} from '@mui/material';
import data from '../../data/datafillter.json';

const DataFilters = () => {
  return (
    <Box>
      {/* Filters Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          padding: 2,
          flexWrap: 'nowrap', // Ensure everything stays in one row
        }}
      >
        {/* TextInput */}
        <TextField
          label="Search"
          variant="outlined"
          size="small" // Adjusted size
          sx={{
            flex: '2 1 auto',
            minWidth: 150,
          }}
        />

        {/* Photos Row */}
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flex: '1 1 auto',
            justifyContent: 'center',
          }}
        >
          {data.photos.map((photo) => (
            <Avatar
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              sx={{
                width: 40, // Reduced size for avatars
                height: 40,
              }}
            />
          ))}
        </Box>

        {/* Dropdowns */}
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flex: '3 1 auto',
            flexWrap: 'nowrap',
          }}
        >
          {data.dropdowns.map((dropdown) => (
            <FormControl
              key={dropdown.id}
              size="small" // Adjusted size for dropdowns
              sx={{
                flex: '1 1 auto',
                minWidth: 80,
              }}
            >
              <InputLabel
                id={`dropdown-label-${dropdown.id}`}
                sx={{ fontSize: '0.8rem' }} // Smaller label font size
              >
                {dropdown.label}
              </InputLabel>
              <Select
                labelId={`dropdown-label-${dropdown.id}`}
                id={`dropdown-${dropdown.id}`}
                label={dropdown.label}
                defaultValue=""
                sx={{
                  border: 'none', // Remove border
                  '.MuiOutlinedInput-notchedOutline': {
                    border: 'none', // Removes the default border outline
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    border: 'none', // Ensures no border on hover
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    border: 'none', // Ensures no border when focused
                  },
                }}
              >
                {dropdown.options.map((option, idx) => (
                  <MenuItem key={idx} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}
        </Box>
      </Box>

      {/* Scrollable Table Section */}
      <TableContainer
        component={Paper}
        sx={{
          width: '100%', // Full width
          height: '650px', // Increase height as needed
          overflow: 'auto',
          boxShadow: 'none', // Remove shadow
    borderRadius: 0, // Remove border radius
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Point</TableCell>
              <TableCell>Assigned Person</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.tableRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.point}</TableCell>
                <TableCell>{row.assignPerson}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DataFilters;
