import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-3 mt-auto">
            <Container>
                <Row className="gy-4">
                    <Col lg={4}>
                        {/* Swapped text-primary to text-danger to match your main header branding */}
                        <h5 className="text-danger fw-bold mb-3">E-STOP DRIVING SCHOOL</h5>
                        <p className="text-white-50">
                            Providing top-tier driver education for over 15 years. Safe roads start with professional training.
                        </p>
                    </Col>

                    <Col lg={2} md={4}>
                        <h6 className="fw-bold mb-3 text-white">Quick Links</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li>
                                <Link to="/services" className="text-white-50 text-decoration-none link-danger">
                                    Packages
                                </Link>
                            </li>
                            <li>
                                <Link to="/schedule" className="text-white-50 text-decoration-none link-danger">
                                    Schedule
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-white-50 text-decoration-none link-danger">
                                    Driving Tips
                                </Link>
                            </li>
                        </ul>
                    </Col>

                    <Col lg={3} md={4}>
                        <h6 className="fw-bold mb-3 text-white">Contact Us</h6>
                        <ul className="list-unstyled text-white-50 d-flex flex-column gap-2">
                            <li><i className="bi bi-geo-alt me-2 text-danger"></i>123 Roadway Ave, Suite 4</li>
                            <li>New Jersey, NJ 07001</li>
                            <li><i className="bi bi-envelope me-2 text-danger"></i>info@estopdriving.com</li>
                        </ul>
                    </Col>

                    <Col lg={3} md={4}>
                        <h6 className="fw-bold mb-3 text-white">Hours</h6>
                        <ul className="list-unstyled text-white-50 d-flex flex-column gap-1">
                            <li>Mon - Fri: 8am - 6pm</li>
                            <li>Sat: 9am - 4pm</li>
                            <li>Sun: Closed</li>
                        </ul>
                    </Col>
                </Row>

                <hr className="my-4 border-secondary opacity-25" />

                <div className="d-flex justify-content-between align-items-center flex-column flex-md-row text-white-50 small">
                    <p className="mb-0">© {new Date().getFullYear()} E-Stop Driving School. All rights reserved.</p>
                    <div className="d-flex gap-3 mt-2 mt-md-0">
                        <Link to="/privacy-policy" className="text-white-50 text-decoration-none link-danger">
                            Privacy Policy
                        </Link>
                        <Link to="/terms-of-service" className="text-white-50 text-decoration-none link-danger">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;