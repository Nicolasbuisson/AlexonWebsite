import "./shortform.css";
import { Navigation } from "../../components/navigation/navigation";
import nextConfig from "../../../next.config";
import { ButtonBackgroundHoverEffect } from "../../components/buttonBackgroundHoverEffect/buttonBackgroundHoverEffect";
import { Offerings } from "../../components/offerings/offerings";
import { Statistic } from "../../components/statistic/statistic";

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
      <section className="shortform-results">
        <div className="shortform-results-text">
          <h3>Results you can see</h3>
          <h3 className="grey">And measure</h3>
          <p className="grey">
            Capture attention, tell your story, and drive results with our
            short-form video packages. Designed for virality and engagement, our
            videos make your brand stand out in the scroll and ultimately boost
            your revenues.
          </p>
        </div>
        <div className="stats-container">
          <Statistic
            title="ROI"
            statNumber={1}
            statString="#"
            statStringBeforeNumber
            description="Highest ROI of any marketing strategy"
          />
          <Statistic
            title="Reach"
            statNumber={8}
            statString="x"
            statStringBeforeNumber
            description="After 3 months"
          />
          <Statistic
            title="Cost Savings"
            statNumber={11000}
            statString="$"
            statStringBeforeNumber
            description="Saved anually on marketing expenses"
          />
          <Statistic
            title="Brand Perception"
            statNumber={93}
            statString="%"
            description="Increase in likelihood of purchase"
          />
          <Statistic
            title="Conversion Rate"
            statNumber={29}
            statString="%"
            statStringBeforeNumber
            description=" Increase after investing in your brand presence"
          />
          <Statistic
            title="Follower Growth"
            statNumber={59}
            statString="%"
            description="After a year"
          />
        </div>
      </section>
    </div>
  );
}

export default ShortForm;
