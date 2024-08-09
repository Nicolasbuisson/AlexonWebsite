import { Socials } from "../socials/socials";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <Socials></Socials>
      <a href="https://www.instagram.com/alexoonnn/" className="footer-link">
        @Alexon
      </a>
      <a href="mailto:alexon@gmail.com" className="footer-link">
        alexon@gmail.com
      </a>
    </div>
  );
};
