import React from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner';
export default function Home() {
    return (
        <div>
            <Navbar />
            <div className='homapage'>
                <Banner />
            </div>

        </div>
    );
}