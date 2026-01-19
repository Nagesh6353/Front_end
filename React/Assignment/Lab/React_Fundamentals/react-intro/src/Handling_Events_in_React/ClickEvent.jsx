import React, { useState } from 'react'

function ClickEvent() {

    const [text,settext] = useState("Not Clicked");

    const textchange = () => {
        settext("Clicked");
    }

  return (
    <div>
        <div className="container">
            <h1 className="text-center text-info">Handling Events in React</h1>
            <h1 className="text-center" >Button is: {text}</h1>
            <button className="btn btn-success mx-auto" onClick={textchange} style={{display:"block"}}>Change Text</button>
        </div>
        <hr className="my-5" />
    </div>
  )
}

export default ClickEvent