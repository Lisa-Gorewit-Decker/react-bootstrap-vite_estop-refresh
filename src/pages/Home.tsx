import React from 'react';
import {Container, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Home: React.FC = () => {
    return (
        <>
            <div
                className="text-white text-center d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: 'linear-gradient(rgba(5, 10, 44, 0.25), rgba(5, 10, 44, 0.25)), url(".src/assets/hero-driver.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '60vh',
                    padding: '2rem !important'
                }}>
                <Container>
                    <h1 className="display-4 fw-black text-uppercase mb-3 tracking-wide">
                        ESTOP DRIVING SCHOOL, DMV-APPROVED DRIVING LESSONS IN NOVATO, MARIN & SONOMA COUNTIES
                    </h1>
                    <h2 className="h4 fw-light text-uppercase mb-4 opacity-90">
                        BEHIND-THE-WHEEL TRAINING FOR TEENS, ADULTS, & SENIORS — SINCE 1983
                    </h2>
                    <br/>
                    <Button href="/schedule"
                            variant="danger"
                            size="lg"
                            className="fw-bold px-5 py-3 text-uppercase rounded-pill shadow"
                            style={{backgroundColor: '#dc3445', border: 'none'}}>
                        BOOK NOW!
                    </Button>
                </Container>
            </div>
            <Container className="py-5">
                <div className="py-8">
                    <p className="lead"
                       style={{textAlign: "center", fontWeight: "600", marginRight: '20px', marginLeft: '20px', fontStyle: 'normal'}}>
                        Welcome to e-Stop Driving School! I am Tony or T.K. (Teshome Kebere), founder, owner and Lead Driving Instructor
                        at e-Stop Driving School (previously known as Nile Driving School). I have been educating, people of all ages,
                        how to drive safely, and confidently since 1983.</p>

                    <p className="lead"
                       style={{textAlign: "center", fontWeight: "600", marginRight: '20px', marginLeft: '20px', fontStyle: 'normal'}}>
                        Since 1983, I have over 43 years of experience training and teaching adults, teenagers and seniors
                        behind-the-wheel driving. All while doing what I love!</p>

                    <p className="lead"
                       style={{textAlign: "center", fontWeight: "600", marginRight: '20px', marginLeft: '20px', fontStyle: 'normal'}}>
                        I have trained more than 33,000 teenagers and over 5,000 adults and seniors during my almost
                        four-decade career (of course, they are of legal driving age and status). Basic training and
                        services are at a flat hourly rate of $125. If you need any additional services, please do not
                        hesitate to contact me for more details.</p>

                    <p className="lead"
                       style={{textAlign: "center", fontWeight: "600", marginRight: '20px', marginLeft: '20px', fontStyle: 'normal'}}>
                        Since 1983, I Have 41 Years of Experience Training and Teaching Adults, Teenagers and Seniors
                        Behind-The-Wheel Driving. All While Doing What I Love!</p>

                    <p className="lead"
                       style={{textAlign: "center", fontWeight: "600", marginRight: '20px', marginLeft: '20px', fontStyle: 'normal'}}>
                        Every Day, I Take Great Pride In and Receive So Much Joy From What I Do For a Living, I Love My Job!</p>

                    <p className="lead"
                       style={{textAlign: "center", fontWeight: "600", marginRight: '20px', marginLeft: '20px', fontStyle: 'italic'}}>
                       — Tony or T.K. (Teshome Kebere): Licensed Instructor No. 2055001</p>
                </div>
            </Container>
            <hr/>
            <div className="bg-white py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-4 fw-bold text-center">
                                    <span className="text-danger">
                                        SIMPLE RATES</span>
                                    <span style={{fontFamily:'Overpass', color:'#222d3b'}}>
                                       E-STOP DRIVING SCHOOL
                                    </span>
                        </h2>
                        <h5>
                            Professional, Valet Driving Instruction Starting at Your Front Door.
                        </h5>
                    </div>
                    <div className="g-4 justify-content-center row">
                        <div className="col-md-4">
                            <div className="h-100 border-0 shadow-sm p-4 bg-light rounded-5 card">
                                <div className="text-center d-flex flex-column card-body">
                                    <h6 className="text-uppercase fw-bold mb-4 text-muted small tracking-widest">
                                        TEENAGERS
                                    </h6>
                                    <div className="mb-4">
                                                <span className="display-5 fw-bold">
                                                    $125
                                                </span>
                                        <small className="d-block text-muted fst-italic">
                                            / PER HOUR
                                        </small>
                                    </div>
                                    <ul className="list-unstyled text-start mb-5 flex-grow-1 px-3">
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger text-uppercase me-2"></i>
                                            CERTIFICATE OF COMPLETION.
                                        </li>
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger text-uppercase me-2"></i>
                                            DMV PRE-EXAM PREP.
                                        </li>
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger text-uppercase me-2"></i>
                                            VALET PICK-UP &amp; DROP-OFF
                                        </li>
                                    </ul>
                                    <button type="button"
                                            className="rounded-pill py-3 fw-bold text-uppercase btn btn-dark">
                                        BOOK TEENAGERS
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div
                                className="h-100 border-0 shadow p-4 bg-dark text-white rounded-5 position-relative card">
                                <div className="position-absolute top-0 start-50 translate-middle">
                                            <span
                                                className="badge rounded-pill bg-warning text-dark text-uppercase px-3 py-2 shadow-sm">
                                                MOST POPULAR
                                            </span>
                                </div>
                                <div className="text-center d-flex flex-column pt-4 card-body">
                                    <h6 className="text-uppercase fw-bold mb-4 text-warning small tracking-widest">
                                        ADULTS
                                    </h6>
                                    <div className="mb-4">
                                                <span className="display-5 fw-bold">
                                                    $125
                                                </span>
                                        <small className="d-block text-light opacity-75 fst-italic">
                                            / PER HOUR
                                        </small>
                                    </div>
                                    <ul className="list-unstyled text-start mb-5 px-3">
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                            NERVOUS DRIVER SPECIALIST
                                        </li>
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                            FREEWAY &amp; CITY DRIVING TRAINING
                                        </li>
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                            ONE-ON-ONE INSTRUCTION
                                        </li>
                                    </ul>
                                    <button type="button"
                                            className="rounded-pill py-3 fw-bold text-uppercase text-dark btn btn-warning">
                                        BOOK ADULTS
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="h-100 border-0 shadow-sm p-4 bg-light rounded-5 card">
                                <div className="text-center d-flex flex-column card-body">
                                    <h6 className="text-uppercase fw-bold mb-4 text-muted small tracking-widest">
                                        SENIORS
                                    </h6>
                                    <div className="mb-4">
                                                <span className="display-5 fw-bold">
                                                    $125
                                                </span>
                                        <small className="d-block text-muted fst-italic">
                                            / PER HOUR
                                        </small>
                                    </div>
                                    <ul className="list-unstyled text-start mb-5 px-3">
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                            SAFETY EVALUATIONS
                                        </li>
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                            REFRESHER COURSES
                                        </li>
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                            DMV PRE-EXAM PREP
                                        </li>
                                    </ul>
                                    <button type="button"
                                            className="rounded-pill py-3 fw-bold text-uppercase btn btn-dark">
                                        BOOK SENIORS
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center py-5 container">
                <h3 className="fw-bold mb-4">
                    HAVE ANY ADDITIONAL QUESTIONS?
                </h3>
                <p className="text-muted mb-5">
                    Our Team Is Always Here To Assist You In Finding The Perfect Driving Instruction Package/s For Your Needs!</p>
                <a role="button" href="/Schedule"
                   className="px-5 py-3 rounded-pill fw-bold text-uppercase btn btn-danger">
                    CONTACT SUPPORT
                </a>
                <br />
                <br />
            </div>
        </>
    )
};
export default Home;


