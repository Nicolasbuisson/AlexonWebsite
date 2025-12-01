"use client";
import Link from "next/link";
import { WorkItemProps } from "../../types/work";
import "./projects.css";
import Image from "next/image";
import { useEffect, useMemo } from "react";

interface IProps {
  projects: WorkItemProps[];
  homePageFilter?: boolean;
}

export const Projects = (props: IProps) => {
  const { projects, homePageFilter = false } = props;
  const projectsToRender = useMemo(() => {
    return homePageFilter
      ? projects.filter((project) => project.displayOnHomePage)
      : projects;
  }, []);

  useEffect(() => {
    // Select all cards
    const cards = document.querySelectorAll(".projects-grid-card");

    const cardsEventListenerToggle = (
      addEventListener: boolean = true
    ): void => {
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
          if (addEventListener) {
            card.addEventListener("mouseenter", playVideo);
            card.addEventListener("mouseleave", pauseVideo);
            card.addEventListener("touchstart", playVideo);
            card.addEventListener("touchend", pauseVideo);
          } else {
            card.removeEventListener("mouseenter", playVideo);
            card.removeEventListener("mouseleave", pauseVideo);
            card.removeEventListener("touchstart", playVideo);
            card.removeEventListener("touchend", pauseVideo);
          }
        }
      });
    };

    cardsEventListenerToggle(true); // add event listeners on all cards
    return () => {
      cardsEventListenerToggle(false); // remove event listeners on all cards on unmount
    };
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
                src={project.gridVideoPreview}
                preload="auto"
                muted
                loop
                playsInline
                poster={project.gridImage}
                className="projects-grid-card-preview"
              ></video>
            ) : project.gridImage ? (
              <Image
                src={project.gridImage}
                alt={`project thumbnail for ${project.title}`}
                className="project-thumbnail"
                fill
              />
            ) : (
              <></>
            )}
            {project.logoImage ? (
              <Image
                src={project.logoImage}
                alt={`client logo for ${project.client}`}
                className="project-logo"
                fill
                style={{ inset: "50%" }}
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
