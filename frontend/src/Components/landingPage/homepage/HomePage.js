import React from 'react';
import './HomePage.css';
import Navbar from '../../Navbar';
import CarouselPage from '../carousel/CarouselPage';
import UpcomingShowPage from '../upcomingshows/UpcomingShowPage';
import StayUpPage from '../stayup/StayUpPage';
import Footer from '../../Footer';

function HomePage() {
  return (  
    <div id='bodyy'>
      <Navbar />
      {/* Your other content can go here */}
      <CarouselPage />
      <UpcomingShowPage />
      <StayUpPage />
      <Footer />
    </div>
  );
}

export default HomePage;
