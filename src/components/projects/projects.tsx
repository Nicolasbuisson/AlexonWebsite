"use client";
import Link from "next/link";
import { WorkItemProps } from "../../types/work";
import "./projects.css";
import nextConfig from "../../../next.config";
import Image from "next/image";
import { useEffect } from "react";

interface IProps {
  projects: WorkItemProps[];
  homePageFilter?: boolean;
}

export const Projects = (props: IProps) => {
  const { projects, homePageFilter = false } = props;
  const projectsToRender = homePageFilter
    ? projects.filter((project) => project.displayOnHomePage)
    : projects;

  useEffect(() => {
    // Select all cards
    const cards = document.querySelectorAll(".projects-grid-card");

    cards.forEach((card) => {
      const preview = card.querySelector("video");
      if (preview) {
        const playVideo = () => {
          preview.play();
        };

        const pauseVideo = () => {
          preview.pause();
          preview.currentTime = 0;
        };
        preview.addEventListener("mouseenter", playVideo);
        preview.addEventListener("mouseleave", pauseVideo);
        preview.addEventListener("touchstart", playVideo);
        preview.addEventListener("touchend", pauseVideo);
      }
    });
  }, []);

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
            {project.gridVideoPreview ? (
              <video
                src={nextConfig.basePath + project.gridVideoPreview}
                muted
                loop
                className="projects-grid-card-preview"
              ></video>
            ) : project.gridImage ? (
              <Image
                src={nextConfig.basePath + project.gridImage}
                alt={`project thumbnail for ${project.title}`}
                className="project-thumbnail"
                fill
              />
            ) : (
              <></>
            )}
            {project.logoImage ? (
              <Image
                src={nextConfig.basePath + project.logoImage}
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
