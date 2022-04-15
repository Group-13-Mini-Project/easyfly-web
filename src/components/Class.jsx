import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Class = () => {

    const [clas, setClas] = React.useState('');
      
        const handleChange = (event) => {
          setClas(event.target.value);
        };

  return (
    <div>
        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Class</InputLabel>
                        <Select

                        autoWidth="true"
                        variant='standard'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={clas}
                        label="Class"
                        onChange={handleChange}
                        sx={{width: '120px'}}
                        >
                        <MenuItem value={'Economy'}>Economy</MenuItem>
                        <MenuItem value={'Business'}>Business</MenuItem>
                        <MenuItem value={'First class'}>First Class</MenuItem>
                        </Select>
        </FormControl>
    </div>
  )
}

export default Class