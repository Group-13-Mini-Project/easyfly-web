import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const Trip = () => {



    const [trip, setTrip] = React.useState('');
      
        const handleChange = (event) => {
          setTrip(event.target.value);
        };

  return (
    <div>
         <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Trip</InputLabel>
                        <Select
                        variant='standard'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={trip}
                        label="Trip"
                        onChange={handleChange}
                        sx={{width: '120px'}}
                        >
                        <MenuItem value={'one way'}>Round Trip</MenuItem>
                        <MenuItem value={'round trip'}>One Way</MenuItem>
                        </Select>
        </FormControl>
    </div>
  )
}

export default Trip