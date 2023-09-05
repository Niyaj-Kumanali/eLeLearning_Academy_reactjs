import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner';
import Courses from '../../Components/Courses/Courses';
import CategoryNavbar from '../../Components/Categories/Category-navbar';
export default function Home() {
    return (
        <div>
            <Navbar />
            <div className='homepage'>
                <Banner />
                <CategoryNavbar />
                <Courses />
            </div>

        </div>
    );
}