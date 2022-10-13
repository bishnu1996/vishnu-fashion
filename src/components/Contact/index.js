import React from "react";
import "./style.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <h3>contact page</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14357.385819698931!2d82.44535438104002!3d25.890978937250086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39906c600e8a549b%3A0xdb0ffb197dd6e692!2sBadlapur%2C%20Uttar%20Pradesh%20222125!5e0!3m2!1sen!2sin!4v1665337182857!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="conatct-form-container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/moqbldgk"
            method="post"
            className="form"
          >
            <input
              type="text"
              className="username"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />
            <input
              type="text"
              className="email"
              name="email"
              placeholder="email"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Enter your text"
              required
              autoComplete="off"
            ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
