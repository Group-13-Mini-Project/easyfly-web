import { Container, CssBaseline, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Header from '../components/Header'
import Location from '../components/Location'
import DateRange from '../components/DateRange'
import Pskeleton from '../components/Pskeleton'



const Flights = () => {
  return (
    <div>
        <Header />

        <CssBaseline />
        <Container maxWidth='xl' sx={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',}}>
            <Box sx={{height: '15vh', width:'90%',  borderRadius: '10px', padding:'10px', background: '#F8F9FA',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
            borderradius: '15px',}}>

                <Box sx={{height: '100px', width:'100%', display:'flex', justifyContent:'space-between',alignItems:'center', position:'static'}}>
                    <Location />
                    <DateRange />
                </Box>

            </Box>
            <Box sx={{ width: '82%', display:'flex', justifyContent:'flex-start'}}>
                <Typography variant='h6' sx={{marginTop:'50px'}}>Available FLights</Typography>   
            </Box>
            <Container maxWidth="lg" sx={{height: '100vh', width:'100%',display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center', padding:'10px', background: '#F8F9FA', bgcolor:'#fff'}}>
                
               <Pskeleton />
               <Pskeleton />
               <Pskeleton />
               <Pskeleton />
               <Pskeleton />

            </Container>
        </Container>
    </div>
  )
}

export default Flights