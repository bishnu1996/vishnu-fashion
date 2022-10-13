import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-contact">
        <div className="footer-text">
          <h3>ready to get stated</h3>
          <h3>talk to us today</h3>
        </div>
        <div className="footer-image">
          <button>
            <NavLink to="/contacts">Get Started</NavLink>
          </button>
        </div>
      </section>
      <section className="footer-main">
        <div className="footer-box">
          <h3>Techy Vishnu</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            ex odio velit, nulla ab tenetur provident fugit veniam ad.
          </p>
        </div>
        <div className="footer-box">
          <h3>Subscribe to get important updates</h3>
          <form action="">
            <input type="text" placeholder="Your e-mail" />
            <button>SUBSCRIBE</button>
          </form>
        </div>
        <div className="footer-box">
          <h3>Follow Us</h3>
        </div>
        <div className="footer-box">
          <h3>Call Us</h3>
          <p>+91-9653091770</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
