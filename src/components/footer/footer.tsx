import Link from "next/link";
import { ButtonBackgroundHoverEffect } from "../buttonBackgroundHoverEffect/buttonBackgroundHoverEffect";
import { Socials } from "../socials/socials";
import "./footer.css";

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
        accent
      ></ButtonBackgroundHoverEffect>
      <hr className="footer-hr" />
      <div className="footer-items-container">
        <Link href="/" className="footer-logo">
          <img
            src={"https://d128kbp85lo7cj.cloudfront.net/logos/AM-white.png"}
            alt="Alexon Logo"
          />
        </Link>
        <div className="footer-contact-container">
          <p className="footer-navigation-title">Contact</p>
          <p>Dubai, UAE</p>
          <a href="mailto:contact@alexonmedia.com" className="footer-link">
            contact@alexonmedia.com
          </a>
          <a href="tel:+33783131299" className="footer-link">
            +971 585676713
          </a>
          <a href="tel:+33783131299" className="footer-link">
            +33 7 83 13 12 99
          </a>
        </div>
        <div className="footer-navigation-container">
          <p className="footer-navigation-title">Navigation</p>
          <Link href="/" className="footer-link">
            Home
          </Link>
          <Link href="/shortform" className="footer-link">
            Short Form
          </Link>
          <Link href="/productions" className="footer-link">
            Productions
          </Link>
          <Link href="/about" className="footer-link">
            About
          </Link>
          <Link href="/contact" className="footer-link">
            Contact
          </Link>
        </div>
        <div className="footer-socials-container">
          <p className="footer-navigation-title">Follow Us</p>
          <Socials flexDirection="row" className="footer-socials"></Socials>
        </div>
      </div>
    </footer>
  );
};
