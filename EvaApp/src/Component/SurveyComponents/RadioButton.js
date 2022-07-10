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
        defaultValue="other"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="Yes"
          control={
            <Radio
              sx={{
                color: "#dda0ad",
                "&.Mui-checked": {
                  color: "#aa717e",
                },
              }}
            />
          }
          label="Yes, I track my period regularly."
        />
        <FormControlLabel
          value="No"
          control={
            <Radio
              sx={{
                color: "#dda0ad",
                "&.Mui-checked": {
                  color: "#aa717e",
                },
              }}
            />
          }
          label="No, I didn't think I needed to"
        />
        <FormControlLabel
          value="Other"
          control={
            <Radio
              sx={{
                color: "#dda0ad",
                "&.Mui-checked": {
                  color: "#aa717e",
                },
              }}
            />
          }
          label="I had't thought about it"
        />
      </RadioGroup>
    </FormControl>
  );
}
