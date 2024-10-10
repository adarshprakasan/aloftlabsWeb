import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/asset 0.png";

function Footer() {
  return (
    <div className="footerSection">
      <div className="footerContainer">
        <div className="footerLinks">
          <div className="footerLogo">
            <img src={logo} alt="" />
            <Link>
              <h1>Aloft Labs</h1>
            </Link>
          </div>
          <Link>
            <h1>Ph: +1 (773)362-8455</h1>
          </Link>
          <Link>
            <h1>Info@aloftlabsai.com</h1>
          </Link>
        </div>
        <div className="footerLink">
          <Link>
            <h1>Solution</h1>
          </Link>
          <Link>
            <h1>About Us</h1>
          </Link>
          <Link>
            <h1>Blog</h1>
          </Link>
        </div>
        <div className="footerMail">
          <h1>Subscribe to our Newsletter</h1>
          <h3>Enter your Mail here</h3>
          <input type="email" placeholder="Enter your email Id" />
          <button>Submit</button>
        </div>
      </div>
      <div className="footerData">
        © 2024 by Aloft Labs. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
