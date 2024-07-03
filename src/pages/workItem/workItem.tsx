import { Footer } from "../../components/footer/footer";
import { Navigation } from "../../components/navigation/navigation";
import "./workItem.css";

interface WorkItemProps {
  title: string;
  client: string;
  description: string;
  videoUrl: string;
  stills: string[];
}

export const WorkItem = (props: WorkItemProps) => {
  const { title, client, description, videoUrl, stills } = props;

  return (
    <div className="workItem-container">
      <Navigation transparent></Navigation>
      <section className="workItem-section">
        <div className="workItem-title-background">
          <h2>Title</h2>
        </div>

        <div className="video-container">
          <iframe
            src="https://player.vimeo.com/video/694255333"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="video"
          ></iframe>
          <div className="video-details">
            <h4>
              Client: <h4>Corona</h4>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a
              diam sollicitudin tempor id. Morbi tempus iaculis urna id volutpat
              lacus. Est lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="stills-grid">
          <img
            src={require("../../assets/images/sunset-purple-tree.jpg")}
            alt="stills grid picture"
          ></img>
          <img
            src={require("../../assets/images/lake.jpg")}
            alt="stills grid picture"
          ></img>
          <img
            src={require("../../assets/images/road.jpg")}
            alt="stills grid picture"
          ></img>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};
