import React from 'react'
import Header from '../ComanFile/Header'
import Footer from '../ComanFile/Footer'
import { Link, Outlet, useNavigate } from 'react-router'

function About() {
    return (
        <div>
            <Header />
            {/* About Section */}
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center mb-4">About Us</h2>
                    <div className="row align-items-center">
                        <div className="col-md-8 mx-auto">
                            <p className='bg-warning'>
                                Welcome to our website! We are a small team passionate about building
                                simple, user-friendly, and responsive web solutions.
                            </p>
                            <p className='bg-warning'>
                                Our goal is to provide quality services using modern technologies like
                                HTML, CSS, Bootstrap, and JavaScript.
                            </p>
                            <Link className='btn btn-info mx-2' to="/about/about1">About 1</Link>
                            <Link className='btn btn-info mx-2' to="/about/about2">About 2</Link>

                            <Outlet />
                        </div>
                        
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default About