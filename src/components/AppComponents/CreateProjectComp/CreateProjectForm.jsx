import { Box, Grid, Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import StepOneform from '../../../components/AppComponents/CreateProjectComp/StepOneform';
import StepTwoForm from './StepTwoForm';
import StepThreeForm from './StepThreeForm';

const CreateProjectForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ['Project Template', 'Project Details', 'Final Review'];

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
            borderColor:'gray',
            borderTopLeftRadius: 10, 
            borderBottomLeftRadius: 10, 
            backgroundColor: 'white', 
            overflow: 'hidden' }}>
            <Stepper orientation="vertical" activeStep={activeStep}>
              {steps.map((label, index) => (
                <Step key={index} sx={{ '& .MuiStepLabel-label': { color: 'black' } }}>
                  <StepLabel
                    StepIconProps={{
                      sx: {
                        color: 'blue', 
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
            <Typography variant='body1' color='gray'>Please choose the project template from below</Typography>

            {activeStep === 0 && <div><StepOneform /></div>}
            {activeStep === 1 && <div><StepTwoForm/></div>}
            {activeStep === 2 && <div><StepThreeForm/></div>}

            <Box sx={{ marginTop: '20px' }}>
              <Button variant='outlined' disabled={activeStep === 0} onClick={handleBack} sx={{ marginRight: '10px' }}>
                Back
              </Button>
              <Button variant='contained' onClick={handleNext}>
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
