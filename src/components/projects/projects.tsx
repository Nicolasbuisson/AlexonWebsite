import { Link } from "react-router-dom";
import { WorkItemProps } from "../../types/work";
import "./projects.css";

interface IProps {
  projects: WorkItemProps[];
  max?: number;
}

export const Projects = (props: IProps) => {
  const { projects, max = undefined } = props;
  return (
    <div className="projects-grid">
      {projects.map((project, i) => {
        if (max) {
          return i < max ? (
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
          ) : (
            <></>
          );
        } else {
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
        }
      })}
    </div>
  );
};
