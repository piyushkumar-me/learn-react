import { useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    

  const [users, setusers] = useState([])

  // localStorage.setItem("user","piyush")

  // const user = {
  //           "users":"piysuh",
  //           "age":"20",
  //           "branch":"CSE"
  // }

  // localStorage.setItem("info",JSON.stringify(user))

  // const info = localStorage.getItem("info")
  // console.log(info)
  // console.log(JSON.parse(info));
  

  const data = async ()=>{

    // const user =   await fetch("https://jsonplaceholder.typicode.com/todos/")
    //      const Data = await user.json();
    //      setusers(Data)
    //      console.log(Data);

      const res = await axios.get('https://jsonplaceholder.typicode.com/todos/')
          console.log(res);
          setusers(res.data)
          
     
  }

  return (
   <div>
    <button onClick={data}>fect data </button>
    {
      users.map(function(elem,idx){
        return <h1>{idx}</h1>
      })
     
      
    }
   </div>
  )
}

export default App
