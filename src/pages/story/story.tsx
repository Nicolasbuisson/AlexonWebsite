import { Footer } from "../../components/footer/footer";
import { Navigation } from "../../components/navigation/navigation";
import { TimelineItem } from "../../components/timelineItem/timelineItem";
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
        <TimelineItem
          title="June 2019"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Leo a diam
        sollicitudin tempor id. Morbi tempus iaculis urna id volutpat lacus. Est
        lorem ipsum dolor sit amet consectetur adipiscing elit."
          images={
            <img
              src={require("../../assets/images/lake.jpg")}
              alt=""
              className="story-timeline-image"
            ></img>
          }
        ></TimelineItem>
        <TimelineItem
          title="December 2020"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Leo a diam
        sollicitudin tempor id. Morbi tempus iaculis urna id volutpat lacus. Est
        lorem ipsum dolor sit amet consectetur adipiscing elit."
          images={
            <img
              src={require("../../assets/images/lake.jpg")}
              alt=""
              className="story-timeline-image"
            ></img>
          }
          isLast
        ></TimelineItem>
      </section>
      <Footer></Footer>
    </div>
  );
};
