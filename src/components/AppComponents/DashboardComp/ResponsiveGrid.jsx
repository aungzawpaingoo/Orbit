import React from 'react';
import { Card, Typography } from '@mui/material';
import cardData from '../../../data/dashboardCardData.json';

const ResponsiveGrid = () => {
  return (
    <div className="my-4 flex flex-wrap justify-evenly w-full -ml-4">
      {cardData.map((data) => (
        <Card 
          key={data.id} 
          sx={styles.card} 
          className="flex items-center pl-3 m-2"
        >
          <img src={data.image} alt="card icon" className='w-10 h-10 object-cover' />
          <div className='pl-3'>
            <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>
              {data.title}
            </Typography>
            <Typography variant='caption'>{data.description}</Typography>
          </div>
        </Card>
      ))}
    </div>
  );
};

const styles = {
  card: {
    borderColor: 'white', 
    borderWidth: 1, 
    height: '60px', 
    width: '180px',
    boxSizing: 'border-box',
  }
};

export default ResponsiveGrid;
