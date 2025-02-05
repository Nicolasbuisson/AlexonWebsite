import { Link } from "react-router-dom";
import { WorkItemProps } from "../../types/work";
import "./projects.css";

interface IProps {
  projects: WorkItemProps[];
  homePageFilter?: boolean;
}

export const Projects = (props: IProps) => {
  const { projects, homePageFilter = false } = props;
  const projectsToRender = homePageFilter
    ? projects.filter((project) => project.displayOnHomePage)
    : projects;
  return (
    <div className="projects-grid">
      {projectsToRender.map((project) => {
        return (
          <Link
            to={`/productions/${project.title
              .replaceAll(" ", "")
              .toLowerCase()}`}
            className="card"
            key={"work-grid-card-" + project.title}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="stacked">
              <img
                src={import.meta.env.BASE_URL + `/assets/${project.gridImage}`}
                alt={`project thumbnail for ${project.description}`}
                className="project-thumbnail"
              ></img>
              {project.logoImage ? (
                <img
                  src={
                    import.meta.env.BASE_URL +
                    `/assets/clientLogos/${project.logoImage}`
                  }
                  alt={`client logo for ${project.client}`}
                  className="project-logo"
                ></img>
              ) : (
                <></>
              )}
              <h4>{project.title}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
