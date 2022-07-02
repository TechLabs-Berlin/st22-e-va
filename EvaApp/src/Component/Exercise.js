import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Typography } from '@mui/material';

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
            display: 'none',
          }} />}
          label={<Typography fontSize={30}>{selected === 'Happy' ? ' 😁 ' : ' 😊 '}</Typography>}
        />
        <FormControlLabel
          value="Energetic"
          control={<Radio sx={{ display: 'none' }} />}
          label={<Typography fontSize={30}>{selected === 'Energetic' ? ' 🙆‍♀️ ' : ' 🙇‍♀️ '}</Typography>}
              />
          </RadioGroup>
    </FormControl>
  );
};