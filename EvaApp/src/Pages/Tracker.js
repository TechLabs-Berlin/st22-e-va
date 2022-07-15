import FlowIntensity from "../Component/TrackerComponent/FlowIntensity";
import Flow from "../Component/TrackerComponent/Flow";
import Mood from "../Component/TrackerComponent/Mood";
import Exercise from "../Component/TrackerComponent/Exercise";
import Pill from "../Component/TrackerComponent/Pill";
import SexualActivity from "../Component/TrackerComponent/SexualActivity";

import { Stack, Box, Typography } from "@mui/material";

const Tracker = () => {
  return (
    <div>
      <FlowIntensity />
      <Flow />
      <Mood />
      <Exercise />
      <Pill />
      <SexualActivity />
    </div>
  );
};

export default Tracker;
