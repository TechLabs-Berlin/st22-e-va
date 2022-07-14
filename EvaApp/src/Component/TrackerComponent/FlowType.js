import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import { RadioGroup } from "@mui/material";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import noflow from "./emojis-svg/noflow";
import lowflow from "./Component/emojis/lowflow";

//unable to access svg
export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Label placement</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="top"
          control={<Radio />}
          label={<noflow />}
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Radio />}
          label={<lowflow />}
          labelPlacement="top"
        />
        <FormControlLabel
          value="bottom"
          control={<Radio />}
          label="Bottom"
          labelPlacement="top"
        />
        <FormControlLabel
          value="end"
          control={<Radio />}
          label="End"
          labelPlacement="top"
        />
      </RadioGroup>
    </FormControl>
  );
}
