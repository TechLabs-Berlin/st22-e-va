import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

//to check with Soma, if we can leave .useState empty?
export default function IndeterminateCheckbox() {
  const [checked, setChecked] = React.useState([]);

  const handleChangePads = (event) => {
    setChecked([event.target.checked, checked[1], checked[2], checked[3]]);
  };

  const handleChangeTampons = (event) => {
    setChecked([checked[0], event.target.checked, checked[2], checked[3]]);
  };

  //check "checked with Soma"
  const handleChangeMenstrualCup = (event) => {
    setChecked([checked[0], checked[1], event.target.checked, checked[3]]);
  };
  const handleChangeNoAnswer = (event) => {
    setChecked([checked[0], checked[1], checked[2], event.target.checked]);
  };

  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column", ml: "3px" }}>
        <FormControlLabel
          label="Pads"
          control={
            <Checkbox checked={checked[0]} onChange={handleChangePads} />
          }
        />
        <FormControlLabel
          label="Tampons"
          control={
            <Checkbox checked={checked[1]} onChange={handleChangeTampons} />
          }
        />
        <FormControlLabel
          label="Menstrual cups"
          control={
            <Checkbox
              checked={checked[2]}
              onChange={handleChangeMenstrualCup}
            />
          }
        />
        <FormControlLabel
          label="Prefer not to answer"
          control={
            <Checkbox checked={checked[3]} onChange={handleChangeNoAnswer} />
          }
        />
      </Box>
    </div>
  );
}
