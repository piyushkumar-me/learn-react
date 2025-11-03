import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const click = () => {
    console.log("click mei");

  }

  // const inputChange = (val) => {
  //   console.log("typing .... ", val);

  // }

  const mouseEnter = () =>{
  console.log("mouse enter...");
    
  }
  const mouseleave = () =>{
  console.log("mouseleave...");
    
  }

  return (
    <>

      <div className='flex justify-center items-center w-screen h-screen' >
        {/* <button className=' p-3 rounded-2xl bg-red-600' onClick={click} >click me</button> */}
        {/* <input onChange={(elm) => {
         inputChange(elm.target.value);
         
        }}
          type="text"
          name=""
          id=""
          className='h-9   border-2 border-red-950 ' /> */}

        <div onMouseEnter={mouseEnter} onMouseLeave={mouseleave} className='  h-32 w-32 border-2 border-black rounded-full'></div>
        <div className='  h-32 w-32 border-2 border-black rounded-full'></div>
      </div>
    </>
  )
}

export default App
