//PricingTable.tsx
import React from 'react';
import {CheckCircle2} from 'lucide-react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PricingTable: React.FC = () => {
    const plans = [
        {
            category: "Teenagers",
            price: "125",
            features: ["Certificate of Completion", "DMV Test Preparation", "Dual-Control Safety", "Patient Instruction", "Valet Pick-up & Drop-off"],
            isFeatured: false
        },
        {
            category: "Adults",
            price: "125",
            badge: "Most Popular",
            features: ["Nervous Driver Specialist", "Flexible Scheduling", "Freeway & City Training", "One-on-One Instruction", "Custom Lesson Plans"],
            isFeatured: true
        },
        {
            category: "Seniors",
            price: "125",
            features: ["Safety Evaluations", "Refresher Courses", "DMV Re-exam Prep", "Modern Car Tech Tutorial", "Door-to-Door Service"],
            isFeatured: false
        }
    ];
    return (
        <section className="bg-whitex">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-4 text-center"><span className="text-danger">SIMPLE RATES</span>AT
                        ESTOP DRIVING SCHOOL</h1>
                    <p className="lead text-muted max-w-2xl"> Professional, Valet Driving Instruction Starting at Your
                        Front Door.</p>
                </div>

                <div className="row g-4 justify-content-center">
                    {plans.map((plan, index) => (
                        <div key={index} className="col-12 col-md-4">
                            <div
                                className={`card h-100 border-0 shadow-sm transition-all p-4 ${plan.isFeatured ? 'bg-dark text-white' : 'bg-light'}`}
                                style={{borderRadius: '2.5rem', border: plan.isFeatured ? 'none' : '1px solid #eee'}}
                            >
                                {plan.badge && (
                                    <div className="text-center mb-2">
                    <span className="badge rounded-pill bg-warning text-dark text-uppercase px-3 py-2"
                          style={{fontSize: '0.65rem'}}>
                      {plan.badge}
                    </span>
                                    </div>
                                )}

                                <div className="card-body text-center d-flex flex-column">
                                    <h6 className="text-uppercase fw-bold mb-4 tracking-widest" style={{
                                        color: plan.isFeatured ? 'rgb(222 239 252)' : '#6c757d',
                                        fontSize: '0.8rem'
                                    }}>
                                        {plan.category}
                                    </h6>

                                    <div className="mb-4">
                                        <span className="display-5 fw-black">${plan.price}</span>
                                        <small className="d-block text-muted fst-italic">/ per hour</small>
                                    </div>

                                    <ul className="list-unstyled text-start mb-5 flex-grow-1">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="mb-3 d-flex align-items-center gap-2"
                                                style={{fontSize: '0.9rem'}}>
                                                <CheckCircle2 size={18} style={{color: '#facc15'}}/>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        className={`btn btn-lg w-100 fw-bold rounded-pill py-3 text-uppercase ${plan.isFeatured ? 'btn-warning' : 'btn-dark'}`}
                                        style={{fontSize: '0.75rem'}}
                                    >
                                        Book {plan.category} Lesson
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingTable;