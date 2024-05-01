import { Footer } from "../../components/footer/footer";
import { Navigation } from "../../components/navigation/navigation";
import { TimelineItem } from "../../components/timelineItem/timelineItem";
import { TimelineItemExplicitGrid } from "../../components/timelineItemExplicitGrid/timelineItemExplicitGrid";
import "./story.css";

export const Story = () => {
  return (
    <div className="story-container">
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
              className="story-timeline-image rotate-2-deg-left"
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
            <div className="story-timeline-two-image-container">
              <img
                src={require("../../assets/images/lake.jpg")}
                alt=""
                className="story-timeline-image story-timeline-two-image-first-image"
              ></img>
              <img
                src={require("../../assets/images/rice-hills.jpg")}
                alt=""
                className="story-timeline-image story-timeline-two-image-second-image"
              ></img>
            </div>
          }
        ></TimelineItem>
        <TimelineItem
          title="January 2021"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Leo a diam
        sollicitudin tempor id. Morbi tempus iaculis urna id volutpat lacus. Est
        lorem ipsum dolor sit amet consectetur adipiscing elit."
          images={
            <div className="story-timeline-three-image-container">
              <img
                src={require("../../assets/images/lake.jpg")}
                alt=""
                className="story-timeline-image story-timeline-three-image-first-image z-index-2"
              ></img>
              <img
                src={require("../../assets/images/road.jpg")}
                alt=""
                className="story-timeline-image story-timeline-three-image-second-image z-index-1"
              ></img>
              <img
                src={require("../../assets/images/rice-hills.jpg")}
                alt=""
                className="story-timeline-image story-timeline-three-image-third-image z-index-2"
              ></img>
            </div>
          }
          isLast
        ></TimelineItem>
        {/* <TimelineItemExplicitGrid
          title="June 2019"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Leo a diam
        sollicitudin tempor id. Morbi tempus iaculis urna id volutpat lacus. Est
        lorem ipsum dolor sit amet consectetur adipiscing elit."
          images={
            <img
              src={require("../../assets/images/lake.jpg")}
              alt=""
              className="story-timeline-image rotate-2-deg-left"
            ></img>
          }
        ></TimelineItemExplicitGrid>
        <TimelineItemExplicitGrid
          title="December 2020"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Leo a diam
        sollicitudin tempor id. Morbi tempus iaculis urna id volutpat lacus. Est
        lorem ipsum dolor sit amet consectetur adipiscing elit."
          images={
            <div className="story-timeline-two-image-container">
              <img
                src={require("../../assets/images/lake.jpg")}
                alt=""
                className="story-timeline-image story-timeline-two-image-first-image"
              ></img>
              <img
                src={require("../../assets/images/rice-hills.jpg")}
                alt=""
                className="story-timeline-image story-timeline-two-image-second-image"
              ></img>
            </div>
          }
        ></TimelineItemExplicitGrid>
        <TimelineItemExplicitGrid
          title="January 2021"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Leo a diam
        sollicitudin tempor id. Morbi tempus iaculis urna id volutpat lacus. Est
        lorem ipsum dolor sit amet consectetur adipiscing elit."
          images={
            <div className="story-timeline-three-image-container">
              <img
                src={require("../../assets/images/lake.jpg")}
                alt=""
                className="story-timeline-image story-timeline-three-image-first-image z-index-2"
              ></img>
              <img
                src={require("../../assets/images/road.jpg")}
                alt=""
                className="story-timeline-image story-timeline-three-image-second-image z-index-1"
              ></img>
              <img
                src={require("../../assets/images/rice-hills.jpg")}
                alt=""
                className="story-timeline-image story-timeline-three-image-third-image z-index-2"
              ></img>
            </div>
          }
          isLast
        ></TimelineItemExplicitGrid> */}
      </section>
      <Footer></Footer>
    </div>
  );
};
