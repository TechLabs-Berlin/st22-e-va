import FlowIntensity from "../Component/TrackerComponent/FlowIntensity";
import Flow from "../Component/TrackerComponent/Flow";
import Mood from "../Component/TrackerComponent/Mood";
import Exercise from "../Component/TrackerComponent/Exercise";
import Pill from "../Component/TrackerComponent/Pill";
import SexualActivity from "../Component/TrackerComponent/SexualActivity";
import { Stack, Box, Typography, Button, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const Tracker = ({ handleDialogOpenClose }) => {
  const handleSubmit = () => {
    handleDialogOpenClose();
  };
  return (
    <div backgroundColor="red !important">
      <IconButton
        onClick={handleDialogOpenClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          "& svg": {
            width: 40,
            height: 40,
            color: "#E4DADB",
          },
        }}
      >
        <CloseIcon />
      </IconButton>
      <Box
        display={"flex"}
        flexDirection={"column"}
        textAlign={("center", "justify")}
        alignItems={"center"}
        sx={{
          padding: "100px",
          width: "750px",
          height: "550px",
          border: "10px",
          borderRadius: "25px",
          boxShadow: "25px",
          borderColor: "black",
          color: "#aa717e",
          backgroundColor: "#F4F0F1",
          fontFamily: "Open Sans",
          top: "50px",
        }}
      >
        <FlowIntensity />
        <Flow />
        <Mood />
        <Exercise />
        <Pill />
        <SexualActivity />

        <Button
          onClick={handleSubmit}
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
