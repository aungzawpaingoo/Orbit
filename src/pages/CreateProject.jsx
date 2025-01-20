import React, { useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import CreateProjectAppbar from '../components/AppComponents/CreateProjectComp/CreateProjectAppbar';
import { useNavigate } from 'react-router-dom';
import MadeForYou from '../pages/ProjectTemplates/MadeForYou';
import Marketing from '../pages/ProjectTemplates/Marketing';
import ProductManagement from '../pages/ProjectTemplates/ProductManagement';
import SoftwareDevelopment from '../pages/ProjectTemplates/SoftwareDevelopment';

const CreateProject = () => {
  const [selectedChoice, setSelectedChoice] = useState('Made For You');
  const navigate = useNavigate();

  const handleNavigation = () => { 
    navigate('/projects');
  };

  const choices = ['Made For You', 'Software Development', 'Marketing', 'Product Management'];

  const renderFormCard = () => {
    switch (selectedChoice) {
      case 'Made For You':
        return <MadeForYou />;
      case 'Software Development':
        return <SoftwareDevelopment />;
      case 'Marketing':
        return <Marketing />;
      case 'Product Management':
        return <ProductManagement />;
      default:
        return <Card><CardContent><Typography>Please select a choice.</Typography></CardContent></Card>;
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <CreateProjectAppbar onBackToProject={handleNavigation} />
      <div className="flex flex-row w-full flex-grow overflow-hidden">
        <div className="w-1/5 p-6 border-r bg-white">
          <Typography variant="h6" className="text-gray-800">Project Templates</Typography>
          <div className="space-y-4 mt-8">
            {choices.map((choice, index) => (
              <Button
                key={index}
                variant="text"
                fullWidth
                sx={{
                  padding: '1px 0',
                  textTransform: 'none',
                  backgroundColor: selectedChoice === choice ? 'blue.200' : 'transparent',
                  color: selectedChoice === choice ? 'blue.500' : 'inherit',
                  borderRadius: 0, 
                  justifyContent: 'flex-start', 
                  textAlign: 'left', 
                  '&:hover': {
                    backgroundColor: selectedChoice === choice ? 'blue.300' : 'transparent',
                  },
                }}
                onClick={() => setSelectedChoice(choice)}
              >
                {choice}
              </Button>
            ))}
          </div>
        </div>
        <div className="w-4/5 p-6 overflow-y-auto flex-grow" style={{ maxHeight: 'calc(100vh - 64px)' }}>
          {renderFormCard()}
        </div>
      </div>
    </div>
  );
}

export default CreateProject;
