
// Navbar.tsx

import React from "react";
import { Link, Route } from 'react-router';
import { Navbar, Nav, Container } from 'react-bootstrap';


import Schedule from "../pages/Schedule";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import  Services  from  '../pages/Services';

import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from '../pages/TermsService';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function NavigationBar () {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">eSTOP DRIVING SCHOOL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Route path="services" element={<Services />} />
                            <Nav.Link as={Link} to="/">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                            <Nav.Link as={Link} to="/packages">PACKAGES</Nav.Link>
                            <Nav.Link as={Link} to="/schedule">SCHEDULE</Nav.Link>
                            <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
                            <Nav.Link as={Link} to="/pricing-table">PRICING</Nav.Link>
                            <Nav.Link as={Link} to="/privacy-policy">PRIVACY POLICY</Nav.Link>
                            <Nav.Link as={Link} to="/terms-of-service">TERMS OF SERVICE</Nav.Link>
                            <Nav.Link as={Link} to="/testimonials">TESTIMONIALS</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="btn btn-danger text-white ms-lg-2">
                                BOOK NOW</Nav.Link>
                            <Nav.Link as={Link} to="/blog">BLOG</Nav.Link>
                            <Nav.Link as={Link} to="/blog;id">BLOG PAGE</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}
export default NavigationBar;