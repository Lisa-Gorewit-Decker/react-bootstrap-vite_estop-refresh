// noinspection JSUnusedGlobalSymbols

import React from "react";
import { Link } from "react-router-dom";
import {
    Navbar,
    Container,
    Nav,
    Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavBar: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
            <Navbar.Brand as={Link} to="/" className="fw-bold">
                ESTOP<span className="text-danger">DRIVING SCHOOL</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto align-items-lg-center">
                    <Nav.Link as={Link} to="/">HOME</Nav.Link>
                    <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                    <Nav.Link as={Link} to="/packages">PACKAGES</Nav.Link>
                    <Nav.Link as={Link} to="/schedule">SCHEDULE</Nav.Link>
                    <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
                    <Nav.Link as={Link} to="/pricing-table">PRICING</Nav.Link>
                    <Nav.Link as={Link} to="/privacy-policy">PRIVACY POLICY</Nav.Link>
                    <Nav.Link as={Link} to="/terms-of-service">TERMS OF SERVICE</Nav.Link>
                    <Nav.Link as={Link} to="/testimonials">TESTIMONIALS</Nav.Link>
                    <Nav.Link as={Link} to="/blog">BLOG</Nav.Link>
                    <Nav.Item className="ms-lg-2 mt-2 mt-lg-0">
                        <Button className="text-white fw-bold" href="/contact" variant="danger">
                            BOOK NOW
                        </Button>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
 };

export default NavBar