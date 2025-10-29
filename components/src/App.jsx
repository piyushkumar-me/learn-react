import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './compnents/Navbar'
import Hero from './compnents/Hero'
import Footer from './compnents/Footer'

function App() {
  return (
    <div>
      <div className='nav'>
        <Navbar />        // this is an component
      </div>

      <div className='hero'>
        <Hero />   // this is an component
      </div>

      <div className="footer">
        <Footer />  // this is an component
      </div>

    </div>
  )




}

export default App
