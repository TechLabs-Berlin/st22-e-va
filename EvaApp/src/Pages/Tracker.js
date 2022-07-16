import FlowIntensity from "../Component/TrackerComponent/FlowIntensity";
import Flow from "../Component/TrackerComponent/Flow";
import Mood from "../Component/TrackerComponent/Mood";
import Exercise from "../Component/TrackerComponent/Exercise";
import Pill from "../Component/TrackerComponent/Pill";
import SexualActivity from "../Component/TrackerComponent/SexualActivity";
import { Stack, Box, Typography, Button } from "@mui/material";

const Tracker = () => {
  return (
    <div>
      <Box
        display={"flex"}
        flexDirection={"column"}
        textAlign={("center", "justify")}
        alignItems={"center"}
        sx={{
          boxShadow: "25px",
          p: "20px",
          margin: "20px",
          border: "10px",
          borderColor: "black",
          borderRadius: "25px",
          width: "600px",
          height: "600px",
          color: "#aa717e",
          backgroundColor: "#e9dadb",
          fontFamily: "Open Sans",
          position: "absolute",
          top: "50px",
          left: "50px",
          marginTop: "20px",
          marginLeft: "300px",
        }}
      >
        <Stack>
          <FlowIntensity />
        </Stack>
        <Stack>
          <Flow />
        </Stack>
        <Stack>
          <Mood />
        </Stack>
        <Stack>
          <Exercise />
        </Stack>
        <Stack>
          <Pill />
        </Stack>
        <Stack>
          <SexualActivity />
        </Stack>
        <Button
          variant="contained"
          size="small"
          flexDirection="row"
          sx={{
            color: "#ffffff",
            backgroundColor: "#dda0ad",
            buttonShadowColor: "#F4F0F1",
            fontWeight: "bold",
            padding: "20px",
            margin: "15px",
            height: "30px",
            width: "200px",
            buttonShadow: "50px",
            fontFamily: "Open Sans",
            "&:hover": { backgroundColor: "#aa717e" },
            textTransform: "none",
            fontSize: "18px",
            marginTop: "50px",
            marginLeft: "15px",
          }}
        >
          {" "}
          Done{" "}
        </Button>
      </Box>
    </div>
  );
};

export default Tracker;
