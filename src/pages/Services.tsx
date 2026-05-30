import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import drivingLesson from '../assets/driving-lesson.jpg';

const DrivingService: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="bg-light">
                <Container className="py-5">
                    <h1 className="display-3 fw-bold mb-3">
                        OUR<span
                        className="text-danger"> SERVICES.
                    </span>
                    </h1>
                    <p className="lead text-muted mb-4" style={{maxWidth: '700px'}}>
                        Whether You&rsquo;re a first-time driver or looking to refresh your skills,
                        we provide tailored instruction to ensure you&rsquo;re road-ready.
                    </p>
                </Container>
            </div>
            <Container className="py-5">
                <Row className="g-4">
                    <Col md={3}>
                        <div className="mb-3 text-danger text-uppercase">
                            <i className="bi bi-shield-check" style={{fontSize: '1.5rem'}}></i>
                        </div>
                        <h5 className="fw-bold text-uppercase small tracking-widest">SAFETY FIRST</h5>
                        <p className="text-muted small">Dual-Control Vehicles & Certified Instructor.</p>
                    </Col>
                    <Col md={3}>
                        <div className="mb-3 text-danger text-uppercase">
                            <i className="bi bi-geo-alt" style={{fontSize: '1.5rem'}}></i>
                        </div>
                        <h5 className="fw-bold text-uppercase text-center">FREE PICKUP</h5>
                        <p className="text-muted small">We Start and End Your Lesson at Your Doorstep.</p>
                    </Col>
                    <Col md={3}>
                        <div className="mb-3 text-danger text-uppercase">
                            <i className="bi bi-calendar-event" style={{fontSize: '1.5rem'}}></i>
                        </div>
                        <h5 className="fw-bold text-uppercase text-center">FLEXIBLE SCHEDULE</h5>
                        <p className="text-muted small">7 Days a Week, Including Evenings.</p>
                    </Col>
                    <Col md={3}>
                        <div className="mb-3 text-danger text-uppercase">
                            <i className="bi bi-award" style={{fontSize: '1.5rem'}}></i>
                        </div>
                        <h5 className="fw-bold text-uppercase text-center">LICENSED</h5>
                        <p className="text-muted small">Fully bonded and state-certified school.</p>
                    </Col>
                </Row>
                <hr className="my-5 opacity-10"/>
                <Row className="align-items-center">
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <h2 className="display-5 fw-bold mb-4">
                            BEHIND-THE-WHEEL<br/>
                            <span className="text-danger">TRAINING</span>
                        </h2>
                        <p className="text-muted mb-4">
                            Our primary focus is hands-on experience. We don&rsquo;t just teach you how to pass the test;
                            we teach you how to survive on today&rsquo;s busy roads. From parallel parking to
                            high-speed merging, our curriculum covers it all.
                        </p>
                        <ul className="list-unstyled">
                            <li className="mb-2"><i className="bi bi-check-lg text-danger text-uppercase me-2"></i> Defensive Driving
                                Techniques
                            </li>
                            <li className="mb-2"><i className="bi bi-check-lg text-danger text-uppercase me-2"></i> Freeway and Canyon
                                Driving.
                            </li>
                            <li className="mb-2"><i className="bi bi-check-lg text-danger text-uppercase me-2"></i> Preparation For the
                               California DMV Drive Test.
                            </li>
                        </ul>
                    </Col>
                    <Col lg={6}>
                        <img
                            className="img-fluid rounded-5 shadow-lg"
                            alt="Driving lesson"
                            src={drivingLesson}
                        />
                    </Col>
                </Row>
            </Container>
            <div className="bg-white py-5">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="display-4 fw-bold text-center">
                            <span className="text-danger">SIMPLE RATES</span><span className="font-family:'Overpass',sans-serif; color:#000">AT ESTOP DRIVING SCHOOL</span></h2>
                        <p className="text-muted">Professional, Valet Driving Instruction Starting at Your Front
                            Door.</p>
                    </div>
                    <Row className="g-4 justify-content-center">
                        <Col md={4}>
                            <Card className="h-100 border-0 shadow-sm p-4 bg-light rounded-5">
                                <Card.Body className="text-center d-flex flex-column">
                                    <h6 className="text-uppercase fw-bold mb-4 text-muted small tracking-widest">Teenagers</h6>
                                    <div className="mb-4">
                                        <span className="display-5 fw-bold">$125</span>
                                        <small className="d-block text-muted fst-italic">/ per hour</small>
                                    </div>
                                    <ul className="list-unstyled text-start mb-5 flex-grow-1 px-3">
                                        <li className="mb-3 small"><i
                                            className="bi bi-check-circle-fill text-danger text-uppercase me-2"></i> Certificate of
                                            Completion.
                                        </li>
                                        <li className="mb-3 small"><i
                                            className="bi bi-check-circle-fill text-danger text-uppercase me-2"></i> DMV Test
                                            Preparation.
                                        </li>
                                        <li className="mb-3 small"><i
                                            className="bi bi-check-circle-fill text-danger text-uppercase me-2"></i> Valet Pick-up &
                                            Drop-off.
                                        </li>
                                    </ul>
                                    <Button variant="dark" className="rounded-pill py-3 fw-bold text-uppercase">Book
                                        Teenagers</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="h-100 border-0 shadow p-4 bg-dark text-white rounded-5 position-relative">
                                <div className="position-absolute top-0 start-50 translate-middle">
                                    <span
                                        className="badge rounded-pill bg-warning text-dark text-uppercase px-3 py-2 shadow-sm">Most Popular</span>
                                </div>
                                <Card.Body className="text-center d-flex flex-column pt-4">
                                    <h6 className="text-uppercase fw-bold mb-4 text-warning small tracking-widest">Adults</h6>
                                    <div className="mb-4">
                                        <span className="display-5 fw-bold">$125</span>
                                        <small className="d-block text-light opacity-75 fst-italic">/ per hour</small>
                                    </div>
                                    <ul className="list-unstyled text-start mb-5 flex-grow-1 px-3">
                                        <li className="mb-3 small"><i
                                            className="bi bi-check-circle-fill text-danger me-2"></i>
                                            Nervous Driver Specialist
                                        </li>
                                        <li className="mb-3 small"><i
                                            className="bi bi-check-circle-fill text-danger me-2"></i>
                                            Freeway & City Training
                                        </li>
                                        <li className="mb-3 small"><i
                                            className="bi bi-check-circle-fill text-danger me-2"></i>
                                            One-on-One Instruction
                                        </li>
                                    </ul>
                                    <Button variant="warning"
                                            className="rounded-pill py-3 fw-bold text-uppercase text-dark">
                                        Book Adults
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="h-100 border-0 shadow-sm p-4 bg-light rounded-5">
                                <Card.Body className="text-center d-flex flex-column">
                                    <h6 className="text-uppercase fw-bold mb-4 text-muted small tracking-widest">Seniors</h6>
                                    <div className="mb-4">
                                        <span className="display-5 fw-bold">$125</span>
                                        <small className="d-block text-muted fst-italic">/ per hour</small>
                                    </div>
                                    <ul className="list-unstyled text-start mb-5 flex-grow-1 px-3">
                                        <li className="mb-3 small"><i
                                            className="bi bi-check-circle-fill text-danger me-2"></i>
                                            Safety Evaluations
                                        </li>
                                        <li className="mb-3 small"><i
                                            className="bi bi-check-circle-fill text-danger me-2"></i>
                                            Refresher Courses
                                        </li>
                                        <li className="mb-3 small"><i
                                            className="bi bi-check-circle-fill text-danger me-2"></i>
                                            DMV Re-exam Prep
                                        </li>
                                    </ul>
                                    <Button variant="dark" className="rounded-pill py-3 fw-bold text-uppercase">
                                        Book Seniors
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="text-center py-5">
                <h3 className="fw-bold mb-4">Still Have Questions?</h3>
                <p className="text-muted mb-5">Our Team is Here to Help You Find The Perfect Package for Your Needs.</p>
                <Button href="/contact" variant="dark"
                        className="px-5 py-3 rounded-pill fw-bold text-uppercase tracking-widest">
                    Contact Support
                </Button>
            </Container>
        </div>
    );
};
export default DrivingService;