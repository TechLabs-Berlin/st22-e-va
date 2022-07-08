import { FormControl } from "@mui/material";
import AppFrame from "../HigherOrderComponent/AppFrame";
import { Box, ButtonGroup, makeStyles, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import RadioButton from "./SurveyComponents/RadioButton";
import Select from "./SurveyComponents/Select";
import Slider from "./SurveyComponents/Slider";
import Checkbox from "./SurveyComponents/Checkbox";
import RadioTwo from "./SurveyComponents/RadioTwo";
import Combobox from "./SurveyComponents/Combobox";
import RadioThree from "./SurveyComponents/RadioThree";
import RadioFour from "./SurveyComponents/RadioFour";
import { useState } from "react";

const NewForm = () => {
  const [activePage, setActivePage] = useState(1);

  return (
    <div>
      {activePage === 1 && (
        <>
          <Box
            display={"flex"}
            flexDirection={"column"}
            margin={5}
            border={1}
            borderColor={"black"}
            borderRadius={5}
            padding={1}
            width={400}
            height={400}
            color={"#bc888c"}
            backgroundColor={"#ffeaee"}
            textAlign={("center", "justify")}
            alignItems={"center"}
          >
            <p>
              We would like to get to know you a little better so that we can
              make a more accurate assessment. Would you be willing to answer a
              few questions? It won't take long!
            </p>
            <Stack spacing={2} direction="column">
              <Button
                variant="contained"
                size="small"
                flexDirection="column"
                padding="10"
                margin="5"
                height="10"
                width="250"
                backgroundColor="black"
                bgcolor="white"
              >
                Let's do it!
              </Button>
              <Button
                variant="contained"
                size="small"
                flexDirection="column"
                padding="10"
                margin="5"
                height="10"
                width="250"
              >
                Not now! Maybe later
              </Button>
            </Stack>
          </Box>
        </>
      )}
      {activePage === 2 && (
        <>
          <Box>
            <h3>Do you track your period?</h3>
            <RadioButton />
          </Box>
        </>
      )}
      {activePage === 3 && (
        <>
          <Box>
            {" "}
            <h3>What is your cycle length?</h3>
            <Select />
          </Box>
        </>
      )}
      {activePage === 4 && (
        <>
          <Box>
            {" "}
            <h3>Which period product do you use?</h3>
            <Checkbox />
          </Box>
        </>
      )}
      {activePage === 5 && (
        <>
          <Box>
            {" "}
            <h3>How would you describe your flow?</h3>
            <Slider />
          </Box>
        </>
      )}
      {activePage === 6 && (
        <>
          <Box>
            {" "}
            <h3>Is it easy for you to cope with PMS symptoms? </h3>
            <RadioTwo />
          </Box>
        </>
      )}
      {activePage === 7 && (
        <>
          <Box>
            {" "}
            <h3> Do you have mood swings on your period? </h3>
            <Combobox />
          </Box>
        </>
      )}
      {activePage === 8 && (
        <>
          <Box>
            {" "}
            <h3>Are you on birth control now?</h3>
            <RadioThree />
          </Box>
        </>
      )}
      {activePage === 9 && (
        <>
          <Box>
            <h3>
              Do you have any reproductive health disorders (endometriosis,
              PCOS, etc)?{" "}
            </h3>
            <RadioFour />
          </Box>
        </>
      )}

      {activePage > 1 && (
        <Button
          onClick={() => {
            setActivePage(activePage - 1);
          }}
        >
          {" "}
          Previous{" "}
        </Button>
      )}

      <Button
        onClick={() => {
          setActivePage(activePage + 1);
        }}
      >
        {" "}
        Next{" "}
      </Button>
    </div>
  );
};

export default NewForm;
