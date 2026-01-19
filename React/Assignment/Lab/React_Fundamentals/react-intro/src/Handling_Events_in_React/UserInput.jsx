import React, { useState } from 'react'

function UserInput() {

    const [text,settext] = useState();

    const textchange = (e) => {
        settext(e.target.value);
    }

    return (
        <div>
            <div className="container">
                <h1 className="text-center text-info">Handling Events in React</h1>
                <h2 className="text-center">Form Input</h2>
                <form>
                    <div className="mb-3 col-4 mx-auto">
                        <input type="text" className="form-control" onChange={textchange} placeholder='Type something Here...' />
                    </div>
                </form>

                <h2 className="text-center">You Typed: {text} </h2>

            </div>
            <hr className="my-5" />
        </div>
    )
}

export default UserInput