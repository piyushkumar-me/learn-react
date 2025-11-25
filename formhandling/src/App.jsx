import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
     <div>
      <form action=""  onSubmit={(e)=>{
        e.preventDefault();
        console.log(e.target);
      }}>
       <input type="text" name="" id="" />
      <button type='submit' ></button>
      </form>
     </div>
    </>
  )
}

export default App
