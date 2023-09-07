import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import CategoryNavbar from '../../Components/CategoriesNavbar/CategoryNavbar';
import Footer from '../../Components/Footer/Footer';
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';
import Courses from '../../Components/Courses/Courses';
import AllComponent from '../../Components/CourseComponents/AllComponents';

export default function Home() {
    return (
        <Router>
            <div className="home-container">
                <Navbar />
                <div className='homepage'>
                    <Routes>

                        <Route path="/" element={<DefaultComponent />} />
                        <Route path="/category/*" element={<DefaultComponent />} />
                        <Route exact path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>



                </div>
                <Footer />
            </div>
        </Router>
    );
}

function DefaultComponent() {
    return (
        <>
            <Banner />
            {/* <CategoryNavbar /> */}
            <h1 className='topCourses'>Top Courses</h1>
            <h2 className='heading'>Java</h2>
            <Courses from={1} to={8} />
            <h2 className='heading'>Python</h2>

            <Courses from={9} to={16} />
            <h2 className='heading'>HTML</h2>

            <Courses from={17} to={24} />
            <h2 className='heading'>CSS</h2>

            <Courses from={25} to={32} />
            <h2 className='heading'>JavaScript</h2>

            <Courses from={33} to={40} />

        </>
    );
}



function JavaComponent() {
    return (
        <Courses from={1} to={10} />
    )
}

function PythonComponent() {
    return (
        <Courses from={11} to={20} />
    )
}

function HtmlComponent() {
    return (
        <Courses from={21} to={30} />
    )
}

function CssComponent() {
    return (
        <Courses from={31} to={40} />
    )
}

function JavascriptComponent() {
    return (
        <Courses from={41} to={50} />
    )
}
