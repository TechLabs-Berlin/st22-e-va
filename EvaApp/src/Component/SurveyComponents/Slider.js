import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "Light",
  },
  {
    value: 50,
    label: "Medium",
  },
  {
    value: 100,
    label: "Heavy",
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSliderLabel() {
  return (
    <Box sx={{ width: "280px", margin: "30px" }}>
      <Slider
        aria-label="Always visible"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={50}
        marks={marks}
        valueLabelDisplay="off"
        sx={{
          color: "#dda0ad",
          "&.Mui-checked": {
            color: "#aa717e",
          },
        }}
      />
    </Box>
  );
}
