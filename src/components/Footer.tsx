import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React, {FC} from 'react';

const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = {
        facebook: "https://www.facebook.com/estopdrivingschool/#!",
        instagram: "https://www.facebook.com/estopdrivingschool/#!",
        yelp: "#!",
        twitter: "#!"
    };

    return (
        <footer className="bg-dark text-white pt-5 pb-3 mt-auto border-top border-danger border-4">
            <div className="container">
                <div className="row gy-4">

                    <div className="col-lg-4 col-md-6">
                        <h5 className="text-uppercase fw-bold mb-3">
                            eStop <span className="text-danger">Driving School</span>
                        </h5>
                        <p className="small text-secondary">
                            "Speak STOP Fluently and Flawlessly For Life!" <br/>
                            Providing expert behind-the-wheel instruction in Marin and Sonoma County since 1983.
                        </p>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <h6 className="text-uppercase fw-bold mb-3 small">RESOURCES</h6>
                        <ul className="list-unstyled small">
                            <li className="mb-2">
                                <a href="/sitemap"
                                   className="text-secondary text-decoration-none hover-white">SITEMAP</a>
                            </li>
                            <li className="mb-2">
                                <a href="/privacy-policy" className="text-secondary text-decoration-none hover-white">PRIVACY
                                    POLICY</a>
                            </li>
                            <li className="mb-2">
                                <a href="/terms" className="text-secondary text-decoration-none hover-white">TERMS OF
                                    SERVICE</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h6 className="text-uppercase fw-bold mb-3 small">Contact Us</h6>
                        <ul className="list-unstyled small text-secondary">
                            <li className="mb-2">
                                <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                                Novato, CA 94945
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-telephone-fill text-danger me-2"></i>
                                415-897-7002
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-chat-dots-fill text-danger me-2"></i>
                                Text Friendly!
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 text-center text-lg-start">
                        <h6 className="text-uppercase fw-bold mb-3 small">Connect With Tony</h6>
                        <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                            <a href={socialLinks.facebook} className="btn btn-outline-light btn-sm rounded-circle">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href={socialLinks.instagram} className="btn btn-outline-light btn-sm rounded-circle">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href={socialLinks.yelp} className="btn btn-outline-light btn-sm rounded-circle">
                                <i className="bi bi-yelp"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="mt-4 mb-3 border-secondary opacity-25"/>
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="x-small text-secondary mb-0 footer-copy">
                            &copy;{currentYear} eStop Driving School. All Rights Reserved. Developed For The Safety of
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;