import React from 'react';

import "./about-us.css";
import Header from '../Header/Header';
const AboutUs = () => {
  return (
    <div>
      <Header/>
    <div className="about-us-container">

      <h1>About Us</h1>
      <p>
        Welcome to our company! We are a dedicated team of professionals
        passionate about what we do.
      </p>
      <p>
        Our mission is to provide exceptional products/services to our
        customers and create a positive impact in the industry.
      </p>
      <p>
        At our company, we believe in collaboration, innovation, and
        continuous improvement. We strive to exceed our customers'
        expectations and deliver outstanding results.
      </p>
      <p>
        Get in touch with us today to learn more about our offerings and how
        we can help you achieve your goals.
      </p>
    </div>
    </div>
  );
};

export default AboutUs;
