import { Paper, Stack, Typography } from "@mui/material/";
import AppFrame from "../HigherOrderComponent/AppFrame";
import EmojiSelector from "../Component/EmojiSelector";
import { useState } from "react";
import Symptoms from "../Component/Symptoms";
import Exercise from "../Component/Exercise";
import Pills from "../Component/Pills";

const SymptomTracker = () => {
  const [selections, setSelections] = useState({
    Mood: "",
    Symptoms: "",
    Exercise: "",
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
    </Stack>
  );
};

export default AppFrame(SymptomTracker);
