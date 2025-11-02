import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section1 from './components/section1/Section1'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
   <Section1/>
    
  </div>
    
  )
}

export default App
