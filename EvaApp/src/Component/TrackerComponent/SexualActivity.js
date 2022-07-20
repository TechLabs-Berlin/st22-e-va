import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ReactComponent as Heart } from "../emojis/heart.svg";
import { ReactComponent as Protectedheart } from "../emojis/protectedheart.svg";
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
              width: "200px",
              left: "-20px",
              padding: 0,
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            {"Sexual Activity"}
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
        </Grid>
      </Grid>
    </FormControl>
  );
}
