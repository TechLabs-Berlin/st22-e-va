import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ReactComponent as Running } from "../emojis/Running.svg";
import { ReactComponent as Noexercise } from "../emojis/noexercise.svg";

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Exercise</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label={<Running width="60" height="40" />}
          labelPlacement="top"
        />

        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label={<Noexercise width="60" height="40" />}
          labelPlacement="top"
        />
      </FormGroup>
    </FormControl>
  );
}
