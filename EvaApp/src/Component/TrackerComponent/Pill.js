import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ReactComponent as Pill } from "../emojis/pill.svg";
import { ReactComponent as Nopill } from "../emojis/nopill.svg";
import { Grid } from "@mui/material";

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset" sx={{ width: "700px" }}>
      <Grid container spacing="5px">
        <Grid item xs={3} md={3}>
          <FormLabel
            component="legend"
            sx={{
              color: "#aa717e !important",
              fontFamily: "Open Sans",
              top: "10px",
              textAlign: "right",
              marginTop: "10px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Pill
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
                    "&.Mui-checked": {
                      color: "#aa717e",
                    },
                  }}
                />
              }
              label={<Pill width="30" height="30" />}
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
              label={<Nopill width="30" height="30" />}
              labelPlacement="top"
            />
          </FormGroup>
        </Grid>
      </Grid>
    </FormControl>
  );
}
