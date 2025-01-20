import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const ProjectCards = ({cardImage,projectTitle,projectDescription,onClick}) => {
  return (
    <Card className="flex items-center p-2 rounded-lg w-3/4 mx-auto bg-white hover:shadow-xl transition-shadow" onClick={onClick}>
      <div className="w-1/3">
        <CardMedia
          component="img"
          image={cardImage}
          alt="Project Thumbnail"
          className="w-full h-44 object-cover rounded-lg"
        />
      </div>
      <CardContent className="flex-grow mx-6">
        <Typography variant="h6" className="font-semibold text-gray-900">
          {projectTitle}
        </Typography>
        <Typography variant="body2" className="text-gray-500 mt-2">
          {projectDescription}
        </Typography>
      </CardContent>
      <ArrowForwardIcon className="ml-4 text-primary cursor-pointer" />
    </Card>
  );
};

export default ProjectCards;
