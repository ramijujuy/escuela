import React from 'react';
import { Link } from 'react-router-dom';
import "./Landing.css"

const Landing = () => {
  return (
    <div className="landing-container" style={{backgroundImage: `url('img/blue-ocean.jpg')`}}>
      <div className="landing-overlay"></div>
      <div className="landing-content">
        <Link to="/home" className="landing-logo">
          <img src="img/logo1.jpg" alt="Logo" />
        </Link>
        <Link to="/home" className="landing-btn">Ir a la página de inicio</Link>
      </div>
    </div>
  );
};

export default Landing;