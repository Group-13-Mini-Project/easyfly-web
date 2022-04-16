import { Box, Button, Container, CssBaseline, } from '@mui/material';
import Class from './Class';
import React from 'react'
import Passengers from './Passengers';
import Trip from './Trip';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import DateRange from './DateRange';
import Location from './Location';


const Main = () => {

  return (
    <div>
    <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '30vh', borderRadius: '10px', padding:'20px', background: '#FFFFFF',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
            borderradius: '15px'}}>
            
            <div>
                <Box sx={{ height: '40px', width:'45%', display:'flex', justifyContent:'space-between',}}>
                    <Trip />
                    <Class />
                    <Passengers />
                </Box>
            </div>

            <div>
                <Box sx={{height: '100px', width:'100%', display:'flex', justifyContent:'space-between',alignItems:'center', marginTop: '15px'}}>
                    <Location />
                    <DateRange />
                </Box>
            </div>

            <div>
              <Button variant='contained' size='medium' sx={{marginTop: '10px', float: 'right', width:'200px', background: '#505168',}}>search flight   <ArrowRightAltIcon fontSize="large" /> </Button>
            </div>
        </Box>
      </Container>
    </div>
  )
}

export default Main