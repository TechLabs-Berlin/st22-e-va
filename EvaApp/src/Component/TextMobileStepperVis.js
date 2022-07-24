import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


const steps = [
  {
    
    description: `“I love that I don't have to dig through ads to use the platform :) I've only used it for 1 cycle and so far it's been a good experience."                  
    (Luisa Santos)`,
  },
  {
    description:
    `“Love everything about this platform! I love the tracking options, the metrics, the data reports, and the projections! Super helpful and amazing.”                             
    (Emma Schmidt)`,
  },
  {
    description:  `It has great fluidity and options between life changes and I find that the information provided is well sourced and cited. I feel very comfortable and confident using this app.                         
    (Ingrid Müller)`,
  },
];

export default function TextMobileStepperVis() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ position: "absolute", 
    width: "384px",
    height: "135px",
    left: "500px",
    top: "1400px",
    
    fontFamily: "Avenir Next",
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "150%",        
    display: "flex",
    alignItems: "center",}}>
      <Box sx={{ position: "absolute",
width: "384px",
height: "135px",
left: "11px",
top: "100px",}}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
      position="absolute"
      width="384px"
      height="135px"
      left="20px"
      top="100px"
        steps={maxSteps}
        activeStep={activeStep}
        nextButton={
          <Button sx={{ position: "absolute", 
          width: "384px",
          height: "135px",
          left: "11px",
          top: "250px",
          color: "#fffff"}}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button sx={{ position: "absolute", 
          width: "384px",
          height: "135px",
          left: "0px",
          top: "200px",
          color: "#fffff",}} size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    
  );
}
