import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const NotFound: FC = () => {
    return (
        <div className="bg-white">
            <div className="bg-light">
                <div className="container py-5">
                    <h1 className="display-3 fw-bold mb-3">
                        <span className="text-danger text-uppercase">404</span> PAGE NOT FOUND.
                    </h1>
                    <p className="lead text-muted max-w-2xl mb-0">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                </div>
            </div>

            <Container className="py-5 my-5 text-center">
                <div className="py-5">
                    <div className="mb-4">
                        <i className="bi bi-exclamation-triangle text-danger" style={{ fontSize: '5rem' }}></i>
                    </div>
                    <h2 className="fw-bold mb-3 text-uppercase">{"Oops! You've drifted off course."}</h2>
                    <p className="text-muted mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                        {"Don't worry, even the best drivers make a wrong turn sometimes. Let's get you back on the right road!"}
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                        <Link to="/">
                            <Button variant="danger" size="lg" className="px-4 py-2 uppercase fw-bold">
                                Go to Homepage
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline-dark" size="lg" className="px-4 py-2 uppercase fw-bold">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;
