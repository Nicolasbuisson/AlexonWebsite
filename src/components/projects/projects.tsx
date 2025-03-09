"use client";
import Link from "next/link";
import { WorkItemProps } from "../../types/work";
import "./projects.css";
import nextConfig from "../../../next.config";
import Image from "next/image";

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
            href={`/productions/${project.route}`}
            className="projects-grid-card stacked"
            key={"projects-grid-card-" + project.title}
            onClick={() => window.scrollTo(0, 0)}
          >
            <Image
              src={nextConfig.basePath + `/assets/${project.gridImage}`}
              alt={`project thumbnail for ${project.title}`}
              className="project-thumbnail"
              fill
            />
            {project.logoImage ? (
              <Image
                src={
                  nextConfig.basePath +
                  `/assets/clientLogos/${project.logoImage}`
                }
                alt={`client logo for ${project.client}`}
                className="project-logo"
                fill
              />
            ) : (
              <></>
            )}
            <h4>{project.title}</h4>
          </Link>
        );
      })}
    </div>
  );
};
