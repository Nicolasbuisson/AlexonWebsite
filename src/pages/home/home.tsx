import { Footer } from "../../components/footer/footer";
import { Insta } from "../../components/insta/insta";
import { Navigation } from "../../components/navigation/navigation";
import "./home.css";

export const Home = () => {
  return (
    <div className="home-section-container">
      <Navigation sticky></Navigation>
      <section className="home-hero-section">
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
      </section>
      <section>
        <Insta></Insta>
      </section>
      <Footer></Footer>
    </div>
  );
};
