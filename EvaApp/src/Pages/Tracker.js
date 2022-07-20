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
          width: "750px",
          height: "650px",
          margin: "20px",
          border: "10px",
          borderRadius: "25px",
          boxShadow: "25px",
          p: "20px",
          borderColor: "black",
          color: "#aa717e",
          backgroundColor: "#e9dadb",
          fontFamily: "Open Sans",
          top: "50px",
          left: "50px",
          marginTop: "20px",
          marginLeft: "300px",
        }}
      >
        <FlowIntensity />
        <Flow />
        <Mood />
        <Exercise />
        <Pill />
        <SexualActivity />

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
          Done
        </Button>
      </Box>
    </div>
  );
};

export default Tracker;
