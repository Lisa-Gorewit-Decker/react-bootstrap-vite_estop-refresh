import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import '../types';

const About: React.FC = () => {
    return (
        <>
        <div className="bg-white">
             <div className="bg-light">
                 <div className="container py-5">
                     <h1 className="display-3 fw-bold mb-3">
                         <span className="text-danger text-uppercase">
                                ABOUT</span>ESTOP DRIVING SCHOOL.
                     </h1>
                        <p className="lead text-muted max-w-2xl">
                            eStop Driving School Provides Driving Lessons to The Following Locations: Novato, CA; Tiburon, CA; Petaluma, CA; San Rafael, CA; Corte Madera, CA; Sausalito, CA; Sebastopol, CA; Mill Valley, CA; San Anselmo, CA;Greenbrae CA; Kentfield, CA. If You Do Not See Your Location Listed Here; Please Do Not Hesitate to Contact Teshome (Tony) Via Text or Phone.                        </p>
                  </div>
             </div>
        </div>
            <Container className="py-5">
                <Row className="align-items-start">
                    <Col md={6}>
                        <h2 className="text-3xl font-bold text-red-600 mb-4">EXPERT DRIVING INSTRUCTION IN THE NORTH
                            BAY, SINCE 1983</h2>
                        <div className="text-lg text-gray-700 leading-relaxed">
                            <p className="mb-4">
                                At eStop Driving School, we believe that driving is a language. Our mission is to ensure
                                every student can <strong> &ldquo;Speak STOP Fluently and Flawlessly For Life&rdquo;!</strong>
                                Tony founded this school in Marin County with a commitment to dual-control safety
                                and patient, professional instruction.
                            </p>

                            <p className="mb-4">
                                As detailed on our <a href="/services" className="text-danger">Services Page</a>,
                                we provide specialized training for <strong>Teenagers</strong>, <strong>Adults</strong>,
                                and <strong>Seniors</strong>. We don&rsquo;t just teach the mechanics of driving; we focus
                                on defensive techniques and &ldquo;survival&rdquo; skills needed for today&rsquo;s busy roads.
                            </p>

                            <div className="bg-slate-800 text-white p-5 rounded mt-5">
                                <h4 className="text-red-500 font-bold uppercase mb-3 text-sm tracking-widest">OUR <span
                                    className="text-danger">PROMISE</span></h4>
                                <p className="italic mb-0">
                                    &ldquo;Whether you are a nervous beginner or looking for a safety evaluation,
                                    we provide door-to-door, valet-style service 7 days a week to ensure
                                    you are road-ready and confident.&rdquo;
                                </p>
                                <p className="mt-3 font-bold text-end">— Tony, Founder</p>
                            </div>
                        </div>
                    </Col>

                    <Col md={6} className="mb-5 mb-md-0">
                        <div className="rounded shadow-lg overflow-hidden border-4 border-white mb-4">
                            <img
                                src="src/assets/tony-in-car.jpg"
                                alt="Tony in the eStop Training Vehicle"
                                className="img-fluid w-full" />
                        </div>
                        <div className="mt-4 p-4 bg-light rounded shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase border-bottom pb-2">
                                AWARDS & RECOGNITION
                            </h3>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <span className="text-red-600 me-2">✓</span>
                                    Best of Novato: Driving Instruction
                                </li>
                                <li className="mb-2">
                                    <span className="text-red-600 me-2">✓</span>
                                    CA DMV State Certified & Licensed
                                </li>
                                <li className="mb-2">
                                    <span className="text-red-600 me-2">✓</span>
                                    40+ Years of Safety Excellence
                                </li>
                                <li className="mb-2">
                                    <span className="text-red-600 me-2">✓</span>
                                    Top-Rated Nervous Driver Specialist
                                </li>
                            </ul>
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default About;

