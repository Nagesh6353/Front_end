import React from 'react'
import Task1 from './component/hooks/Task1'
import Task2 from './component/hooks/Task2'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Task3 from './component/hooks/Task3'
import Task4 from './component/hooks/Task4'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
            <Route path='/' element={<Task1 />} />
            <Route path='/task2' element={<Task2 />} />
            <Route path='/task3' element={<Task3 />} />
            <Route path='/task4' element={<Task4 />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App