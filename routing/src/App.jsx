import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Notefount from './components/Notefount'
import Product from './components/Product'
import Men from './components/Men'
import Women from './components/Women'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <div>
        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
        <Link to='/contact'>contact</Link>
        <Link to='/Product'>Product</Link>

      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />

        <Route path='/Product' element={<Product />}>

          <Route path='Men' element={<Men />} />
          <Route path='Women' element={<Women />} />
        </Route>



        <Route path='*' element={<Notefount />} />

      </Routes>
    </div>
  )
}

export default App
