import React, { useEffect, useState } from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import PageTitle from '../Coman/PageTitle'
import axios from 'axios'

function Services() {

    const [service, setservice] = useState([]);

    useEffect(() => {
        fetchservice();
    }, [])

    const fetchservice = async () => {
        const res = await axios.get("http://localhost:3000/services");
        console.log(res.data);
        setservice(res.data);
    }

    return (
        <div>
            <Header />
            <main className="main">
                {/* Page Title */}
                <PageTitle name="Services" title="Services" />
                {/* End Page Title */}

                {/* Services Section */}
                <section id="services" className="services section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row gy-4">
                            {
                                service && service.map((data, index) => {
                                    console.log(data)
                                    return (
                                        <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={200}>
                                            <div className="service-item">
                                                <div className="service-image">
                                                    <img src={data.image} alt="Cardiology Services" className="img-fluid" />
                                                    <div className="service-overlay">
                                                        <i className="fas fa-heartbeat" />
                                                    </div>
                                                </div>
                                                <div className="service-content">
                                                    <h3>{data.name}</h3>
                                                    <p>{data.desc}</p>
                                                    <a href="service-details.html" className="service-btn">
                                                        <span>Learn More</span>
                                                        <i className="fas fa-arrow-right" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {/* End Service Item */}

                        </div>
                    </div>
                </section>{/* /Services Section */}
            </main>
            <Footer />
        </div>
    )
}

export default Services