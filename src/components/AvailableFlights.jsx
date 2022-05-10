import React from 'react'
import { Box, Button } from '@mui/material'
import Pskeleton from './Pskeleton'
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import { NavLink } from 'react-router-dom';

const AvailableFlights = () => {
  return (
    <Box sx={{height: '140px',width:"100%", borderRadius: '10px', padding:'20px', background: 'rgba(255, 255, 255, 0.77)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(5px)',
    borderradius: '15px', marginTop:'20px', display:'flex',flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Pskeleton />
        <div> 
        <NavLink to={'/payment'}>  
        <Button variant='contained' size='medium' sx={{background:'#505168'}}><AirplaneTicketIcon />BOOK</Button>
        </NavLink>  
        </div>
    </Box>
  )
}

export default AvailableFlights