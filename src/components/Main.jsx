import { Box, Button, Container, CssBaseline, } from '@mui/material';
import Class from './Class';
import React from 'react'
import Passengers from './Passengers';
import Trip from './Trip';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import DateRange from './DateRange';
import Location from './Location';
import { NavLink } from 'react-router-dom';


const Main = () => {


  

  return (
    <div>
    <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '31vh', borderRadius: '10px', padding:'20px', background: 'rgba(255, 255, 255, 0.77)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(5px)',
            borderradius: '15px',}}>
            
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
              <NavLink to={"/flights"}>
               <Button variant='contained' size='medium' sx={{marginTop: '10px', float: 'right', width:'200px', background: '#505168',}}>search flight   <ArrowRightAltIcon fontSize="large" /> </Button>
              </NavLink>
            </div>
        </Box>
      </Container>
    </div>
  )
}

export default Main