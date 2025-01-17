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
      <div className="footer-items-container">
        <div className="footer-socials-container">
          <h4>Stay in touch</h4>
          <a
            href="https://www.instagram.com/alexoonnn/"
            className="footer-link"
          >
            @Alexon
          </a>
          <a href="mailto:contact@alexonmedia.com" className="footer-link">
            contact@alexonmedia.com
          </a>
          <Socials></Socials>
        </div>
      </div>
    </footer>
  );
};
