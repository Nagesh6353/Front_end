import React from 'react'

function JSXExample() {

    const framework = "React";
    const purpose = "building user interfaces";

    return (
        <div>
            <div className="container">
                <h1 className='text-center text-info mt-5'>Welcome to JSX</h1>

                <p className='text-center '>JSX is a syntax extension used in {framework} for {purpose}.It allows us to write HTML-like code inside JavaScript.</p>
                
            </div>
            <hr className='my-5' />
        </div>
    )
}

export default JSXExample