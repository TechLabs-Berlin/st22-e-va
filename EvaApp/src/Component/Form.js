import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RadioButton from "./RadioButton";
import Select from "./Select";
import Slider from "./Slider";
import Checkbox from "./Checkbox";
import RadioTwo from "./RadioTwo";
import Combobox from "./Combobox";
import RadioThree from "./RadioThree";
import RadioFour from "./RadioFour";

const StepSwitch = ({ stepIndex }) => {
  switch (stepIndex) {
    case 1:
      return (
        <Box>
          {" "}
          <h3>Do you track your period?</h3>
          <RadioButton />
        </Box>
      );
    case 2:
      return (
        <Box>
          {" "}
          <h3>What is your cycle length?</h3>
          <Select />
        </Box>
      );
    case 3:
      return (
        <Box>
          {" "}
          <h3>Which period product do you use?</h3>
          <Checkbox />
        </Box>
      );
    case 4:
      return (
        <Box>
          {" "}
          <h3>How would you describe your flow?</h3>
          <Slider />
        </Box>
      );
    case 5:
      return (
        <Box>
          {" "}
          <h3>Is it easy for you to cope with PMS symptoms? </h3>
          <RadioTwo />
        </Box>
      );
    case 6:
      return (
        <Box>
          {" "}
          <h3> Do you have mood swings on your period? </h3>
          <Combobox />
        </Box>
      );
    case 7:
      return (
        <Box>
          {" "}
          <h3>Are you on birth control now?</h3>
          <RadioThree />
        </Box>
      );
    case 8:
      return (
        <Box>
          <h3>
            Do you have any reproductive health disorders (endometriosis, PCOS,
            etc)?{" "}
          </h3>
          <RadioFour />
        </Box>
      );

    default:
      return <Typography variant="h2">Something went wrong</Typography>;
  }
};
const steps = [
  "Please take the survey to let E-va take better care of you",
  "Tell us more about your cycle",
  "Tell us about your preferred period product",
  "Describe your flow",
  "Tell us about PMS",
  "Let's talk about mood",
  "Let's talk about birth control",
  "Final question",
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <StepSwitch stepIndex={activeStep + 1} />
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
