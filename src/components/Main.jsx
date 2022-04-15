import { Box, Container, CssBaseline, } from '@mui/material';
import Class from './Class';
import React from 'react'
import Passengers from './Passengers';
import Trip from './Trip';

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
        </Box>
      </Container>
    </div>
  )
}

export default Main