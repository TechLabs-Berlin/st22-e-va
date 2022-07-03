import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Yes"
        //check default value with Soma
        name="radio-buttons-group"
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel
          value="Not sure"
          control={<Radio />}
          label="No, but I was."
        />
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel
          value="Other"
          control={<Radio />}
          label="Prefer not to answer"
        />
      </RadioGroup>
    </FormControl>
  );
}
