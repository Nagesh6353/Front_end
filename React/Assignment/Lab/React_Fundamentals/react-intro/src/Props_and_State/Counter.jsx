import React, { useState } from 'react'

function Counter() {
    const [count,setcount] = useState(0);

    const increase = () => {
        setcount(count + 1);
    }
  return (
    <div>
        <div className="container">
            <h1 className="text-center text-info">State Component</h1>
            <h1 className="text-center">Count: {count} </h1>
            <button className="btn btn-success mx-auto" onClick={increase} style={{display:"block"}}>Increment</button>
        </div>
        <hr className="my-5" />
    </div>
  )
}

export default Counter