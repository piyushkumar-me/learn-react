import React from 'react'
import '../App.css'

function Card(props) {

    console.log(props.name)
  return (
    <div className='card'>
        <img src= {props.img} alt="" />
        <h1>{props.name} {props.age} </h1>
        <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, sapiente!</p>
    </div>
  )
}

export default Card