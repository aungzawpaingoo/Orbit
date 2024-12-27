import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Button } from '@mui/material';
import data from '../../data/data.json';

const FrequentPlaces = () => {
  const [activeTab, setActiveTab] = useState('Working On');

  const typeColors = {
    feature: 'green',
    userstory: 'blue',
    bug: 'red',
  };

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ display: 'flex', borderBottom: '1px solid #ccc', marginBottom: '16px' }}>
        {['Working On', 'Assigned To Me', 'Done'].map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? 'contained' : 'text'}
            color={activeTab === tab ? 'primary' : 'inherit'}
            onClick={() => setActiveTab(tab)}
            style={{
              textTransform: 'none',
              marginRight: '8px',
            }}
          >
            {tab}
          </Button>
        ))}
      </div>

      <TableContainer component={Paper} elevation={0}>
        <Table>
          <TableBody>
            {data[activeTab].map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor:
                        row.type === 'feature'
                          ? 'green'
                          : row.type === 'userstory'
                          ? 'blue'
                          : 'red',
                    }}
                  ></div>
                </TableCell>
                <TableCell>{row.task}</TableCell>
                <TableCell>{row.assignedDate}</TableCell>
                <TableCell>
                  <img
                    src={row.assignedPersonPhoto}
                    alt="profile"
                    style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FrequentPlaces;
