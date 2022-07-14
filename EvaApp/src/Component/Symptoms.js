import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Typography, Link } from "@mui/material";

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
          value="Acne"
          control={
            <Radio
              sx={{
                display: "none",
              }}
            />
          }
          label={
            <Typography fontSize={30}>
              {selected === "Acne" ? " 🌚 " : "  🌝 "}
            </Typography>
          }
        />
        <FormControlLabel
          value="Bloating"
          control={<Radio sx={{ display: "none" }} />}
          label={
            <Typography fontSize={30}>
              {selected === "Bloating" ? "  🙍🏻‍♀️ " : "  🙅🏻‍♀️ "}
            </Typography>
          }
        />

        <FormControlLabel
          value="Craving sweet"
          control={<Radio sx={{ display: "none" }} />}
          label={
            <Typography fontSize={30}>
              {selected === "Craving sweet" ? " 🍩 " : " 🍪 "}
            </Typography>
          }
        />
        <FormControlLabel
          value="Craving salty"
          control={<Radio sx={{ display: "none" }} />}
          label={
            <Typography fontSize={30}>
              {selected === "Craving salty" ? " 🥯 " : "  🥨 "}
            </Typography>
          }
        />
        <FormControlLabel
          value="Dizziness"
          control={<Radio sx={{ display: "none" }} />}
          label={
            <Typography fontSize={30}>
              {selected === "Dizziness" ? " 🤕 " : " 😳 "}
            </Typography>
          }
        />
        <FormControlLabel
          value="Insomnia"
          control={<Radio sx={{ display: "none" }} />}
          label={
            <Typography fontSize={30}>
              {selected === "Insomnia" ? " 🧐 " : " 🤨 "}
            </Typography>
          }
        />
        <FormControlLabel
          value="Bodyache"
          control={<Radio sx={{ display: "none" }} />}
          label={
            <Typography fontSize={30}>
              {selected === "Bodyache" ? " 😫 " : " 😩 "}
            </Typography>
          }
        />
        <FormControlLabel
          value="Cramps"
          control={<Radio sx={{ display: "none" }} />}
          label={
            <Typography fontSize={30}>
              {selected === "Cramps" ? " ☠️ " : " 💀 "}
            </Typography>
          }
        />
        <FormControlLabel
          value="Indigestion"
          control={<Radio sx={{ display: "none" }} />}
          label={
            <Typography fontSize={30}>
              {selected === "Indigestion" ? " 🥴 " : " 😕 "}
            </Typography>
          }
        />
      </RadioGroup>
    </FormControl>
  );
};
