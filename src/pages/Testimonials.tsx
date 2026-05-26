import React from 'react';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Testimonials: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="bg-light">
                <div className="container py-5">
                    <h1 className="display-3 fw-bold mb-3">
                       <span className="text-danger">STUDENT</span>TESTIMONIALS.
                    </h1>
                    <p className="lead text-muted max-w-2xl">
                        Please Take a Moment to Read Our Google & Yelp Student Success Stories & Testimonials. We are Proud to Share Their Much Valued Experiences Working With Us. We Humbly Encourage You to Join Our Community of Successful Drivers!
                    </p>
                </div>
            </div>
            <Container
                className="my-5">
                <h2
                    className="text-3xl font-bold text-red-600 mb-4">
                    ESTOP DRIVING SCHOOL – STUDENT SUCCESS STORIES
                </h2>
                <div>
                    <script
                        src="https://elfsightcdn.com/platform.js"
                        async>
                    </script>
                </div>
                <div
                    className="elfsight-app-9dcbdaf2-db9c-4e48-88f7-c43334a209bf"
                    data-elfsight-app-lazy>
                </div>
                <div>
                    <script
                        src="https://elfsightcdn.com/platform.js"
                        async>
                    </script>
                </div>
                <div
                    className="elfsight-app-92107e6f-4d62-4cb8-993d-6255281049d6"
                    data-elfsight-app-lazy>

                </div>
            </Container>
        </div>

    );
};
export default Testimonials;
