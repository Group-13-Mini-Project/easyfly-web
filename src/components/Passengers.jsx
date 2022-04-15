import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Passengers = () => {

    const [pass, setPass] = React.useState('');
      
        const handleChange = (event) => {
          setPass(event.target.value);
        };
  return (
    <div>
        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Passengers</InputLabel>
                        <Select
                        variant='standard'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={pass}
                        label="Passengers"
                        onChange={handleChange}
                        sx={{width: '150px'}}
                        >
                        <MenuItem value={1}>1 Passenger</MenuItem>
                        <MenuItem value={2}>2 Passengers</MenuItem>
                        <MenuItem value={3}>3 Passengers</MenuItem>
                        </Select>
        </FormControl>
    </div>
  )
}

export default Passengers