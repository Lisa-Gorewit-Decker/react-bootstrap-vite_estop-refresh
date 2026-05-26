import React, {FC} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sitemap: FC = () => {
    const sections = [
        {
            title: "Main Pages",
            links: [
                { name: "Home", path: "/" },
                { name: "About Tony", path: "/about" },
                { name: "Contact & Booking", path: "/contact" },
            ]
        },
        {
            title: "Services",
            links: [
                { name: "Teenager Driving Lessons", path: "/teen-driving" },
                { name: "Adult & Senior Training", path: "/adult-driving" },
                { name: "DMV Test Preparation", path: "/dmv-prep" },
                { name: "Traffic School Info", path: "/traffic-school" },
            ]
        },
        {
            title: "Legal & Info",
            links: [
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Service", path: "/terms-of-service" },
                { name: "Frequently Asked Questions", path: "/faq" },
            ]
        }
    ];
    return (
        <div className="container py-5 my-5">
            <div className="row">
                <div className="col-12 text-center mb-5">
                    <h1 className="display-4 fw-bold mb-4 text-center">Site Map</h1>
                    <p className="lead text-secondary">Find everything you need at eStop Driving School</p>
                    <hr className="w-25 mx-auto border-danger border-2" />
                </div>
            </div>
            <div className="row g-4">
                {sections.map((section, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card h-100 shadow-sm border-0 bg-light">
                            <div className="card-body p-4">
                                <h4 className="card-title fw-bold mb-4">{section.title}</h4>
                                <ul className="list-unstyled">
                                    {section.links.map((link, lIndex) => (
                                        <li key={lIndex} className="mb-3">
                                            <a href={link.path}
                                                className="text-decoration-none text-dark hover-danger d-flex align-items-center">
                                                <i className="bi bi-chevron-right text-danger me-2 small"></i>
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Sitemap;
