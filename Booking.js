import React from 'react';
import '../style.css'

const Booking = () => (
  <section className="booking" id="booking">
    <div className="booking-container">
      <h2>Book Your Trip</h2>
      <form>
        <div className="form-group">
          <label htmlFor="destination">Destination:</label>
          <input type="text" id="destination" placeholder="Enter destination" required />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input type="date" id="startDate" required />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input type="date" id="endDate" required />
        </div>
        <div className="form-group">
          <label htmlFor="travelers">Number of Travelers:</label>
          <input type="number" id="travelers" min="1" defaultValue="1" required />
        </div>
        <button type="submit" className="btn btn-primary">Book Now</button>
      </form>
    </div>
  </section>
);

export default Booking;