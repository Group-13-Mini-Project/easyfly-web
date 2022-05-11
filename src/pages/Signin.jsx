
import React,{useState, useEffect} from 'react'
import Header from '../components/Header'
import { Box } from '@mui/system'
import { Button,  Container,  TextField, Typography } from '@mui/material'
import {useForm, Form} from '../components/useForm'





const Signin = () => {

  
  
  return (
    <div>
        <Header />

        <Container maxWidth ="xl" sx={{width: '100%', height:'90vh', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>

          <Box sx={{height: '80vh', width:'90%', padding:'20px', background: '#F8F9FA',
            borderradius: '15px', display:'flex', justifyContent:'center', alignItems:'center',}}>

                <Box sx={{width:'50%', height:'100%', display:'flex',flexDirection:"column", justifyContent:'center', alignItems:'center'}}>
                  <Typography variant='h6'>Welcome Back To</Typography>
                  <Typography variant='h2'>Easyfly</Typography>
                </Box>
                <Box sx={{width:'50%', height:'100%', display:'flex',flexDirection:"column", justifyContent:'center', alignItems:'center',  borderLeft:'1px solid #202020'}}>
                  
                <Form>
                      <Container sx={{width:'100%', height:'100%', display:'flex',flexDirection:"column", justifyContent:'center', alignItems:'center',}}>
                        <TextField required variant='standard' label="Full Name"  name='fullName' value={values.fullName}  onChange={handleInputChange} sx={{width:'80%'}}/>
                        <TextField variant='standard' label="Email"  name='email' value={values.email} sx={{width:'80%', marginTop:'20px' }}/>

                        
                        <TextField variant='standard' label="Password"  name='password' value={values.password} sx={{width:'80%', marginTop:'20px' }}/>
                        <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
                          <Button variant='contained' size='large' sx={{marginTop:"20px", width:'80%', bgcolor:'#F14336'}}>continue with google</Button>
                          <Button variant='contained' size='large' sx={{marginTop:"20px", width:'80%'}}>continue with facebook</Button>
                          <Button variant='contained' size='large' sx={{marginTop:"20px", width:'80%', bgcolor:'#e5e5e5', color:'#202020'}}>continue with apple</Button>
                        </Box>
                          <Button  variant='contained' size='medium' sx={{marginTop:'20px', bgcolor:"#505168" }}>Sign in</Button>
                      </Container>
                    </Form>

                </Box>
            </Box>

        </Container>

    </div>
  )
}

export default Signin