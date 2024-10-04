import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for responsiveness
import './Carousel.css'; // Custom CSS for background image

function Carousels() {
  // Dynamic data for the carousel slides
  const [slides] = useState([
    {
      id: 1,
      text: "First slide",
      label: "First slide label",
      caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      backgroundImage: null, // No image provided, will fall back to default
    },
    {
      id: 2,
      text: "Second slide",
      label: "Second slide label",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: "https://tse2.mm.bing.net/th?id=OIP.1H448vQgo-qk7X8ND7nUAwHaEK&pid=Api&P=0&h=220/800x400", // Custom image
    },
    {
      id: 3,
      text: "Third slide",
      label: "Third slide label",
      caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      backgroundImage: null, // No image provided, will fall back to default
    }
  ]);

  // Default background image URL
  const defaultBackground = "https://wallpapercave.com/wp/wp8930689.jpg";

  return (
    <Carousel fade>
      {slides.map(slide => (
        <Carousel.Item key={slide.id}>
          {/* Use custom image if provided, otherwise fallback to default background */}
          <div
            className="carousel-slide"
            style={{
              backgroundImage: `url(${slide.backgroundImage || defaultBackground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "400px",
            }}
          >
            <div className="overlay">
              <h3>{slide.text}</h3>
            </div>
          </div>
          <Carousel.Caption>
            <h3>{slide.label}</h3>
            <p>{slide.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carousels;
