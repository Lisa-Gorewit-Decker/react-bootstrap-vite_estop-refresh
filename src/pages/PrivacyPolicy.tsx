
import React, { FC } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PrivacyPolicy: FC = () => {
    const lastUpdated: string = "May 2026";
    return (
        <main className="container py-5 my-5">
            <div className="row justify-content-center">
                <article className="col-lg-10">
                    <header className="mb-5">
                        <h1 className="display-4 fw-bold mb-4 text-uppercase">Privacy Policy</h1>
                        <p className="text-muted text-uppercase">Effective Date: {lastUpdated}</p>
                        <div className="border-bottom border-danger border-3 w-25"></div>
                    </header>

                    <section className="mb-5">
                        <h2 className="h4 fw-bold text-uppercase">1. Information Collection</h2>
                        <p>
                            eStop Driving School collects personal information that you voluntarily provide to us when
                            registering for driving lessons. This includes:
                        </p>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item bg-transparent px-0">Full name and contact information (Phone/Email).</li>
                            <li className="list-group-item bg-transparent px-0">California Instructional Permit or Driver&rsquo;s License number.</li>
                            <li className="list-group-item bg-transparent px-0">Residential address for valet pick-up/drop-off services.</li>
                        </ul>
                    </section>

                    <section className="mb-5">
                        <h2 className="h4 fw-bold text-uppercase">2. How Information is Used</h2>
                        <p>
                            Your information is strictly used to facilitate behind-the-wheel training, manage lesson
                            scheduling, and comply with California DMV certification requirements. We may contact
                            you via SMS or phone at <strong>415-897-7002</strong> regarding appointment reminders.
                        </p>
                    </section>

                    <section className="mb-5">
                        <h2 className="h4 fw-bold text-uppercase">3. California Privacy Rights (CCPA)</h2>
                        <p>
                            As a California resident, you have the right to request access to the specific pieces of
                            personal information we have collected about you and request the deletion of your data.
                        </p>
                    </section>
                </article>
            </div>
        </main>
    );
};

export default PrivacyPolicy;