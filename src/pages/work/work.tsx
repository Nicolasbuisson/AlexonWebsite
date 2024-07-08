import { Link } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import { Navigation } from "../../components/navigation/navigation";
import "./work.css";
import { LogoScroller } from "../../components/logoScroller/logoScroller";
import { WorkItemProps } from "../../types/work";

interface WorkProps {
  projects: WorkItemProps[];
}

export const Work = (props: WorkProps) => {
  const { projects } = props;

  return (
    <div className="work-container">
      <Navigation></Navigation>
      <section className="work-section-container">
        <h2>Our Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => {
            return (
              <Link
                to={`/work/${project.title.replaceAll(" ", "").toLowerCase()}`}
                className="card"
                key={"work-grid-card-" + project.title}
              >
                <div className="stacked">
                  <img
                    src={`/assets/images/${project.gridImage}`}
                    alt="project card"
                  ></img>
                  <h4>{project.title}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="work-section-container">
        <h2>Our Clients</h2>
        <LogoScroller></LogoScroller>
      </section>
      <Footer></Footer>
    </div>
  );
};
