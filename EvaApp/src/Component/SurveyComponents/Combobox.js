import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={mood}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Select" />}
    />
  );
}

const mood = [
  { label: "Yes, every time" },
  { label: "Yes, sometimes" },
  { label: "No, never" },
  { label: "I prefer not to answer" }
];
