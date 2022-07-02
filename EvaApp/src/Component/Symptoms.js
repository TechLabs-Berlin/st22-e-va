import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


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
          value="Acne"
          control={<Radio sx={{ display: 'none' }} />}
          label={selected === 'Acne' ? ' 😁 ' : ' 😊 '}
        />
        <FormControlLabel
          value="Backaches"
          control={<Radio sx={{ display: 'none' }} />}
          label={selected === 'Backaches' ? ' 🙆‍♀️ ' : ' 🙇‍♀️ '}
        />
       
        <FormControlLabel
          value="Cramps"
          control={<Radio sx={{ display: 'none' }} />}
          label={selected === 'Cramps' ? ' 💁‍♀️ ' : ' 🧟‍♀️ '}
        />
        <FormControlLabel
          value="Cravings (Salty)"
          control={<Radio sx={{ display: 'none' }} />}
          label={selected === 'Cravings (Salty)' ? ' 😵 ' : ' 😑 '}
        />
        <FormControlLabel
          value="Cravings (Sweets)"
          control={<Radio sx={{ display: 'none' }} />}
          label={selected === 'Cravings (Sweets)' ? ' 😇 ' : ' 😌 '}
        />
        <FormControlLabel
          value="Dizziness"
          control={<Radio sx={{ display: 'none' }} />}
          label={selected === 'Dizziness' ? ' 🤮 ' : ' 🤢 '}
        />
        <FormControlLabel
          value="Spotting"
          control={<Radio sx={{ display: 'none' }} />}
          label={selected === 'Spotting' ? ' 😴 ' : '  🥱 '}
        />
        <FormControlLabel
          value="Headaches"
          control={<Radio sx={{ display: 'none' }} />}
          label={selected === 'Headaches' ? ' 😥 ' : ' 😭 '}
        />
        <FormControlLabel
          value="Tender Breasts"
          control={<Radio sx={{ display: 'none' }} />}
          label={selected === 'Tender Breasts' ? ' 😜 ' : ' 😏 '}
        />
      </RadioGroup>
    </FormControl>
  );
};