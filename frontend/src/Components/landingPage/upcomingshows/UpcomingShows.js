import React, { useState } from 'react';
import './UpcomingShows.css'; // The CSS file for styling

const UpcomingShows = () => {
  // Simulated dynamic event data
  const [events] = useState([
    {
      id: 1,
      date: 'Wed, 04 April',
      title: 'Music Concert',
    },
    {
      id: 2,
      date: 'Fri, 07 April',
      title: 'Jazz Night',
    },
    {
      id: 3,
      date: 'Sat, 15 April',
      title: 'Rock Festival',
    },
    {
      id: 4,
      date: 'Sun, 23 April',
      title: 'Classical Evening',
    },
  ]);

  // Function to handle "See More" button click
  const handleSeeMore = () => {
    console.log('See More button clicked!'); // Replace with your logic to show more events
  };

  return (
    <div>
      <div className="tab-container">
        <div className="tab-item active">UPCOMING</div>
        <div className="tab-item">SHOWS</div>
      </div>
      <div className="upcoming-shows-container">
        {/* Map through the events and display them */}
        {events.map((event) => (
          <div key={event.id} className="event-info">
            <div className="event-date">{event.date}</div>
            <button className="ticket-button">Get Ticket</button>
            <div className="event-title">{event.title}</div>
           
          </div>
        ))}

        {/* "See More" Button */}
        <div className="see-more-container">
          <button className="see-more-button" onClick={handleSeeMore}>
            <span className="arrow">→</span> See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingShows;
