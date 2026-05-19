//MainLayout.tsz
import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';

const MainLayout: React.FC = () => {
    return (
            <div className="d-flex flex-column min-vh-100">
                <NavigationBar/>
                <main className="flex-grow">
                    <Container>
                        <Outlet/>
                    </Container>
                </main>
                <Footer/>
            </div>
    );
};
export default MainLayout;
