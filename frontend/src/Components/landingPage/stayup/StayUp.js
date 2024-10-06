import React, { useState } from "react";
import './StayUp.css'; // Import updated CSS file

const StayUp = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email, "Subscribed:", isSubscribed);
  };

  return (
    <div>
        
    <div className="newsletter-wrapper">
    <br/>
    <br/>
        <center>
      <h1 className="newsletter-title">STAY UP TO DATE</h1>
      <div className="newsletter-container">
        <p className="newsletter-text">
          With all the latest concerts and events.<br />
          Sign up to get our newsletter
        </p>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="email-field">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="checkbox-field">
            <input
              type="checkbox"
              id="subscribe"
              checked={isSubscribed}
              onChange={() => setIsSubscribed(!isSubscribed)}
            />
            <label htmlFor="subscribe">Yes, Subscribe me to your newsletter.</label>
          </div>
          <button type="submit" className="subscribe-button">SUBSCRIBE</button>
        </form>
      </div>
      </center>
    </div>
    </div>
  );
};

export default StayUp;
