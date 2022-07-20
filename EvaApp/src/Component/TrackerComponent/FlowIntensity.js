import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ReactComponent as Lowflow } from "../emojis/lowflow.svg";
import { ReactComponent as Mediumflow } from "../emojis/mediumflow.svg";
import { ReactComponent as Highflow } from "../emojis/highflow.svg";
import { Stack, Grid } from "@mui/material";

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset" sx={{ width: "700px" }}>
      <Grid container spacing="5px">
        <Grid item xs={3} md={3}>
          <FormLabel
            component="legend"
            sx={{
              color: "#aa717e !important",
              textAlign: "right",
              fontFamily: "Open Sans",
              top: "10px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            FlowIntensity
          </FormLabel>
        </Grid>

        <Grid item xs={9} md={9}>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="top"
              control={
                <Checkbox
                  sx={{
                    color: "#C46471",
                    "&.Mui-checked": { color: "#aa717e" },
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
        </Grid>
      </Grid>
    </FormControl>
  );
}
