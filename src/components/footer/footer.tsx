import { Link } from "react-router-dom";
import { ButtonBackgroundHoverEffect } from "../buttonBackgroundHoverEffect/buttonBackgroundHoverEffect";
import { Socials } from "../socials/socials";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <h2 className="footer-header">Let's work together</h2>
      <ButtonBackgroundHoverEffect
        text="Contact us"
        className="footer-button"
        link="contact"
      ></ButtonBackgroundHoverEffect>
      <ButtonBackgroundHoverEffect
        text="Book a call"
        className="footer-button"
        link="book"
      ></ButtonBackgroundHoverEffect>
      <hr className="footer-hr" />
      <div className="footer-items-container">
        <div className="footer-contact-container">
          <h4>Contact</h4>
          <p>Montréal, Canada</p>
          <a href="mailto:contact@alexonmedia.com" className="footer-link">
            contact@alexonmedia.com
          </a>
          <a href="tel:+15145577790" className="footer-link">
            +1 514 557 7790
          </a>
          <a href="tel:+33783131299" className="footer-link">
            +33 7 83 13 12 99
          </a>
        </div>
        <div className="footer-navigation-container">
          <h4>Navigation</h4>
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/services" className="footer-link">
            Services
          </Link>
          <Link to="/work" className="footer-link">
            Projects
          </Link>
          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </div>
        <div className="footer-socials-container">
          <h4>Follow Us</h4>
          <Socials flexDirection="row"></Socials>
        </div>
      </div>
    </footer>
  );
};
