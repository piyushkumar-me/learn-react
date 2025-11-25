import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [first, setfirst] = useState({ user: "piyus", age: 20 })
const [arr, setarr] = useState([10,11,12])
  const [num, setnum] = useState(0);
  const increaseNum = () => {
    setnum(num + 1)

  }
  const decreaseNum = () => {
    setnum(num - 1)

  }
  const click = () => {

    // const newcpoy = {...first};
    // newcpoy.age = 10
    // newcpoy.user = "sneha"

    setfirst(prev => ({ ...first, age: 16 }))
  }

  const Arr =() =>{
        console.log(arr);
    
          setarr([...arr, arr[arr.length-1]+1]);
          console.log(arr);
          
  }
  
  return (
    <>
      <div>
        <h1> {first.user},{first.age} </h1>
        <div className="box"> {num}</div>
        <button onClick={increaseNum}>increaseNum</button>
        <button onClick={decreaseNum}>DecreaseNum</button>
        <button onClick={click}>DecreaseNum</button>
        <button onClick={Arr}> arrnpm</button>


      </div>
    </>
  )
}

export default App
