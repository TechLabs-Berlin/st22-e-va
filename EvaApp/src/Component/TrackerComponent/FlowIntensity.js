import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ReactComponent as Lowflow } from "../emojis/lowflow.svg";
import { ReactComponent as Mediumflow } from "../emojis/mediumflow.svg";
import { ReactComponent as Highflow } from "../emojis/highflow.svg";

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">FlowIntensity</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label={<Lowflow width="60" height="30" />}
          labelPlacement="top"
        />

        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label={<Mediumflow width="60" height="35" />}
          labelPlacement="top"
        />
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label={<Highflow width="60" height="40" />}
          labelPlacement="top"
        />
      </FormGroup>
    </FormControl>
  );
}
