import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormOne from '../../../assets/Brand Company Logo.png';
import FormTwo from '../../../assets/Brand Company Logo (1).png';

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
    title: 'Bug Report',
    description: 'Report issues or bugs encountered.',
    image: 'https://images5.alphacoders.com/120/1208127.jpg',
    altText: 'Bug Report',
  },
  {
    id: 4,
    title: 'Incident Report',
    description: 'Document any incidents in detail.',
    image: 'https://images5.alphacoders.com/120/1208127.jpg',
    altText: 'Incident Report',
  },
  {
    id: 5,
    title: 'Technical Review',
    description: 'Provide feedback on technical implementations.',
    image: 'https://images5.alphacoders.com/120/1208127.jpg',
    altText: 'Technical Review',
  },
  {
    id: 6,
    title: 'Change Request',
    description: 'Request changes to existing processes or systems.',
    image: 'https://images5.alphacoders.com/120/1208127.jpg',
    altText: 'Change Request',
  },
];

export default function FormChoices() {
  const handleCardClick = (title) => {
    alert(`You selected: ${title}`);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {cardData.map((card) => (
        <Card
          key={card.id}
          sx={{ width: '200px', cursor: 'pointer' }}
          onClick={() => handleCardClick(card.title)}
        >
          <CardMedia
            component="img"
            alt={card.altText}
            height="80"
            image={card.image}
          />
          <CardContent>
            <Typography gutterBottom variant="body2" color='#3B82F6' component="div" sx={{fontWeight:'medium'}}>
              {card.title}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'black', fontWeight:'normal' }}>
              {card.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
