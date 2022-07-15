import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ReactComponent as Heart } from "../emojis/heart.svg";
import { ReactComponent as Protectedheart } from "../emojis/protectedheart.svg";

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Sexual Activity:</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label={<Heart width="60" height="40" />}
          labelPlacement="top"
        />

        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label={<Protectedheart width="60" height="40" />}
          labelPlacement="top"
        />
      </FormGroup>
    </FormControl>
  );
}
