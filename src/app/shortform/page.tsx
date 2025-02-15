import "./shortform.css";
import { Navigation } from "../../components/navigation/navigation";
import nextConfig from "../../../next.config";
import { ButtonBackgroundHoverEffect } from "../../components/buttonBackgroundHoverEffect/buttonBackgroundHoverEffect";
import { Offerings } from "../../components/offerings/offerings";

function ShortForm() {
  return (
    <div className="shortform-container">
      <Navigation />
      <section className="shortform-hero-section">
        <div className="shortform-video-background">
          <video
            src={nextConfig.basePath + "/assets/videos/Productions.mp4"}
            muted
            autoPlay
            loop
          ></video>
          <div className="shortform-hero-text">
            <h2 className="shortform-title">
              Optimized vertical videos for Limitless Impact
            </h2>
            <p>Maximize your reach, increase your conversions,</p>
            <p>
              and boost your sales with our effortless short-form content
              offering
            </p>
            <ButtonBackgroundHoverEffect
              text="See Packages"
              className="shortform-hero-button"
              link="#shortform-packages"
            ></ButtonBackgroundHoverEffect>
          </div>
        </div>
      </section>
      <section className="shortform-description">
        <Offerings />
      </section>
      <section className="shortform-packages" id="shortform-packages">
        packages
      </section>
      <section className="shortform-work">our work</section>
      <section className="shortform-results">results/key stats</section>
    </div>
  );
}

export default ShortForm;
