// eslint-disable-next-line
import React, { useState } from 'react'
import Header from '../components/Header'
import { Box } from '@mui/system'
import { Button,  Container, Typography } from '@mui/material'
// import {useForm, Form} from '../components/useForm'
import FormInputs from '../components/FormInputs'
// import { NextPlanOutlined } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'




export const Signup = () => {

  const [values, setValues] = useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',

  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errormessage: "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errormessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errormessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errormessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ]
  
 

  const handleSubmit = (e) =>{
    e.preventDefault();
    
  }

  const onChange = (e) =>{
    setValues({...values, [e.target.name]: e.target.value})
  }

  console.log(values)

  return (
    <div>
        <Header />

        <Container maxWidth ="xl" sx={{width: '100%', height:'90vh', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>

          <Box sx={{height: '80vh', width:'90%', padding:'20px', background: '#F8F9FA',
            borderradius: '15px', display:'flex', justifyContent:'center', alignItems:'center',}}>

                <Box sx={{width:'50%', height:'100%', display:'flex',flexDirection:"column", justifyContent:'center', alignItems:'center'}}>
                  <Typography variant='h6'>Welcome To</Typography>
                  <Typography variant='h2'>Easyfly</Typography>
                </Box>
                <Box sx={{width:'50%', height:'100%', display:'flex',flexDirection:"column", justifyContent:'center', alignItems:'center',  borderLeft:'1px solid #202020'}}>
                 
                    <form onSubmit={handleSubmit}>

                      <Container sx={{width:'100%', height:'100%', display:'flex',flexDirection:"column", justifyContent:'center', alignItems:'center',}}>
                        
                        {inputs.map((input) =>( 
                        <FormInputs key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                        ))}

                        <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
                          <Button variant='contained' size='large' sx={{marginTop:"20px", width:'70%', bgcolor:'#F14336'}}>continue with google</Button>
                          <Button variant='contained' size='large' sx={{marginTop:"20px", width:'70%'}}>continue with facebook</Button>
                          <Button variant='contained' size='large' sx={{marginTop:"20px", width:'70%', bgcolor:'#e5e5e5', color:'#202020'}}>continue with apple</Button>
                        </Box>
                       
                        <NavLink to={"/"}>
                        <button className='submit'>SIGN UP</button>
                        </NavLink>
                      </Container>

                     
                    </form>
                 
                </Box>
            </Box>

        </Container>

    </div>
  )
}
