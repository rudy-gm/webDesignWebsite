import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/HeaderImage.png";

const Header = () => {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <div className="main_header-left">
          <h4>Top Web Desingers in Ocoee</h4>
          <h1>Freedom for your Website</h1>
          <p>
            Illustratum is a company dedicated to building the right website for
            your business, whether is generating more leads for your business,
            booking appointments, or having a hassle-free online store. 
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
          <a href="https://calendly.com/illustratum-web-design/quick-chat" target="_blank" className="btn lg">Schedule a Call!</a>
        </div>

        <div className="main_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-image">
            <img src={Image} alt="Main Header" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
