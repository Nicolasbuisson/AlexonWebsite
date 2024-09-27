import { Footer } from "../../components/footer/footer";
import { Navigation } from "../../components/navigation/navigation";
import "./about.css";

export const About = () => {
  return (
    <div>
      <Navigation></Navigation>
      <section className="about-section-container">
        <div className="about-hero">
          <h1 className="about-hero-header">About me</h1>
          <div className="about-hero-picture"></div>
          <p className="about-hero-paragraph">
            A born artist hailing from the picturesque landscapes of the UK.
            Through the lens, Gatsby weaves a tapestry of emotion, light, and
            timeless moments, inviting you to embark on a visual journey where
            each photograph tells a story of its own.
          </p>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};
