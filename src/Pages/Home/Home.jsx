import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner';
import Courses from '../../Components/Courses/Courses';
import CategoryNavbar from '../../Components/Categories/CategoryNavbar';
import Footer from '../../Components/Footer/Footer';

export default function Home() {
    return (
        <div className="home-container">
            <Navbar />
            <div className='homepage'>
                <Banner />
                <CategoryNavbar />
                <Courses />
            </div>
            <Footer />
        </div>
    );
}
