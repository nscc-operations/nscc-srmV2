import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="container">
      {/* NSCC header (unchanged) */}
      <header className="header">
        <h1>
          <div className="text-container">
            <span className="big-text big-text-left">NSC</span>
            <span className="big-text big-text-right">C</span>
            <div className="small-text">
              <p>Newton</p>
              <p>School</p>
              <p>Coding</p>
              <p>Club</p>
            </div>
          </div>
        </h1>
      </header>

      {/* Footer Section */}
      <footer className="footer-container">
        <div className="footer-content">
          {/* Left Column - Navigation */}
          <div className="left-column">
            <div className="navigation-section">
              <h3 className="section-title">Quick Navigation</h3>
              <ul className="main-menu">
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#about-us">About Us</a>
                </li>
                <li>
                  <a href="#domains">Domains</a>
                </li>
                <li>
                  <a href="#events">Events</a>
                </li>
                <li>
                  <a href="#sponsors">Sponsors</a>
                </li>
                <li>
                  <a href="#our-team-section">Our Team</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
              </ul>
            </div>

            <div className="social-section">
              <h3 className="section-title">Connect With Us</h3>
              <div className="social-wrapper">
                <a
                  href="https://www.instagram.com/nscc_srm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="social-btn instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/newton-school-coding-club-srmist/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on LinkedIn"
                  className="social-btn linkedin"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/nsccsrm?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Twitter"
                  className="social-btn twitter"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact & Location */}
          <div className="right-column">
            <div className="contact">
              <h3 className="section-title">Get In Touch</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-label">Phone:</span>
                  <div className="contact-details">
                    <a href="tel:+916230931075">+91 6230931075</a>
                    <a href="tel:+919211780967">+91 9211780967</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <div className="contact-details">
                    <a href="mailto:nscc@srmist.edu.in">nscc@srmist.edu.in</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="location">
              <h3 className="section-title">Visit Us</h3>
              <div className="map-container">
                <iframe
                  title="NSCC SRMIST Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7780.60833030308!2d80.03934309274017!3d12.823611099913151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f70d37c35faf%3A0x8cd4ea84a63b4131!2sSRM%20UNIVERSITY-KTR%20CAMPUS%2C%20Potheri%2C%20Kattankulathur%2C%20Tamil%20Nadu%20603203!5e0!3m2!1sen!2sin!4v1755937302878!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="address-info">
                  <div className="address-caption">
                    <strong>SRM Institute of Science & Technology</strong>
                    <br />
                    Kattankulathur, Chennai - 603203
                    <br />
                    Tamil Nadu, India
                  </div>
                  <div className="office-hours">
                    <span className="hours-label">Office Hours:</span>
                    <span className="hours-time">
                      Monday - Friday, 10:00 AM - 6:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} Newton School Coding Club, SRMIST.
              All rights reserved.
            </p>
            <p className="tagline">
              Empowering minds through code, innovation, and collaboration.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
