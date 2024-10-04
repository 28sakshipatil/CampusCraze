import React from 'react';
import './HomePage.css';
import Navbar from '../../Navbar';
import CarouselPage from '../carousel/CarouselPage';

function HomePage() {
  return (  
    <div id='bodyy'>
      <Navbar />
      {/* Your other content can go here */}
      <CarouselPage />
    </div>
  );
}

export default HomePage;
