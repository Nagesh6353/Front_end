import React from 'react'
import Home from './website/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './website/pages/About'
import Service from './website/pages/Service'


function App() {
  return (

    <BrowserRouter>
      <div>
          <Routes>
               {/* website */}
               <Route path='/' element={<Home /> } />
               <Route path='/about' element={<About /> } />
               <Route path='/service' element={<Service /> } />
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App