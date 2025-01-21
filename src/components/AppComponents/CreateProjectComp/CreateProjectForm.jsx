import { Box, Grid, Stepper, Step, StepLabel, Button } from '@mui/material';
import React, { useState } from 'react';
import StepOneform from '../../../components/AppComponents/CreateProjectComp/StepOneform';

const CreateProjectForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ['Step 1', 'Step 2', 'Step 3'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ 
      padding: '20px', 
      width: '100%', 
      backgroundColor: 'white', 
      height: 'calc(100vh - 64px)', 
      overflow: 'hidden' }}>
      <Grid container spacing={0} sx={{ height: '100%' }}>
        <Grid item xs={2}>
          <Box sx={{ 
            padding: '20px', 
            width: '100%', 
            alignItems: 'center', 
            height: '100%', 
            borderTopLeftRadius: 10, 
            borderBottomLeftRadius: 10, 
            backgroundColor: '#3B82F6', 
            overflow: 'hidden' }}>
            <Stepper orientation="vertical" activeStep={activeStep}>
              {steps.map((label, index) => (
                <Step key={index} sx={{ '& .MuiStepLabel-label': { color: 'white' } }}>
                  <StepLabel
                    StepIconProps={{
                      sx: {
                        color: 'black', 
                        '&.Mui-active': { color: 'blue' }, 
                        '&.Mui-completed': { color: 'green' }, 
                      },
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Grid>

        <Grid item xs={10}>
          <Box sx={{ 
            padding: '20px', 
            width: '100%', 
            height: '100%', 
            backgroundColor: 'white', 
            overflow: 'hidden' }}>
            <h1>Form</h1>

            {activeStep === 0 && <div><StepOneform /></div>}
            {activeStep === 1 && <div>Form content for Step 2</div>}
            {activeStep === 2 && <div>Form content for Step 3</div>}

            <Box sx={{ marginTop: '20px' }}>
              <Button disabled={activeStep === 0} onClick={handleBack} sx={{ marginRight: '10px' }}>
                Back
              </Button>
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateProjectForm;
