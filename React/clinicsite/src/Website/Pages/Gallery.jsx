import React from 'react'
import PageTitle from '../Coman/PageTitle'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'

function Gallery() {
    return (
        <div>
            <Header />
            <main className="main">
                {/* Page Title */}
                    <PageTitle title="Gallery" name="Gallery" />
                {/* End Page Title */}

                {/* Gallery Section */}
                <section id="gallery" className="gallery section">
                    <div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row gy-4 justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery/gallery-1.webp" className="img-fluid" alt />
                                    <div className="gallery-links d-flex align-items-center justify-content-center">
                                        <a href="assets/img/gallery/gallery-1.webp" title="Gallery 1" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>
                                        <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg" /></a>
                                    </div>
                                </div>
                            </div>{/* End Gallery Item */}
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery/gallery-2.webp" className="img-fluid" alt />
                                    <div className="gallery-links d-flex align-items-center justify-content-center">
                                        <a href="assets/img/gallery/gallery-2.webp" title="Gallery 2" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>
                                        <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg" /></a>
                                    </div>
                                </div>
                            </div>{/* End Gallery Item */}
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery/gallery-3.webp" className="img-fluid" alt />
                                    <div className="gallery-links d-flex align-items-center justify-content-center">
                                        <a href="assets/img/gallery/gallery-3.webp" title="Gallery 3" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>
                                        <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg" /></a>
                                    </div>
                                </div>
                            </div>{/* End Gallery Item */}
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery/gallery-4.webp" className="img-fluid" alt />
                                    <div className="gallery-links d-flex align-items-center justify-content-center">
                                        <a href="assets/img/gallery/gallery-4.webp" title="Gallery 4" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>
                                        <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg" /></a>
                                    </div>
                                </div>
                            </div>{/* End Gallery Item */}
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery/gallery-5.webp" className="img-fluid" alt />
                                    <div className="gallery-links d-flex align-items-center justify-content-center">
                                        <a href="assets/img/gallery/gallery-5.webp" title="Gallery 5" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>
                                        <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg" /></a>
                                    </div>
                                </div>
                            </div>{/* End Gallery Item */}
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery/gallery-6.webp" className="img-fluid" alt />
                                    <div className="gallery-links d-flex align-items-center justify-content-center">
                                        <a href="assets/img/gallery/gallery-6.webp" title="Gallery 6" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>
                                        <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg" /></a>
                                    </div>
                                </div>
                            </div>{/* End Gallery Item */}
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery/gallery-7.webp" className="img-fluid" alt />
                                    <div className="gallery-links d-flex align-items-center justify-content-center">
                                        <a href="assets/img/gallery/gallery-7.webp" title="Gallery 7" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>
                                        <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg" /></a>
                                    </div>
                                </div>
                            </div>{/* End Gallery Item */}
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="gallery-item h-100">
                                    <img src="assets/img/gallery/gallery-8.webp" className="img-fluid" alt />
                                    <div className="gallery-links d-flex align-items-center justify-content-center">
                                        <a href="assets/img/gallery/gallery-8.webp" title="Gallery 8" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>
                                        <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg" /></a>
                                    </div>
                                </div>
                            </div>{/* End Gallery Item */}
                        </div>
                    </div>
                </section>{/* /Gallery Section */}
            </main>
            <Footer />

        </div>
    )
}

export default Gallery