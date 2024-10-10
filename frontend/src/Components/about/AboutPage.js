import React from 'react';
import './About.css';
import About from './About';
import Navbar from '../Navbar';
import Footer from '../Footer';
function AboutPage() {
    return ( 
        <div >
            <Navbar />
            <About />
            <Footer />
        </div>
     );
}

export default AboutPage;