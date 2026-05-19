//BlogPage.tsx//
import React from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    Card
} from 'react-bootstrap';
import { BlogPost } from '../types';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const posts: BlogPost[] = [
    { id: 1, title: "How to Pass Your DMV Test", excerpt: "Tips and tricks from 40 years of instructing...", date: "Oct 12, 2023", slug: "how-to-pass-your-dmv-test" },
    { id: 2, title: "Teen Driving Safety", excerpt: "What parents need to know about the first 6 months...", date: "Sept 28, 2023", slug: "teen-driving-safety" },
    { id: 3, title: "How to Pass Your DMV Test", excerpt: "Tips and tricks from 40 years of instructing...", date: "Oct 12, 2023", slug: "how-to-pass-your-dmv-test" },
    { id: 4, title: "Teen Driving Safety", excerpt: "What parents need to know about the first 6 months...", date: "Sept 28, 2023", slug: "teen-driving-safety" },

];

const BlogPage: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="bg-light">
                <div className="container py-5">
                    <h1 className="display-3 fw-bold mb-3">
                        <span className="text-danger">OUR BLOG</span> ESTOP DRIVING SCHOOL.</h1>
                    <p className="lead text-muted max-w-2xl">
                        Catch the latest driving tips and news from ESTOP Driving School, your trusted source for safe and confident driving.
                    </p>
                </div>
            </div>
            <Container className="my-5">
                <h2 className="text-3xl font-bold text-red-600 mb-4">BLOG: DRIVING TIPS & NEWS</h2>
                <Row>
                    {posts.map(post => (
                        <Col md={6} lg={4} key={post.id} className="mb-4">
                            <Card className="blog-light h-100 shadow-sm">
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>{post.excerpt}</Card.Text>
                                    <Button
                                        variant="link"
                                        className="p-0"
                                        href={`/blog/${post.slug}`}
                                    >
                                        {'Read More →'}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Card className="border-0 shadow-lg mb-5 bg-dark text-white overflow-hidden">
                    <Row className="g-0 align-items-center">
                        <Col md={6} className="p-5">
                            <span className="badge bg-warning text-dark mb-3">MUST READ</span>
                            <h2 className="text-3xl font-bold text-red-600 mb-4">The Ultimate 2026 Guide to Passing Your Road Test</h2>
                            <p className="lead opacity-75">
                                We've Compiled The Top 10 Reasons Students Fail and How You Can Avoid Them.
                                Read Our Expert Breakdown Before Your Big Day.
                            </p>
                            <Button
                                href="/blog/featured"
                                variant="light"
                                className="fw-bold px-4 py-2 mt-3"
                            >
                                { 'Read the Full Guide' }
                            </Button>
                        </Col>
                        <Col md={6} className="d-none d-md-block">
                            <h3>RECEIVE 30,000 PLUS DAYS OF MY EXPERT DRIVING EXPERIENCE IN JUST SIX HOURS!
                                <button
                                    className="btn btn-danger"
                                >BOOK NOW</button></h3>
                            <div style={{
                                backgroundColor: '#333',
                                height: '100%',
                                minHeight: '400px',
                                backgroundImage: 'url("https://via.placeholder.com/800x600")',
                                backgroundSize: 'cover'
                            }}></div>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>

    );
};
export default BlogPage;
