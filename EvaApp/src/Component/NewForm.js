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
