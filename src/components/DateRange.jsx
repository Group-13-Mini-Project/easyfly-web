import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Stack } from '@mui/material';
import { Box, flexbox } from '@mui/system';

const DateRange = () => {
    const [value, setValue] = React.useState(null);
    const [rdate, setRdate] = React.useState(null);
  return (
    <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack sx={{ width:'400px', display: flexbox, flexDirection: 'row', alignItems:"center" }}>
                <Box>
                    <DatePicker
                        label="Departure"
                        value={value}
                        onChange={(newValue) => {
                        setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}

                    />
                </Box>


                <Box sx={{marginLeft: '20px'}}>
                    <DatePicker
                        label="Return"
                        value={rdate}
                        onChange={(newValue) => {
                        setRdate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>
            </Stack>
        </LocalizationProvider>
    </div>
  )
}

export default DateRange 