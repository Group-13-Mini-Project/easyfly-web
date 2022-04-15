import React from 'react'
import Main from '../components/Main'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='home'>
        <Header />
        <Hero />
        <Main />
    </div>

  )
}

export default Home