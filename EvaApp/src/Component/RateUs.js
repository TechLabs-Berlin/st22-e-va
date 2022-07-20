import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function BasicRating() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        boxShadow: "25px",
        p: "20px",
        margin: "20px",
        border: "10px",
        borderColor: "black",
        borderRadius: "25px",
        "& > legend": { mt: 2 },
        backgroundColor: "#F4F0F1",
        padding: "200px",
        margin: "5px",
        marginLeft: "15px",
        height: "150px",
        width: "200px",
        textTransform: "none",
      }}
    >
      <Box
        sx={{
          boxShadow: "20px",
          p: "50px",
          margin: "-30px",
          border: "50px",
          borderColor: "#000000",
          borderRadius: "25px",
          "& > legend": { mt: 2 },
          backgroundColor: "#ffffff",
          padding: "20px",
          height: "150px",
          width: "250px",
          textTransform: "none",
        }}
      >
        <Stack>
          <Typography
            component="legend"
            sx={{
              fontFamily: "Open Sans",
              fontSize: "30px",
              color: "#6E5F6A",
              alignItems: "center",
              alignContent: "center",
              marginLeft: "20px",
            }}
          >
            Enjoying E-va?
          </Typography>
        </Stack>
        <Stack>
          <Typography
            component="legend"
            sx={{
              fontFamily: "Open Sans",
              fontSize: "15px",
              color: "#6E5F6A",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            Rate your experience in our platform
          </Typography>
        </Stack>
        <Rating
          sx={{
            fontFamily: "Open Sans",
            fontSize: "30px",
            color: "#E4DADB",
            alignItems: "center",
            alignContent: "center",
            marginLeft: "50px",
          }}
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            console.log(newValue);
          }}
        />
        <Stack>
          <Typography
            component="legend"
            sx={{
              fontFamily: "Open Sans",
              textDecoration: "underline",
              fontSize: "15px",
              color: "#6E5F6A",
              alignItems: "center",
              alignContent: "center",
              marginLeft: "100px",
            }}
          >
            Rate us
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
