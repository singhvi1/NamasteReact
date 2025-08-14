import React from 'react'
import { useState } from 'react'

const User = (props) => {
    const {name,location}=props
    const [count,setCount]=useState(0);
    const incrCount=()=>{
        setCount(count +1)
    }
  return (
    <div className='user-card'>     
      <h2>Name :{name}</h2>
      <h3>location : {location}</h3>
      <h4>contact : @Viaks</h4>
      <h4>count : {count}</h4>
      <button onClick={incrCount}>count</button>
    </div>
  )
}

export default User

