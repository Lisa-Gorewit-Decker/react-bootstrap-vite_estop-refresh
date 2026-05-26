import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Home: React.FC = () => {
    return (
        <div>
            <div
                className="text-white text-center d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: 'linear-gradient(rgba(5, 10, 44, 0.25), rgba(5, 10, 44, 0.25)), url("/src/assets/hero-driver.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '60vh',
                    padding: '2rem !important'
                }} >
                <Container>
                    <h1 className="display-4 fw-black text-uppercase mb-3 tracking-wide">
                        ESTOP DRIVING SCHOOL, DMV-APPROVED DRIVING LESSONS IN NOVATO, MARIN & SONOMA COUNTIES
                    </h1>
                    <h2 className="h4 fw-light text-uppercase mb-4 opacity-90">
                        BEHIND-THE-WHEEL TRAINING FOR TEENS, ADULTS, & SENIORS — SINCE 1983
                    </h2>
                    <br />
                    <Button
                        href="/schedule"
                        variant="danger"
                        size="lg"
                        className="fw-bold px-5 py-3 text-uppercase rounded-pill shadow"
                        style={{ backgroundColor: '#dc3445', border: 'none' }}
                    >
                        BOOK NOW!
                    </Button>
                </Container>
            </div>
            <Container className="py-5">
                <div className="py-8">
                    <p className="lead" style={{textAlign: "center", fontWeight:"600", marginRight:'20px', marginLeft:'20px'}}>
                    Welcome to eStop Driving School. I am Tony(Teshome), the founder and owner of eStop Driving School (previously known as Nile Driving School). I have been teaching behind-the-wheel driving since 1983.</p>
                    <p className="lead" style={{textAlign: "center", fontWeight:"600", marginRight:'20px', marginLeft:'20px'}}>
                    I have trained more than 33,000 teenagers and over 5,000 adults and seniors during my almost four-decade career (of course, they are of legal driving age and status). Basic training and services are at a flat hourly rate of $125. If you need any additional services, please do not hesitate to contact me for more details.</p>
                    <p className="lead" style={{textAlign: "center", fontWeight:"600", marginRight:'20px', marginLeft:'20px'}}>
                    Since 1983, I Have 41 Years of Experience Training and Teaching Adults, Teenagers and Seniors Behind-The-Wheel Driving. All While Doing What I Love!</p>
                    <p className="lead" style={{textAlign: "center", fontWeight:"600", marginRight:'20px', marginLeft:'20px'}}>
                    Every Day, I Take Great Pride In and Receive So Much Joy From What I Do For a Living, I Love My Job!</p>
                </div>
                <Row className="g-4 justify-content-center">
                    <Col md={4}>
                        <Card className="h-100 border-0 text-white bg-primary p-4 shadow-sm text-center">
                            <Card.Body className="d-flex flex-column align-items-center justify-content-between">
                                <div>
                                    <i className="bi bi-person-video2 mb-3" style={{ fontSize: '2.5rem' }}></i>
                                    <Card.Title className="fw-bold text-uppercase tracking-widest mb-3">
                                        TEENAGERS
                                    </Card.Title>
                                    <Card.Text className="fst-italic opacity-90 mb-4">
                                        California DMV approved behind-the-wheel training packages.
                                    </Card.Text>
                                </div>
                                <h4 className="fw-black mb-0" style={{ color: '#ffc107' }}>$690 Package</h4>
                                <Button
                                    className="btn btn-danger mt-3"
                                    onClick={() => window.location.href = '/teenagers-packages'}
                                    variant="danger"  >
                                    LEARN MORE!
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 border-0 text-white bg-primary p-4 shadow-sm text-center">
                            <Card.Body className="d-flex flex-column align-items-center justify-content-between">
                                <div>
                                    <i className="bi bi-car-front-fill mb-3" style={{ fontSize: '2.5rem' }}></i>
                                    <Card.Title className="fw-bold text-uppercase tracking-widest mb-3">
                                        ADULTS
                                    </Card.Title>
                                    <Card.Text className="fst-italic opacity-90 mb-4">
                                        Personalized lessons for adults 18+ to build confidence quickly.
                                    </Card.Text>
                                </div>
                                <h4 className="fw-black mb-0" style={{ color: '#ffc107' }}>$125 / hour</h4>
                                <Button
                                    className="btn btn-danger mt-3"
                                    onClick={() => window.location.href = '/adults-packages'}
                                    variant="danger" >
                                    LEARN MORE!
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="h-100 border-0 text-white bg-primary p-4 shadow-sm text-center">
                            <Card.Body className="d-flex flex-column align-items-center justify-content-between">
                                <div>
                                    <i className="bi bi-person-badge-fill mb-3" style={{ fontSize: '2.5rem' }}></i>
                                    <Card.Title className="fw-bold text-uppercase tracking-widest mb-3">
                                        SENIORS
                                    </Card.Title>
                                    <Card.Text className="fst-italic opacity-90 mb-4">
                                        Refresher courses to maintain safety and independence.
                                    </Card.Text>
                                </div>
                                <h4 className="fw-black mb-0" style={{ color: '#ffc107' }}>$125 / hour</h4>
                                <Button
                                    className="btn btn-danger mt-3"
                                    onClick={() => window.location.href = '/seniors-packages'}
                                    variant="danger"
                                >
                                    LEARN MORE!
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div className="bg-white py-5">
                <Container className="text-center">
                    <p className="lead" style={{ maxWidth: '100%', fontWeight: 'bold', textTransform: 'uppercase' }}>
                        Providing Expert Behind-The-Wheel Instruction In Marin & Sonoma County Since 1983!
                    </p>
                </Container>
            </div>
        </div>
    );
};
export default Home;