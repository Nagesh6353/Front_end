import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import PageTitle from '../Coman/PageTitle'
import axios from 'axios'

function Doctors() {

    const [doctors, setdoctors] = useState([]);

    useEffect(() => {
        fetchdoctors();
    }, [])

    const fetchdoctors = async () => {
        const res = await axios.get("http://localhost:3000/doctors");
        setdoctors(res.data);
    }

    return (
        <div>
            <Header />
            <main className="main">
                {/* Page Title */}
                <PageTitle name="Doctors" title="Doctors" />
                {/* End Page Title */}

                {/* Doctors Section */}
                <section id="doctors" className="doctors section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row gy-4">
                            {
                                doctors && doctors.map((data, index) => {
                                    return (
                                        <div className="col-lg-3 col-md-6" key={index} data-aos="fade-up" data-aos-delay={100}>
                                            <div className="doctor-card">
                                                <div className="doctor-image">
                                                    <img src={data.image} className="img-fluid" />
                                                    <div className="doctor-overlay">
                                                        <div className="social-links">
                                                            <a href="#!"><i className="bi bi-linkedin" /></a>
                                                            <a href="#!"><i className="bi bi-envelope" /></a>
                                                            <a href="#!"><i className="bi bi-phone" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="doctor-content">
                                                    <h4>{data.name}</h4>
                                                    <span className="specialty">{data.specialist}</span>
                                                    <p>{data.desc}</p>
                                                    <div className="doctor-meta">
                                                        <div className="experience">
                                                            <i className="bi bi-award" />
                                                            <span>{data.experience}</span>
                                                        </div>
                                                        <div className="department">
                                                            <i className="bi bi-building" />
                                                            <span>{data.department}</span>
                                                        </div>
                                                    </div>
                                                    <a href="appointment.html" className="btn-appointment">Book Appointment</a>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </section>{/* /Doctors Section */}
            </main>
            <Footer />

        </div>
    )
}

export default Doctors