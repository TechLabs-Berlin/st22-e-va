import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ReactComponent as Excited } from "../emojis/excited.svg";
import { ReactComponent as Happy } from "../emojis/happy.svg";
import { ReactComponent as Okay } from "../emojis/okay.svg";
import { ReactComponent as Sick } from "../emojis/sick.svg";
import { ReactComponent as Sad } from "../emojis/sad.svg";
import { ReactComponent as Crying } from "../emojis/Crying.svg";
import { ReactComponent as Angry } from "../emojis/angry.svg";

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Mood</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label={<Excited width="60" height="40" />}
          labelPlacement="top"
        />

        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label={<Happy width="60" height="40" />}
          labelPlacement="top"
        />
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label={<Okay width="60" height="40" />}
          labelPlacement="top"
        />
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label={<Sick width="60" height="40" />}
          labelPlacement="top"
        />
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label={<Sad width="60" height="40" />}
          labelPlacement="top"
        />
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label={<Crying width="60" height="40" />}
          labelPlacement="top"
        />
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label={<Angry width="60" height="40" />}
          labelPlacement="top"
        />
      </FormGroup>
    </FormControl>
  );
}
