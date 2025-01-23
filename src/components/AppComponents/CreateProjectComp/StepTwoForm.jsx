import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const StepTwoForm = () => {

  const templates = [
    {
      id: 1,
      category: 'CATEGORY',
      title: 'The Catalyzer',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: 'https://img.freepik.com/premium-vector/data-hosting-flat-style-design-vector-illustration-stock-illustration_357500-542.jpg',
      views: 1200,
      comments: 6,
    },
    {
      id: 2,
      category: 'CATEGORY',
      title: 'The 400 Blows',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: 'https://img.freepik.com/premium-vector/data-hosting-flat-style-design-vector-illustration-stock-illustration_357500-542.jpg',
      views: 980,
      comments: 4,
    },
    {
      id: 3,
      category: 'CATEGORY',
      title: 'Shooting Stars',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: 'https://img.freepik.com/premium-vector/data-hosting-flat-style-design-vector-illustration-stock-illustration_357500-542.jpg',
      views: 1500,
      comments: 10,
    },
  ];

  return (
    <div>

      <Typography variant='h4' sx={{ fontWeight: 'bold', marginTop: '10px', marginBottom: '10px' }}>Project Setup Details Step Two</Typography>

      <Typography variant='caption' sx={{marginTop:'10px',marginBottom:'10px', color:'gray'}}>
        Select from a variety of professionally crafted templates to kickstart 
        your project and bring your vision to life. Whether you're building a personal 
        project or managing a team, our templates are designed to meet your unique needs. 
        From streamlined workflows to creative designs, each template is tailored to save 
        time and maximize productivity. Dive into the options below and choose the one that 
        perfectly aligns with your goals—starting your next big idea has never been this easy.
      </Typography>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
        {templates.map((template) => (
          <Card key={template.id} className="w-full h-full  rounded-sm overflow-hidden">
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
                <Button variant="contained" color="info" className="flex items-center">
                  Choose This Template
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

export default StepTwoForm;
