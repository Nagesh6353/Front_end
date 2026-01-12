import React from 'react'
import ReactIntro from './ReactIntro'
import JSXExample from './JSX/JSXExample'
import Greeting from './Components/Greeting'
import WelcomeMessage from './Components/WelcomeMessage'

function App() {
  return (
    <div>
      <ReactIntro />
      <JSXExample />
      <Greeting name="Nagesh Kumavat" />
      <WelcomeMessage />
    </div>
  )
}

export default App