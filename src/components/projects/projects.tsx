"use client";
import Link from "next/link";
import { WorkItemProps } from "../../types/work";
import "./projects.css";
import nextConfig from "../../../next.config";

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
            href={`/productions/${project.title
              .replaceAll(" ", "")
              .toLowerCase()}`}
            className="card"
            key={"work-grid-card-" + project.title}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="stacked">
              <img
                src={nextConfig.basePath + `/assets/${project.gridImage}`}
                alt={`project thumbnail for ${project.description}`}
                className="project-thumbnail"
              ></img>
              {project.logoImage ? (
                <img
                  src={
                    nextConfig.basePath +
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
