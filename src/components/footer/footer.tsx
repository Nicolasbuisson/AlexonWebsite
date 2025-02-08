import Link from "next/link";
import { ButtonBackgroundHoverEffect } from "../buttonBackgroundHoverEffect/buttonBackgroundHoverEffect";
import { Socials } from "../socials/socials";
import "./footer.css";
import nextConfig from "../../../next.config";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <h1 className="footer-header-wrapper">
        Let's <span className="footer-header"> work together</span>
      </h1>
      <ButtonBackgroundHoverEffect
        text="Book a Call"
        className="footer-button"
        link="/contact"
      ></ButtonBackgroundHoverEffect>
      <hr className="footer-hr" />
      <div className="footer-items-container">
        <Link href="/" className="footer-logo">
          <img
            src={nextConfig.basePath + "/assets/logos/AM-white.png"}
            alt="Alexon Logo"
          />
        </Link>
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
          <Link href="/" className="footer-link">
            Home
          </Link>
          <Link href="/services/shortform" className="footer-link">
            Short Form Services
          </Link>
          <Link href="/productions" className="footer-link">
            Productions
          </Link>
          <Link href="/work" className="footer-link">
            Projects
          </Link>
          <Link href="/about" className="footer-link">
            About
          </Link>
          <Link href="/contact" className="footer-link">
            Contact
          </Link>
        </div>
        <div className="footer-socials-container">
          <h4>Follow Us</h4>
          <Socials flexDirection="row" className="footer-socials"></Socials>
        </div>
      </div>
    </footer>
  );
};
