//NavigationBar //

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from "react-router-dom";

export const NavigationBar: React.FC = () => (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
            <Navbar.Brand as={Link} to="/" className="fw-bold">ESTOP <span className="text-danger fw-bold">DRIVING SCHOOL</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    <Nav.Link as={Link} to="/schedule">Schedule</Nav.Link>
                    <Nav.Link as={Link} to="/contact" className="btn btn-danger text-white ms-lg-2">Book Now</Nav.Link>
                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);


export default NavigationBar;