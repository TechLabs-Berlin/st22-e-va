import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ReactComponent as Noflow } from "../emojis/noflow.svg";
import { ReactComponent as Highflow } from "../emojis/highflow.svg";
import { Grid, Stack } from "@mui/material";

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
            Flow
          </FormLabel>
        </Grid>

        <Grid item xs={9} md={9}>
          <FormGroup aria-label="position" row sx={{ width: "100%" }}>
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
              label={<Noflow width="30px" height="30px" />}
              labelPlacement="top"
            />
          </FormGroup>
        </Grid>
      </Grid>
    </FormControl>
  );
}
