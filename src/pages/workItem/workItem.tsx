import { Footer } from "../../components/footer/footer";
import { Navigation } from "../../components/navigation/navigation";
import { WorkItemProps } from "../../types/work";
import "./workItem.css";

export const WorkItem = (props: WorkItemProps) => {
  const { title, client, description, videoUrl, gridImage, stills } = props;

  return (
    <div className="workItem-container">
      <Navigation transparent></Navigation>
      <section className="workItem-section">
        <div
          className="workItem-title-background"
          style={{ backgroundImage: `url(/assets/images/${gridImage})` }}
        >
          <h2>{title}</h2>
        </div>

        <div className="video-container">
          <iframe
            src={videoUrl}
            allow="autoplay; fullscreen"
            allowFullScreen
            className="video"
          ></iframe>
          <div className="video-details">
            <h4>
              Client: <h4>{client}</h4>
            </h4>
            <p>{description}</p>
          </div>
        </div>
        <div className="stills-grid">
          {stills.map((stillImg) => {
            return (
              <img
                key={"stills-" + stillImg.imageUrl}
                src={`/assets/images/${stillImg.imageUrl}`}
                alt="project stills picture"
              ></img>
            );
          })}
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};
