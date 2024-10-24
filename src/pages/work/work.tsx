import { Footer } from "../../components/footer/footer";
import { Navigation } from "../../components/navigation/navigation";
import "./work.css";
import { HorizontalScroller } from "../../components/horizontalScroller/horizontalScroller";
import { WorkItemProps } from "../../types/work";
import { Projects } from "../../components/projects/projects";

interface WorkProps {
  projects: WorkItemProps[];
}

export const Work = (props: WorkProps) => {
  const { projects } = props;

  return (
    <div className="work-container">
      <Navigation showIcons></Navigation>
      <section className="work-section-container">
        <h2 className="work-title">Our Projects</h2>
        <Projects projects={projects}></Projects>
      </section>
      <section className="work-section-container">
        <h2 className="work-clients-title">Our Clients</h2>
        <HorizontalScroller>
          <img
            src={"/assets/clientLogos/Corona.png"}
            alt="logo"
            height="100px"
          ></img>
          <img
            src={"/assets/clientLogos/Corona.png"}
            alt="logo"
            height="100px"
          ></img>
          <img
            src={"/assets/clientLogos/Corona.png"}
            alt="logo"
            height="100px"
          ></img>
          <img
            src={"/assets/clientLogos/Corona.png"}
            alt="logo"
            height="100px"
          ></img>
          <img
            src={"/assets/clientLogos/Corona.png"}
            alt="logo"
            height="100px"
          ></img>
          <img
            src={"/assets/clientLogos/Corona.png"}
            alt="logo"
            height="100px"
          ></img>
        </HorizontalScroller>
      </section>
      <Footer></Footer>
    </div>
  );
};
