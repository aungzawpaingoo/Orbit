import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const StepOneform = () => {
  
  const templates = [
    {
      id: 1,
      category: 'CATEGORY',
      title: 'The Catalyzer',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: 'https://dummyimage.com/720x400',
      views: 1200,
      comments: 6,
    },
    {
      id: 2,
      category: 'CATEGORY',
      title: 'The 400 Blows',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: 'https://dummyimage.com/721x401',
      views: 980,
      comments: 4,
    },
    {
      id: 3,
      category: 'CATEGORY',
      title: 'Shooting Stars',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: 'https://dummyimage.com/722x402',
      views: 1500,
      comments: 10,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Please Fill Out The Project Details</h1>
      <h2 className="text-xl mb-8">You can choose from the templates below to start the project as you like.</h2>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map((template) => (
          <Card key={template.id} className="w-full h-full  rounded-lg overflow-hidden">
            <CardMedia
              component="img"
              height="200"
              image={template.image}
              alt={template.title}
              className="object-cover"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" className="mb-2">
                {template.category}
              </Typography>
              <Typography variant="h6" className="font-medium text-gray-900 mb-3">
                {template.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" className="mb-3">
                {template.description}
              </Typography>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center">
                  <Typography variant="body2" className="mr-3">{template.views} Views</Typography>
                  <Typography variant="body2">{template.comments} Comments</Typography>
                </div>
                <Button variant="outlined" color="primary" className="flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default StepOneform;
