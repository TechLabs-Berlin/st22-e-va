import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const Pumpkin = ({ selected }) => {
  return selected ? '👩' : '👧';
};
export default ({ handleSelection }) => {
  const [selected, setSelected] = useState('');

  const handler = (event) => {
    handleSelection(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handler}
      >
        <FormControlLabel
          value="Happy"
          control={<Radio sx={{
            display: 'none', height :'100px', width : '100px', }} />}
          label={selected === 'Happy' ? ' 😁 ' : ' 😊 '}
        />
        <FormControlLabel
          value="Energetic"
          control={<Radio sx={{ display: 'none' }} />}
          label={selected === 'Energetic' ? ' 🙆‍♀️ ' : ' 🙇‍♀️ '}
        />
       
        <FormControlLabel
          value="Mood swings"
          control={<Radio sx={{ display: 'none' }} />}
          label={selected === 'Mood swings' ? ' 💁‍♀️ ' : ' 🧟‍♀️ '}
        />
        <FormControlLabel
          value="Irritated"
          control={<Radio sx={{ display: 'none' }} />}
          label={selected === 'Irritated' ? ' 😵 ' : ' 😑 '}
        />
        <FormControlLabel
          value="Calm"
          control={<Radio sx={{ display: 'none' }} />}
          label={selected === 'Calm' ? ' 😇 ' : ' 😌 '}
        />
        <FormControlLabel
          value="Sick"
          control={<Radio sx={{ display: 'none' }} />}
          label={selected === 'Sick' ? ' 🤮 ' : ' 🤢 '}
        />
        <FormControlLabel
          value="Sleepy"
          control={<Radio sx={{ display: 'none' }} />}
          label={selected === 'Sleepy' ? ' 😴 ' : '  🥱 '}
        />
        <FormControlLabel
          value="Weepy"
          control={<Radio sx={{ display: 'none' }} />}
          label={selected === 'Weepy' ? ' 😥 ' : ' 😭 '}
        />
        <FormControlLabel
          value="Frisky"
          control={<Radio sx={{ display: 'none' }} />}
          label={selected === 'Frisky' ? ' 😜 ' : ' 😏 '}
        />
      </RadioGroup>
    </FormControl>
  );
};