//Hero.tsx
import React from 'react';
import {Button} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Hero = () => {
    return (

            <div className="row-cols-xl-auto" style={{backgroundImage: 'url("/src/assets/hero-driver.jpg")', backgroundSize: 'cover'}}>
                <h1 className="home1 display-4 fw-bold">
                    ESTOP DRIVING SCHOOL, DMV-APPROVED DRIVING LESSONS IN NOVATO, MARIN & SONOMA COUNTIES</h1>
                <h2 className="home1 display-4 fw-bold">
                    BEHIND-THE-WHEEL TRAINING FOR TEENS, ADULTS, & SENIORS — SINCE 1983</h2>
                <Button
                    className="btn btn-danger btn-lg fw-bold shadow-sm"
                    type="submit"
                    onClick={() => window.location.href = '/contact'}>
                    BOOK NOW!
                </Button>
            </div>


    );
};

export default Hero;