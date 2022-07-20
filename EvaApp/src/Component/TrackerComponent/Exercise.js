import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ReactComponent as Running } from "../emojis/Running.svg";
import { ReactComponent as Noexercise } from "../emojis/noexercise.svg";
import { Grid } from "@mui/material";

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset" sx={{ width: "700px" }}>
      <Grid container spacing="5px">
        <Grid item xs={3} md={3}>
          <FormLabel
            component="legend"
            sx={{
              fontFamily: "Open Sans",
              top: "10px",
              textAlign: "right",
              marginTop: "10px",
              marginLeft: "10px",
              fontWeight: "bold",
              fontSize: "30px",
              color: "#aa717e !important",
            }}
          >
            Exercise
          </FormLabel>
        </Grid>

        <Grid item xs={9} md={9}>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="top"
              control={
                <Checkbox
                  size="medium"
                  style={{
                    width: "20px",
                  }}
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
        </Grid>
      </Grid>
    </FormControl>
  );
}
