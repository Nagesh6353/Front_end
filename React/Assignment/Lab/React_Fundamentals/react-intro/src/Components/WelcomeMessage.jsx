import React, { Component } from 'react'

class WelcomeMessage extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className='text-center text-info'>Class Component</h1>
                    <h2 className='text-center'>Welcome to React!</h2>
                </div>
                <hr className="my-5" />
            </div>
        )
    }
}

export default WelcomeMessage