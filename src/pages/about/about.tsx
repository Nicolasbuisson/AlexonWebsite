import { Footer } from "../../components/footer/footer";
import { InstaSection } from "../../components/insta/instaSection";
import { Navigation } from "../../components/navigation/navigation";
import { Offerings } from "../../components/offerings/offerings";
import "./about.css";

export const About = () => {
  return (
    <div className="about-container">
      <Navigation showIcons></Navigation>
      <section className="about-section-hero-container">
        <div className="about-hero">
          <h1 className="about-hero-header">About Us</h1>
          <div className="about-hero-picture"></div>
          <p className="about-hero-paragraph">
            A born artist hailing from the picturesque landscapes of the UK.
            Through the lens, Gatsby weaves a tapestry of emotion, light, and
            timeless moments, inviting you to embark on a visual journey where
            each photograph tells a story of its own.
          </p>
        </div>
      </section>
      <section className="about-services-section">
        <Offerings />
      </section>
      <section className="about-story-section">
        <div className="about-story-section-title">
          <h3>Founder's Story</h3>
          <img
            className="about-story-logo"
            src="/assets/logos/Signature-white.png"
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
            tempore reprehenderit reiciendis sint minima soluta earum dolore
            corporis, quod harum, labore molestiae dolorem alias cupiditate
            repudiandae. Consequatur possimus odit quibusdam.
          </p>
        </div>
        <div className="about-story-image-grid">
          <img src="/assets/images/road.jpg" />
          <img src="/assets/images/plain.jpg" />
          <img src="/assets/images/rice-hills.jpg" />
          <img src="/assets/images/road.jpg" />
        </div>
      </section>
      <InstaSection />
      <Footer></Footer>
    </div>
  );
};
