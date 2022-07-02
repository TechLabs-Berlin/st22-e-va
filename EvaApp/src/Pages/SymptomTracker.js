import { Paper, Stack, Typography } from "@mui/material/";
import AppFrame from "../HigherOrderComponent/AppFrame";
import EmojiSelector from "../Component/EmojiSelector";
import { useState } from "react";
import Symptoms from "../Component/Symptoms";
import Exercise from "../Component/Exercise";

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
        <EmojiSelector handleSelection={handleExerciseSelection} />
      </Stack>
    </Stack>
  );
};

export default AppFrame(SymptomTracker);
