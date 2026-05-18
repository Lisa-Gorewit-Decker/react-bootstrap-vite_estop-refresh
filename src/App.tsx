import React, {FC} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import CookieBanner from './components/CookieBanner';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

import TermsService from './pages/TermsService';
import Sitemap from './pages/Sitemap';
import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Schedule from './pages/Schedule';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BlogPage from './pages/BlogPage';
import FeaturedBlog from './blog/FeaturedBlog';

import PrivacyPolicy from './pages/PrivacyPolicy';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App: FC = () => {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <NavigationBar/>
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="testimonials" element={<Testimonials/>}/>
                        <Route path="services" element={<Services/>}/>
                        <Route path="schedule" element={<Schedule/>}/>
                        <Route path="contact" element={<Contact/>}/>
                        <Route path="blog" element={<BlogPage/>}/>
                        <Route path="blog:id" element={<FeaturedBlog/>}/>

                        <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
                        <Route path="terms-of-service" element={<TermsService/>}/>
                        <Route path="sitemap" element={<Sitemap/>}/>
                    </Routes>
                </main>
                <Footer/>
                <CookieBanner/>
            </div>
        </Router>

    );
};
export default App;

