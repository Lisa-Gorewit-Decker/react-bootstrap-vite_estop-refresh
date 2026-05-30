import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const NavigationBar: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
            <Container>
                <Link to="/" className="navbar-brand fw-bold text-danger text-decoration-none">
                      <span style={{ color: '#FFF !important' }}>ESTOP</span> DRIVING SCHOOL
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center gap-3">
                        <Nav.Link as={Link} to="/">HOME</Nav.Link>
                        <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                        <Nav.Link as={Link} to="/packages">PACKAGES</Nav.Link>
                        <Nav.Link as={Link} to="/schedule">SCHEDULE</Nav.Link>
                        <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
                        <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
                        <Nav.Link as={Link} to="/testimonials">TESTIMONIALS</Nav.Link>
                        <Nav.Link as={Link} to="/blog">BLOG</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default NavigationBar;