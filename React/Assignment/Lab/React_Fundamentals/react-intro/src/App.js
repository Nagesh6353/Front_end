import React from 'react'
import ReactIntro from './ReactIntro'
import JSXExample from './JSX/JSXExample'
import Greeting from './Components/Greeting'
import WelcomeMessage from './Components/WelcomeMessage'
import UserCard from './Props_and_State/UserCard'
import Counter from './Props_and_State/Counter'
import ClickEvent from './Handling_Events_in_React/ClickEvent'
import UserInput from './Handling_Events_in_React/UserInput'

function App() {
  return (
    <div>
      <ReactIntro />
      <JSXExample />
      <Greeting name="Nagesh Kumavat" />
      <WelcomeMessage />
      <UserCard name="Nagesh Kumavat" age="23" location="Ahmedabad" />
      <Counter />
      <ClickEvent />
      <UserInput />
    </div>
  )
}

export default App