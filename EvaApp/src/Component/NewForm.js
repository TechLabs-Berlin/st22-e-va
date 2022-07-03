import { FormControl } from "@mui/material";
import AppFrame from "../HigherOrderComponent/AppFrame";
import { Dialog, Box } from "@mui/material";
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
import { useState } from "react";

const NewForm = () => {
  const [activePage, setActivePage] = useState(1);

  return (
    <div>
      {activePage === 1 && (
        <>
          <Box>
            <h3>Do you track your period?</h3>
            <RadioButton />
          </Box>
        </>
      )}
      {activePage === 2 && (
        <>
          <Box>
            {" "}
            <h3>What is your cycle length?</h3>
            <Select />
          </Box>
        </>
      )}
      {activePage === 3 && (
        <>
          <Box>
            {" "}
            <h3>Which period product do you use?</h3>
            <Checkbox />
          </Box>
        </>
      )}
      {activePage === 4 && (
        <>
          <Box>
            {" "}
            <h3>How would you describe your flow?</h3>
            <Slider />
          </Box>
        </>
      )}
      {activePage === 5 && (
        <>
          <Box>
            {" "}
            <h3>Is it easy for you to cope with PMS symptoms? </h3>
            <RadioTwo />
          </Box>
        </>
      )}
      {activePage === 6 && (
        <>
          <Box>
            {" "}
            <h3> Do you have mood swings on your period? </h3>
            <Combobox />
          </Box>
        </>
      )}
      {activePage === 7 && (
        <>
          <Box>
            {" "}
            <h3>Are you on birth control now?</h3>
            <RadioThree />
          </Box>
        </>
      )}
      {activePage === 8 && (
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
