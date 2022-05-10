import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/material';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';


const airports = ['Kumasi (KMS)','Tamale (TML)', 'Accra (KIA)',]

const Location = () => {

const [value, setValue] = useState(null)
console.log({value})
  
  return (
    <Stack sx={{display:'flex', flexDirection:"row", alignItems:'center'}}>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={airports}
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      sx={{ width: 300, marginRight: '5px' }}
      renderInput={(params) => <TextField {...params} label="From" />}
    />

    <ConnectingAirportsIcon fontSize='small'  sx={{width:'40px', height:'40px',padding:'7px', borderRadius:'50px',color:'#fff', background: '#505168',}}/> 
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={airports}
      sx={{ width: 300, marginLeft: '5px',}}
      renderInput={(params) => <TextField {...params} label="To" />}
    />
    </Stack>
  )
}



export default Location