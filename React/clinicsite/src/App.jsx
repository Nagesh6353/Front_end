import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Home from './Website/Pages/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import About from './Website/Pages/About';
import Department from './Website/Pages/Department';
import Services from './Website/Pages/Services';
import Doctors from './Website/Pages/Doctors';
import DepartmentDetails from './Website/Pages/DepartmentDetails';
import ServiceDetails from './Website/Pages/ServiceDetails';
import Appointment from './Website/Pages/Appointment';
import TestiMonials from './Website/Pages/TestiMonials';
import Faq from './Website/Pages/Faq';
import Gallery from './Website/Pages/Gallery';
import Terms from './Website/Pages/Terms';
import Privacy from './Website/Pages/Privacy';
import NotFound from './Website/Pages/NotFound';
import Contact from './Website/Pages/Contact';
import Dashboard from './Admin/AdminPages/Dashboard';
import DoctorManage from './Admin/AdminPages/DoctorManage';
import AddDoctor from './Admin/AdminPages/AddDoctor';
import { ToastContainer } from 'react-toastify';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,   // animation only once
      offset: 100,
      easing: "ease-in-out",
    });

    // refresh for dynamic content
    AOS.refresh();
  }, []);
  return (

    <BrowserRouter>
      <div>
        <ToastContainer />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/department' element={<Department />} />
            <Route path='/services' element={<Services />} />
            <Route path='/doctor' element={<Doctors />} />
            <Route path='/departdetails' element={<DepartmentDetails />} />
            <Route path='/servdetails' element={<ServiceDetails />} />
            <Route path='/appointment' element={<Appointment />} />
            <Route path='/testimonial' element={<TestiMonials />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />

            {/* Admin Routes */}

            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/doctormanage' element={<DoctorManage />} />
            <Route path='/adddoctor' element={<AddDoctor />} />

          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App