import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import DjsProductAxios from "./UseEffect/DjsProductAxios";
import DjsCartsAxios from "./UseEffect/DjsCartsAxios";
import Header from "./Layout/ComanFile/Header";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Layout/Pages/Home";
import About from "./Layout/Pages/About";
import Contact from "./Layout/Pages/Contact";
import About1 from "./Layout/Pages/About1";
import About2 from "./Layout/Pages/About2";
import NotFound from "./Layout/Pages/NotFound";
// import ClassComponents from "./components/ClassComponent";
// import Function from "./components/Function";
// import Hello from "./Jsx/Hello";
// import Data from "./Css/Data";
// import MainProps from "./Props/MainProps";
// import MainState from "./State/MainState";
// import FormData from "./formHandling/FormData";
// import FormObj from "./formHandling/FormObj";
// import ApiDataEffect from "./UseEffect/ApiDataEffect";
// import FsUserAxios from "./UseEffect/FsUserAxios";
// import DjsUserAxios from "./UseEffect/DjsUserAxios";



function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <h1>Hello This is App JS Data</h1> */}
        {/* <ClassComponents /> */}
        {/* <ClassComponents /> */}
        {/* <Function /> */}
        {/* <Hello/> */}
        {/* <Data /> */}
        {/* <MainProps /> */}
        {/* <MainState /> */}

        {/* <FormData /> */}
        {/* <FormObj /> */}

        {/* <ApiDataEffect /> */}

        {/* <FsUserAxios /> */}

        {/* <DjsUserAxios /> */}

        {/* <DjsProductAxios /> */}

        {/* <DjsCartsAxios /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />}>
              <Route path="about1" element={<About1 />}/>
              <Route path="about2" element={<About2 />}/>
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App;