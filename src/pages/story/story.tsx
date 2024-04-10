import { Navigation } from "../../components/navigation/navigation";
import "./story.css";

export const Story = () => {
  return (
    <div>
      <Navigation></Navigation>
      <section className="story-section-container">
        <img
          src={require("../../assets/images/plain.jpeg")}
          alt=""
          className="story-hero-image"
        ></img>
        <p className="story-hero-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam
          sollicitudin tempor id. Morbi tempus iaculis urna id volutpat lacus.
          Est lorem ipsum dolor sit amet consectetur adipiscing elit.
        </p>
      </section>
      <section className="story-section-container story-timeline-section">
        <div className="story-timeline-item">
          <p className="story-timeline-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a
            diam sollicitudin tempor id. Morbi tempus iaculis urna id volutpat
            lacus. Est lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
          <div className="story-section-timeline-cirlce-container">
            <h4>June 2019</h4>
            <span className="story-timeline-circle"></span>
          </div>
          <img
            src={require("../../assets/images/plain.jpeg")}
            alt=""
            className="story-timeline-image"
          ></img>
        </div>
      </section>
    </div>
  );
};
