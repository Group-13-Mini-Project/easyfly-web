import { Button, Container, CssBaseline, Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom'
import React from 'react'

const Hero = () => {
  return (
    <div>
      <main>
      <CssBaseline />
      <Container maxWidth="xl" sx={{padding: '50px', display:'flex', justifyContent:'start', alignItems: 'center'}}>
        <Box sx={{ height: '45vh', padding: '50px 0',}} >
          <Typography variant='h2'>Hey there! Where Would <br /> Like To Fly to?</Typography>

          <NavLink to={'/signup'}>
                <Button variant='contained' size='large' sx={{ background: '#505168', marginTop:'60px' }}>register</Button>
          </NavLink>
        </Box>
      </Container>
         
      </main>
    </div>
  )
}

export default Hero