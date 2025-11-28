import React, { useContext } from 'react'
import { TheameContext } from '../contex/Teame';

function Navbar() {
    
    const [theame,settheme] =  useContext(TheameContext)
    
    const chanageThemeHandler = () =>{
        if (theame === 'light') {
            settheme('darck')
        }
        if (theame === 'darck') {
            settheme('light')
        }
    }
    
    
  return (
    <div className=   { theame} >
        
       <h4>home</h4>
       <h4> about</h4>
       <h4>contect</h4>
       <h4> {theame}</h4>
       <button
       onClick={chanageThemeHandler}
       >chnage</button>
    </div>
  )
}

export default Navbar