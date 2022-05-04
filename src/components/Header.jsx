import React from 'react';
import { Typography, AppBar, CssBaseline, Toolbar} from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';



const Header = () => {
  
  return (
    <div>
        <CssBaseline />
        <AppBar elevation={0} sx={{ 
        position: 'relative',
        background: 'none',
         }}>
          <Toolbar sx={{ 
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center', }}>
            
            <NavLink to={'/'}>
              <Typography className='title' variant='h6'  component="div" sx={{ flexGrow: 1, color: '#505168' }}>EasyFly</Typography>
            </NavLink>

            <ButtonGroup size="small" aria-label="small button group">

              <NavLink to={'/signup'}>
                <Button className='reg' variant='Text' sx={{ color: '#505168' }}>Register</Button>
              </NavLink>

              <NavLink to={'/signin'}>
                <Button variant='contained' size='medium' sx={{ background: '#505168' }}>Sign In</Button>
              </NavLink>
              
              
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      
    </div>
  )
}

export default Header