import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for responsiveness
import './Carousel.css'; // Custom CSS for more advanced styling
import Button from 'react-bootstrap/Button';

function Carousels() {
  // Import the font by appending a link tag to the head
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Nosifer&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link); // Clean up when component unmounts
    };
  }, []);

  // Dynamic data for the carousel slides
  const [slides] = useState([
    {
      id: 1,
      text: "First slide",
      label: "First slide label",
      caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.Eu cillum ullamco magna cillum laborum non cillum adipisicing.Et ut dolor non laboris eiusmod mollit exercitation.",
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
              position: "relative", // To position the caption over the image
            }}
          >
            <div className="overlay">
              <h3 style={{ fontFamily: "'Nosifer', sans-serif", color: "yellow" }}>{slide.text}</h3>
            </div>

            <Carousel.Caption
  style={{
    position: "absolute",
    top: "25%", // Adjust as needed
    left: "65%",
    // transform: "translate(-50%, -50%)", // Center the card in the middle of the image
    // backgroundColor: "rgba(255, 225, 0, 0.336)", // Semi-transparent background for readability
    display: "inline-block", // Adapt to the size of the content
    padding: "0", // Remove padding from the outer container to give the card a cleaner appearance
  }}
>
  {/* Card structure */}
  <div
    style={{
      backgroundColor: "rgba(255, 225, 0, 0.336)", // White background for the card
      borderRadius: "10px", // Rounded corners
      padding: "20px", // Padding inside the card
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Card shadow effect
      maxWidth: "400px", // Optional: Limit the card width
      textAlign: "center", // Center-align the text inside the card
    }}
  >
    <h3 style={{ margin: "10px 0", fontSize: "1.5rem" }}>{slide.label}</h3>
    <p style={{ margin: "10px 0", fontSize: "1rem" }}>{slide.caption}</p>
    <Button className='btns'>Register here ! </Button>
  </div>
</Carousel.Caption>

          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carousels;
