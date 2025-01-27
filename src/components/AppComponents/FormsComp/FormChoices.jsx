import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FormOne from '../../../assets/1.png';
import FormTwo from '../../../assets/Brand Company Logo.png';
import FormThree from '../../../assets/3.png';
import FormFour from '../../../assets/4.png';
import FormFive from '../../../assets/5.png';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

const cardData = [
  {
    id: 1,
    title: 'Blank Form',
    description: 'A basic blank form template to start with.',
    image: FormOne,
    altText: 'Blank Form',
  },
  {
    id: 2,
    title: 'Feature Request',
    description: 'Submit your ideas for new features.',
    image: FormTwo,
    altText: 'Feature Request',
  },
 
  {
    id: 3,
    title: 'Incident Report',
    description: 'Document any incidents in detail.',
    image: FormThree,
    altText: 'Incident Report',
  },

  {
    id: 4,
    title: 'Technical Review',
    description: 'Provide feedback on technical implementations.',
    image: FormFour,
    altText: 'Technical Review',
  },

  {
    id: 5,
    title: 'Change Request',
    description: 'Request changes to existing processes or systems.',
    image: FormFive,
    altText: 'Change Request',
  },
];

export default function FormChoices() {

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
   setSelectedCard(card);
   setOpenDialog(true);
  };

  const handleClose = () => {
   setOpenDialog(false);
   setSelectedCard(null);
  };


  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'flex-start',
        padding: '20px',
      }}
    >
      {cardData.map((card) => (
        <Card
          key={card.id}
          sx={{
            width: '220px',
            height: '260px',
            cursor: 'pointer',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
          }}
          onClick={() => handleCardClick(card)}
        >
          <CardMedia
            component="img"
            alt={card.altText}
            sx={{
              height: '160px',
              objectFit: 'cover',
              borderRadius: '4px 4px 0 0',
            }}
            image={card.image}
          />
          <CardContent sx={{ padding: '8px', textAlign: 'left' }}>
            <Typography
              gutterBottom
              variant="subtitle2"
              color="#3B82F6"
              sx={{ fontWeight: '', marginBottom: '5px' }}
            >
              {card.title}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: 'gray', fontSize: '13px', fontWeight:'semibold' }}
            >
              {card.description}
            </Typography>
          </CardContent>
        </Card>
      ))}

      <Dialog open={openDialog} onClose={handleClose}  maxWidth="xs" fullWidth sx={{ backgroundColor: '' }}>
        {selectedCard && (
          <>
           <DialogTitle sx={{ backgroundColor: '#3B82F6', marginBottom: '18px', color: 'white' }}>{selectedCard.title}</DialogTitle>
           <DialogContent>
          {selectedCard.description}
           </DialogContent>
          </>
        )}
      </Dialog>

    </div>
  );
}