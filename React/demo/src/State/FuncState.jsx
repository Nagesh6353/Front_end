import React, { useState } from 'react'
import ImageData from './ImageData';

function FuncState() {
    const [name,setname] = useState("Nagesh");
    const [count,setcount] = useState(0);
    const [isImage,setisImage] = useState(true);

  return (
    <div>
        <h1>Function State</h1>
        <h2>Hello,{name}</h2>
        <button onClick={()=>setname("Gaurav")}>Change Name</button>
        <hr />
        <h2>Count: {count}</h2>
        <button onClick={()=>setcount(count + 1)}>Increment</button>
        <button onClick={()=>setcount(count - 1)}>Decrement</button>
        <button onClick={()=>setcount(0)}>Zero</button>

        <hr />
        <button onClick={()=>setisImage(false)}>Hide</button>
        <button onClick={()=>setisImage(true)}>Show</button>
        <button onClick={()=>setisImage(!isImage)}>Toggle</button>

        {
            (isImage) ? <ImageData /> : false
        }
    </div>
  )
}

export default FuncState