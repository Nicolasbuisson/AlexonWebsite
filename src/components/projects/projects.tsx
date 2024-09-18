import { Link } from "react-router-dom";
import { WorkItemProps } from "../../types/work";
import "./projects.css";

interface IProps {
  projects: WorkItemProps[];
  max?: number;
}

export const Projects = (props: IProps) => {
  const { projects, max = projects.length } = props;
  return (
    <div className="projects-grid">
      {projects.map((project, i) => {
        return i < max ? (
          <Link
            to={`/work/${project.title.replaceAll(" ", "").toLowerCase()}`}
            className="card"
            key={"work-grid-card-" + project.title}
          >
            <div className="stacked">
              <img
                src={`/assets/images/${project.gridImage}`}
                alt={`project thumbnail for ${project.description}`}
                className="project-thumbnail"
              ></img>
              <img
                src={`/assets/clientLogos/${project.logoImage}`}
                alt={`client logo for ${project.client}`}
                className="project-logo"
              ></img>
              <h4>{project.title}</h4>
            </div>
          </Link>
        ) : (
          <></>
        );
      })}
    </div>
  );
};
