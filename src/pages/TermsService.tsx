//TermsService.tsx//

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { FC } from 'react';


export const TermsService: FC = () => {
    return (
        <div className="container py-5 my-5">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <h1 className="display-3 fw-bold mb-3">TERMS OF <span className="text-danger">SERVICES.</span></h1>
                    <p className="text-muted">Effective Date: May 2026</p>
                    <hr className="mb-5" />

                    <section className="mb-4">
                        <h4 className="text-danger">1. Lesson Requirements</h4>
                        <p>All students must possess a valid California Learner's Permit or Driver’s License during every behind-the-wheel lesson. Failure to produce a valid permit will result in a cancelled lesson and a full charge.</p>
                    </section>

                    <section className="mb-4">
                        <h4 className="text-danger">2. Pricing & Payments</h4>
                        <p>Lessons are charged at a flat rate of <strong>$125 per hour</strong>. Payment is due at the time of service unless otherwise arranged with eStop Driving School.</p>
                    </section>

                    <section className="mb-4">
                        <h4 className="text-danger">3. Cancellation Policy</h4>
                        <p>We require at least 24 hours' notice for cancellations. Late cancellations or "no-shows" at the agreed valet pick-up location may be subject to a cancellation fee.</p>
                    </section>

                    <section className="mb-4">
                        <h4 className="text-danger">4. Safety & Liability</h4>
                        <p>Tony (Teshome) and eStop Driving School prioritize student safety. We reserve the right to terminate a lesson immediately if a student is deemed to be under the influence of any substance or acting in a way that endangers themselves or the instructor.</p>
                    </section>

                    <div className="bg-light p-4 rounded mt-5">
                        <p className="mb-0 small italic">For questions regarding these terms, please call or text us at 415-897-7002.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TermsService;
