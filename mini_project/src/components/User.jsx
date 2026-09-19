import React from 'react'

const User = (props) => {
  console.log(props);
  return (
    <div style={{'color':'white'}}>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </div>
  )
}

export default User
