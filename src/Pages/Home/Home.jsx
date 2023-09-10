import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import CategoryNavbar from '../../Components/CategoriesNavbar/CategoryNavbar';
import Footer from '../../Components/Footer/Footer';
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';
import AllComponents from '../../Components/CourseComponents/AllComponents';
import JavaComponent from '../../Components/CourseComponents/JavaComponent';
import PythonComponent from '../../Components/CourseComponents/PythonComponent';
import HtmlComponent from '../../Components/CourseComponents/HtmlComponent';
import CssComponent from '../../Components/CourseComponents/CssComponent';
import JavaScriptComponent from '../../Components/CourseComponents/JavaScriptComponent';

export default function Home() {
    return (
        <div className="home-container">
            <Navbar />
            <div className='homepage'>
                <Routes>
                    <Route path="/eLearning_Academy_reactjs/" element={<>
                        <DefaultComponent />
                        <AllComponents />
                    </>} />
                    <Route path="/" element={<>
                        <DefaultComponent />
                        <AllComponents />
                    </>} />
                    <Route path="/category/" element={<>
                        <CategoryNavbar />
                        <AllComponents />
                    </>} />
                    <Route path="/courses/" element={<>
                        <CategoryNavbar />
                        <AllComponents />
                    </>} />
                    <Route path="/category/all" element={<>
                        <DefaultComponent />
                        <AllComponents />
                    </>} />
                    <Route path="/category/java" element={<>
                        <DefaultComponent />
                        <JavaComponent />
                    </>} />
                    <Route path="/category/python" element={<>
                        <DefaultComponent />
                        <PythonComponent />
                    </>} />
                    <Route path="/category/html" element={<>
                        <DefaultComponent />
                        <HtmlComponent />
                    </>} />
                    <Route path="/category/css" element={<>
                        <DefaultComponent />
                        <CssComponent />
                    </>} />
                    <Route path="/category/javascript" element={<>
                        <DefaultComponent />
                        <JavaScriptComponent />
                    </>} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

function DefaultComponent() {
    return (
        <>
            <Banner />
            <CategoryNavbar />
        </>
    );
}
