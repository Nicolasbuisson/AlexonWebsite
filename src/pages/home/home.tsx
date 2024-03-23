import { Footer } from "../../components/footer/footer";
import { Navigation } from "../../components/navigation/navigation";
import "./home.css";

export const Home = () => {
  return (
    <div>
      <section className="home-section-container home-hero-section">
        <Navigation></Navigation>
        <div className="home-hero-bg">
          <div className="home-hero-text-container">
            <h1>Alexon</h1>
            <div className="animated-text-container">
              <h3 className="animated-text">Artist</h3>
              <h3 className="animated-text">Videographer</h3>
              <h3 className="animated-text">Photographer</h3>
              <h3 className="animated-text">Athlete</h3>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </section>
      <section className="home-section-container home-insta-section"></section>
    </div>
  );
};
