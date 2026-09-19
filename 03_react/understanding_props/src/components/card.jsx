import React from 'react'

const Card = (props) => {
 console.log(props);
  return (
    <div className='card'>
      <img className='image' src={props.image} alt={`${props.user} profile`} />
      <h1>{props.user} {props.age}</h1>
      <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className='btn' type='button'>View Profile</button>
    </div>
  )
}

export default Card
