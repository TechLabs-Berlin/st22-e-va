import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";

export default ({ handleSelection }) => {
  const [selected, setSelected] = useState("");

  const handler = (event) => {
    handleSelection(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handler}
      >
        <FormControlLabel
          value="Happy"
          control={
            <Radio
              sx={{
                display: "none",
              }}
            />
          }
          label={
            <Typography fontSize={30}>
              {selected === "Happy" ? " 😁 " : " 😊 "}
            </Typography>
          }
        />
        <FormControlLabel
          value="Energetic"
          control={<Radio sx={{ display: "none" }} />}
          label={
            <Typography fontSize={30}>
              {selected === "Energetic" ? " 🙆‍♀️ " : " 🙇‍♀️ "}
            </Typography>
          }
        />

        <FormControlLabel
          value="Mood swings"
          control={<Radio sx={{ display: "none" }} />}
          label={
            <Typography fontSize={30}>
              {selected === "Mood swings" ? " 🧟‍♀️ " : " 💁‍♀️ "}
            </Typography>
          }
        />
        <FormControlLabel
          value="Irritated"
          control={<Radio sx={{ display: "none" }} />}
          label={
            <Typography fontSize={30}>
              {selected === "Irritated" ? " 😵 " : " 😑 "}
            </Typography>
          }
        />
        <FormControlLabel
          value="Calm"
          control={<Radio sx={{ display: "none" }} />}
          label={
            <Typography fontSize={30}>
              {selected === "Calm" ? " 😇 " : " 😌 "}
            </Typography>
          }
        />
        <FormControlLabel
          value="Sick"
          control={<Radio sx={{ display: "none" }} />}
          label={
            <Typography fontSize={30}>
              {selected === "Sick" ? " 🤮 " : " 🤢 "}
            </Typography>
          }
        />
        <FormControlLabel
          value="Sleepy"
          control={<Radio sx={{ display: "none" }} />}
          label={
            <Typography fontSize={30}>
              {selected === "Sleepy" ? " 😴 " : "  🥱 "}
            </Typography>
          }
        />
        <FormControlLabel
          value="Weepy"
          control={<Radio sx={{ display: "none" }} />}
          label={
            <Typography fontSize={30}>
              {selected === "Weepy" ? " 😭 " : " 😥 "}
            </Typography>
          }
        />
        <FormControlLabel
          value="Frisky"
          control={<Radio sx={{ display: "none" }} />}
          label={
            <Typography fontSize={30}>
              {selected === "Frisky" ? " 😜 " : " 😏 "}
            </Typography>
          }
        />
      </RadioGroup>
    </FormControl>
  );
};
