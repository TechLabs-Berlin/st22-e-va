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
import { Grid } from "@mui/material";

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset" sx={{ width: "700px" }}>
      <Grid container spacing="5px" xs={12} md={12}>
        <Grid item xs={3} md={3}>
          <FormLabel
            component="legend"
            sx={{
              color: "#aa717e !important",
              fontFamily: "Open Sans",
              top: "10px",
              textAlign: "right",
              marginTop: "10px",
              marginLeft: "10px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Mood
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
              label={<Excited width="30px" height="30px" />}
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
              label={<Happy width="30px" height="30px" />}
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
              label={<Okay width="30px" height="30px" />}
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
              label={<Sick width="30px" height="30px" />}
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
              label={<Sad width="30px" height="30px" />}
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
              label={<Crying width="30px" height="30px" />}
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
              label={<Angry width="30px" height="30px" />}
              labelPlacement="top"
            />
          </FormGroup>
        </Grid>
      </Grid>
    </FormControl>
  );
}
