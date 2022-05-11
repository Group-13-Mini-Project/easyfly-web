import React, { useState } from 'react'
import { Input } from '@mui/material'
import './formInput.css'

const FormInputs = (props) => {

const [focused, setFocused] = useState(false)

const handleFocus = (e) => {
    setFocused(true);
}
const {label, errormessage, onChange, id, ...inputProps} = props;
  
  return (
    <div className='formInputs'>
        {/* <label>{label}</label> */}
        <input variant='outlined' className='input' {...inputProps} onChange={onChange} onBlur={handleFocus} onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)} focused={focused.toString()}/>
        <span>{errormessage}</span>
        
    </div>
  )
}

export default FormInputs