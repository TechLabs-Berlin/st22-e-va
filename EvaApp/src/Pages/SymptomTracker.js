import { Paper, Typography } from '@mui/material/';
import AppFrame from '../HigherOrderComponent/AppFrame';
import EmojiSelector from '../Component/EmojiSelector';
import { useState } from 'react';


const SymptomTracker = () => {
  const [selections, setSelections] = useState({
    Mood: 'Select', });

  const handleMoodSelection = (mood) => {
    setSelections({
      ...selections,
      mood: mood,
      
    });
  };

  return (
    <div>
      <Typography>Mood:{selections.mood}</Typography>
      <EmojiSelector handleSelection={handleMoodSelection} />
    </div>
  );
};

export default AppFrame(SymptomTracker);