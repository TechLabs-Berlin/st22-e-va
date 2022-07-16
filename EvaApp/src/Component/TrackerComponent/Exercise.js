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
      <FormLabel
        component="legend"
        sx={{
          color: "#aa717e",
          "&.Mui-checked": {
            color: "#aa717e",
          },
          fontFamily: "Open Sans",
          position: "absolute",
          top: "10px",
          left: "-190px",
          marginTop: "10px",
          marginLeft: "10px",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        Exercise
      </FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={
            <Checkbox
              sx={{
                color: "#C46471",
                "&.Mui-checked": {
                  color: "#aa717e",
                },
              }}
            />
          }
          label={<Running width="30px" height="30px" />}
          labelPlacement="top"
        />

        <FormControlLabel
          value="top"
          control={
            <Checkbox
              sx={{
                color: "#C46471",
                "&.Mui-checked": {
                  color: "#aa717e",
                },
              }}
            />
          }
          label={<Noexercise width="30px" height="30px" />}
          labelPlacement="top"
        />
      </FormGroup>
    </FormControl>
  );
}
