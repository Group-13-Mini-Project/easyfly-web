import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/material';

const Location = () => {
  return (
    <Stack sx={{display:'flex', flexDirection:"row"}}>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={airports}
      sx={{ width: 300, marginRight: '20px' }}
      renderInput={(params) => <TextField {...params} label="From" />}
    />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={airports}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="To" />}
    />
    </Stack>
  )
}

const airports = [
    { label: 'Kumasi (KMS)' },
    { label: 'Tamale (TML)' },
    { label: 'Accra (KIA)' },]

export default Location