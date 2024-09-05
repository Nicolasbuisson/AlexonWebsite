import { ButtonBackgroundHoverEffect } from "../buttonBackgroundHoverEffect/buttonBackgroundHoverEffect";
import { Socials } from "../socials/socials";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <h1 className="footer-header">Let's work together</h1>
      <ButtonBackgroundHoverEffect
        text="Contact us"
        className="footer-button"
      ></ButtonBackgroundHoverEffect>
      <div className="footer-items-container">
        <div className="footer-newsletter-container">
          <h4>Join our newsletter</h4>
          <input placeholder="enter your email"></input>
          <p>Stay up to date with our latest offers and projects!</p>
        </div>
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
