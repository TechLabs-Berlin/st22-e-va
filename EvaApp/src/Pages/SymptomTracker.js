import { Paper, Stack, Typography } from "@mui/material/";
import AppFrame from "../HigherOrderComponent/AppFrame";
import EmojiSelector from "../Component/EmojiSelector";
import { useState } from "react";
import Symptoms from "../Component/Symptoms";
import Exercise from "../Component/Exercise";
import Pills from "../Component/Pills";
import Ttc from "../Component/Ttc";
import FlowType from "../Component/FlowType";

const SymptomTracker = () => {
  const [selections, setSelections] = useState({
    Mood: "",
    Symptoms: "",
    Exercise: "",
    Pills: "",
    Ttc: "",
    FlowType: "",
  });

  const handleMoodSelection = (mood) => {
    setSelections({
      ...selections,
      mood: mood,
    });
  };
  const handleSymptomsSelection = (symptoms) => {
    setSelections({
      ...selections,
      symptoms: symptoms,
    });
  };
  const handleExerciseSelection = (exercise) => {
    setSelections({
      ...selections,
      exercise: exercise,
    });
  };
  const handlePillsSelection = (pills) => {
    setSelections({
      ...selections,
      pills: pills,
    });
  };
  const handleTtcSelection = (ttc) => {
    setSelections({
      ...selections,
      ttc: ttc,
    });
  };
  const handleFlowTypeSelection = (FlowType) => {
    setSelections({
      ...selections,
      FlowType: FlowType,
    });
  };

  return (
    <Stack>
      <Stack direction="row" spacing={2}>
        <Typography fontSize={30}>Mood:{selections.mood}</Typography>
        <EmojiSelector handleSelection={handleMoodSelection} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography fontSize={30}>Symptoms:{selections.Symptoms}</Typography>
        <Symptoms handleSelection={handleSymptomsSelection} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography fontSize={30}>Exercise:{selections.Exercise}</Typography>
        <Exercise handleSelection={handleExerciseSelection} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography fontSize={30}>Pills:{selections.Pills}</Typography>
        <Pills handleSelection={handlePillsSelection} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography fontSize={30}>TTC:{selections.Ttc}</Typography>
        <Ttc handleSelection={handleTtcSelection} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography fontSize={30}>Flow Type:{selections.FlowType}</Typography>
        <FlowType handleSelection={handleFlowTypeSelection} />
      </Stack>
    </Stack>
  );
};

export default AppFrame(SymptomTracker);
