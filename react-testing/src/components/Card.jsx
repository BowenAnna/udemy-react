import React from 'react'

export default function Card(props) {
  return (
    <div>
        <h2>Name: {props.name}</h2>
        <img src={props.img}/> 
        <p>Family: {props.family}</p>
    </div>
  )
}
