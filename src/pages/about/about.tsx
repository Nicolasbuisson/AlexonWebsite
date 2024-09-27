import { Footer } from "../../components/footer/footer";
import { Navigation } from "../../components/navigation/navigation";
import "./about.css";

export const About = () => {
  return (
    <div className="about-container">
      <Navigation></Navigation>
      <section className="about-section-container"></section>
      <Footer></Footer>
    </div>
  );
};
