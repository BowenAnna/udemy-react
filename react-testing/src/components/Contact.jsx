import React from 'react';
import "../styles.css";
import Avatar from './Avatar';

export default function Contact(props) {
  return (
    <div>
    <div className="card">
      <div className="top">
        <p>Key {props.id}</p>
        <h2 className='name'>{props.name}</h2>
       <Avatar img={props.img}/>
      </div>
      <div className="bottom">
        <p className='info'>{props.phone}</p>
        <p className='info'>{props.email}</p>
      </div>
    </div>
  </div>
  )
}
