import React from 'react'
import Header from '../coman/Header'
import Footer from '../coman/Footer'

function About() {
    return (
        <div>
            <Header />
            {/* About Start */}
            <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                <div className="container about px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: 400 }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src="img/about.jpg" style={{ objectFit: 'cover' }} alt />
                            </div>
                        </div>
                        <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                            <div className="p-lg-5 pe-lg-0">
                                <h6 className="text-primary">About Us</h6>
                                <h1 className="mb-4">25+ Years Experience In Solar &amp; Renewable Energy Industry</h1>
                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                                <p><i className="fa fa-check-circle text-primary me-3" />Diam dolor diam ipsum</p>
                                <p><i className="fa fa-check-circle text-primary me-3" />Aliqu diam amet diam et eos</p>
                                <p><i className="fa fa-check-circle text-primary me-3" />Tempor erat elitr rebum at clita</p>
                                <a href className="btn btn-primary rounded-pill py-3 px-5 mt-3">Explore More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}

            <Footer />

        </div>
    )
}

export default About