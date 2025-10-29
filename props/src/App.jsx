import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {


  return (
    <div className='perant'>
      <Card name='piyush' age={20} img="https://images.unsplash.com/vector-1759412800418-0fd6ebb8a8f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=578" />
      <Card name="shudir" age={2043} img = "https://images.unsplash.com/vector-1756712391629-accfef663444?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580" />
      <Card name="sneha" age={204} img = "https://plus.unsplash.com/premium_vector-1758442898397-8910ade6e9c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=798"/>
      <Card name="muskan" age={4} img = "https://plus.unsplash.com/premium_vector-1758442898397-8910ade6e9c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=798" />
    </div>
  )
}

export default App
