import React, { useEffect, useState } from 'react'
import Header from '../coman/Header'
import Footer from '../coman/Footer'
import axios from 'axios';

function Service() {

    const [servicesdata, setservicesdata] = useState([]);

    useEffect(() => {
        fetchServices();
    }, [])

    const fetchServices = async () => {
        const res = await axios.get("http://localhost:3000/services");
        setservicesdata(res.data);
    }

    return (
        <div>
            <Header />

            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                        <h6 className="text-primary">Our Services</h6>
                        <h1 className="mb-4">We Are Pioneers In The World Of Renewable Energy</h1>
                    </div>
                    <div className="row g-4">
                        {
                            servicesdata && servicesdata.map((data, index) => {
                                return (
                                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="service-item rounded overflow-hidden">
                                            <img className="img-fluid" src={data.image} alt />
                                            <div className="position-relative p-4 pt-0">
                                                <div className="service-icon">
                                                    <i className="fa fa-solar-panel fa-3x" />
                                                </div>
                                                <h4 className="mb-3">{data.name}</h4>
                                                <p>{data.desc}</p>
                                                <a className="small fw-medium" href>Read More<i className="fa fa-arrow-right ms-2" /></a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {/* Service End */}


            <Footer />
        </div>
    )
}

export default Service