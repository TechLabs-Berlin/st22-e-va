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
          left: "-240px",
          marginTop: "10px",
          marginLeft: "10px",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        Sexual Activity:
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
          label={<Heart width="30px" height="30px" />}
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
          label={<Protectedheart width="30px" height="30px" />}
          labelPlacement="top"
        />
      </FormGroup>
    </FormControl>
  );
}
