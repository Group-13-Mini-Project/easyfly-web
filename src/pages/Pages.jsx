import React from 'react'
import Home from './Home'
import Signin from './Signin'
import {Route, Routes } from 'react-router-dom'

const Pages = () => {
  return (
    
    <div>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signin' element={<Signin />}/>
      </Routes>
    
    </div>
  )
}

export default Pages