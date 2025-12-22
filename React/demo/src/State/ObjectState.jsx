import React, { useState } from 'react'
import ImageData from './ImageData'

function ObjectState() {
    const [data,setdata] = useState(
        {
        name: "nagesh",
        count: 0,
        isImage : true
    }
    )
  return (
    <div>
        <h1>Object State</h1>
        <h2>Hello,{data.name}</h2>
        <button onClick={()=>setdata({...data,name : "Gaurav"})}>Change Name</button>

        <hr />
        <h2>Count: {data.count}</h2>
        <button onClick={()=>setdata({...data,count : data.count + 1})}>Increment</button>
        <button onClick={()=>setdata({...data,count : data.count - 1})}>Decrement</button>
        <button onClick={()=>setdata({...data,count : 0})}>Zero</button>

        <hr />

        {
            (data.isImage)?<ImageData /> : false
        }

        <button onClick={()=>setdata({...data,isImage : false})}>Hide</button>
        <button onClick={()=>setdata({...data,isImage : true})}>Show</button>
        <button onClick={()=>setdata({...data,isImage : !data.isImage})}>Toggle</button>
    </div>
  )
}

export default ObjectState