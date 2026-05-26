
import React from 'react';
import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../types';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Schedule: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="bg-light">
                <div className="container py-5">
                    <h1 className="display-3 fw-bold mb-3">
                       <span className="text-danger">
                        SCHEDULE LESSON/S</span>AT ESTOP DRIVING SCHOOL.</h1>
                    <p className="lead text-muted max-w-2xl">
                        Please Take a Moment to Look at Our Google Schedule Below! You Can Conveniently Book One or All
                        of Your Driving Lesson/s Today!
                    </p>
                </div>
            </div>
            <Container className="my-5">
                <div className="text-center row">
                    <div className="my-5 container">
                        <h2
                            className="dtext-3xl font-bold text-red-600 mb-4 text-left" style={{textAlign: 'left'}}>
                            BOOK YOUR DRIVING LESSON/S
                            WITH ESTOP DRIVING SCHOOL TODAY
                        </h2>

                        <iframe
                            className="iframe"
                            src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2ZCzKMpxsDgy3QIYZTfsvvJUdvRk-jvBV0w8lJruHsQC7XKkoXjSkAI2Tti5absT-wnaXc05Zy"
                            title="The Best Driving School in Marin and Sonoma Counties - eStop Driving School in Marin County and Sonoma County"
                            allow="calendar">
                        </iframe>
                        <p><br/></p>
                        <Button
                            type="submit"
                            className="btn btn-danger btn-lg fw-bold"
                            style={{textAlign: 'center'}}
                            onClick={() => window.location.href = '/contact'}>
                            QUESTIONS?<br/>
                            CONTACT US!
                        </Button>
                        <p><br/></p>
                    </div>

                </div>

            </Container>
        </div>
    );
};
export default Schedule;