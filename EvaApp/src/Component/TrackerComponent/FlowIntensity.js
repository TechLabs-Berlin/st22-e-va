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
        FlowIntensity
      </FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={
            <Checkbox
              sx={{
                color: "#C46471",
                "&.Mui-checked": {},
              }}
            />
          }
          label={<Lowflow width="30px" height="25px" />}
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
          label={<Mediumflow width="30px" height="27px" />}
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
          label={<Highflow width="30px" height="30px" />}
          labelPlacement="top"
        />
      </FormGroup>
    </FormControl>
  );
}
