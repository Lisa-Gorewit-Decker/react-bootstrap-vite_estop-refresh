import React, { useState, useEffect } from 'react';
import {DayCounterProps} from "../types";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const DayCounterCTA: React.FC<DayCounterProps> = ({startDateIso, endDateIso}) => {
    const [daysPassed, setDaysPassed] = useState<number>(0);

    useEffect(() => {
        const calculateDays = () => {
            const start = new Date(startDateIso).getTime();
            const now = new Date().getTime();

            const diffInMs = now - start;

            const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

            setDaysPassed(days > 0 ? days : 0);
        };

        calculateDays();

        const interval = setInterval(calculateDays, 3600000);
        return () => clearInterval(interval);
    }, [startDateIso, endDateIso]);
    return (
        <div
            className="d-grid gap-2 d-md-block">
            <div
                className={"button"}
                 onLoad={() => window.location.href = '/'}>
               <p> EVERYDAY, TONY (Teshome) IS GRATEFUL FOR ALL OF THE DAYS HE WAKES UP, AND FOR EVERY BREATH HE TAKES EVERY MINUTE OF THE DAY!
                   <span className="fw-bold">{daysPassed}</span></p>
            </div>
        </div>
    );
};