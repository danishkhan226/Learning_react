import React from 'react'
import { useParams } from 'react-router-dom'

const Coursedetail = () => {

  const param = useParams();  

  return (
    <div>
        <h1>{param.courseid} Course Detail</h1>
    </div>
  )
}

export default Coursedetail