import React from "react";
import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Schedule from './pages/Schedule';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './components/BlogPost';

import CookieBanner from "./components/CookieBanner";
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsService from './pages/TermsService';
import Sitemap from './pages/Sitemap';
import ScrollToTop from "react-scroll-to-top";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./types";

const App: React.FC = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavigationBar/>
            <main className="flex-grow-1">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/testimonials" element={<Testimonials/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/schedule" element={<Schedule/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/blog/:id" element={<BlogPost/>}/>
                    <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                    <Route path="/terms-of-service" element={<TermsService/>}/>
                    <Route path="/sitemap" element={<Sitemap/>}/>
                </Routes>
            </main>
            <CookieBanner/>
            <Footer/>
            <ScrollToTop/>
            </div>
    );
}

export default App;