import React from "react";
import "../css/herosection.css";
import heroImg from "../assets/asset 1.jpeg";

function HeroSection() {
  return (
    <div className="heroSection">
      <div className="heroBg">
        <img src={heroImg} alt="" />
      </div>
      <div className="heroMain">
        <div className="heroContent">
          <h3>
            Looking for Customized Technology Solutions for your RCM Business?
          </h3>
          <p>
            Looking for customized technology solutions for your Revenue Cycle
            Management (RCM) business? Streamline operations, enhance
            efficiency, and boost revenue with tailored software designed to
            optimize billing, claims management, and data analytics—helping you
            stay competitive and improve patient satisfaction.
          </p>
          <button>Read More</button>
        </div>
        {/* <img src={heroGif} alt="" /> */}
      </div>
    </div>
  );
}

export default HeroSection;
