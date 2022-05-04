import React from 'react'
import Home from './Home'
import Signin from './Signin'
import {Route, Routes } from 'react-router-dom'
import { Signup } from './Signup'
import Flights from './Flights'

const Pages = () => {
  return (
    
    <div>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/flights' element={<Flights />}/>
      </Routes>
    
    </div>
  )
}

export default Pages