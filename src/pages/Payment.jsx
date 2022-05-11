import React from 'react'
import Header from '../components/Header'
import { Container, Box, Typography, Button, TextField} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Payment = () => {
  return (

    <div>
    <Header />

    <Container maxWidth ="xl" sx={{width: '100%', height:'90vh', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
    <Box sx={{height: '80vh', width:'90%', padding:'20px', background: '#F8F9FA',
            borderradius: '15px', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center',}}>

            <Typography variant='h6'>Select Payment Method</Typography>
            <Box sx={{height: '70px',width:"60%", display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', marginTop:'50px'}}>
                <Button variant='outlined' size='large' sx={{color: '#202020', border: '1px solid #202020', padding:"15px"}}><FontAwesomeIcon icon="fa-brands fa-paypal" /> paypal</Button>
                <Button variant='outlined' size='large' sx={{color: '#202020', border: '1px solid #202020', padding:"15px"}}><AppleIcon /> Apple Pay</Button>
                <Button variant='outlined' size='large' sx={{color: '#202020', border: '1px solid #202020', padding:"15px"}}><GoogleIcon /> Google Pay</Button>
                <Button variant='outlined' size='large' sx={{color: '#202020', border: '1px solid #202020', padding:"15px"}}>Mobile Money</Button>
            </Box>
            <Box sx={{height: '70px',width:"60%", display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', marginTop:'50px'}}>
            <TextField id="outlined-basic" label="Card Number" variant="outlined" sx={{width:"45%"}} />
            <TextField id="outlined-basic" label="CVC" variant="outlined" sx={{width:"45%"}}/>
            </Box>
    </Box>
    </Container>
    </div>

  )
}

export default Payment