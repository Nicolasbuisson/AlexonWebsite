"use client";
import Link from "next/link";
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
    const visibleProjects = projects.filter(
      (project) => !project.hideFromProductions,
    );
    return homePageFilter
      ? visibleProjects.filter((project) => project.displayOnHomePage)
      : visibleProjects;
  }, []);

  useEffect(() => {
    // Select all cards
    const cards = document.querySelectorAll(".projects-grid-card");
    const cleanups: (() => void)[] = [];

    cards.forEach((card) => {
      const preview = card.querySelector("video");
      if (!preview) return;

      // play() is async: pausing while it is still pending rejects it with an
      // AbortError, so hold on to the promise and pause once it has settled
      let pending: Promise<void> | null = null;
      let shouldPlay = false;

      // a preview that cannot be decoded otherwise fails completely silently
      const onError = () =>
        console.error("preview failed to load", preview.src, preview.error);
      preview.addEventListener("error", onError);

      const playVideo = () => {
        shouldPlay = true;
        pending = preview.play();
        pending.catch((err: unknown) => {
          // leaving the card before playback starts aborts it, which is fine;
          // anything else is a real fault worth seeing
          if (err instanceof DOMException && err.name === "AbortError") return;
          console.error("preview failed to play", preview.src, err);
        });
      };

      const pauseVideo = () => {
        shouldPlay = false;
        const stop = () => {
          if (shouldPlay) return; // hovered back in while play() was settling
          preview.pause();
          preview.currentTime = 0;
        };
        if (pending) {
          pending.then(stop).catch(() => {});
        } else {
          stop();
        }
      };

      card.addEventListener("mouseenter", playVideo);
      card.addEventListener("mouseleave", pauseVideo);
      card.addEventListener("touchstart", playVideo);
      card.addEventListener("touchend", pauseVideo);

      // same function references, so these actually detach
      // adds each card's event listeners cleanup function to array without calling it
      cleanups.push(() => {
        card.removeEventListener("mouseenter", playVideo);
        card.removeEventListener("mouseleave", pauseVideo);
        card.removeEventListener("touchstart", playVideo);
        card.removeEventListener("touchend", pauseVideo);
        preview.removeEventListener("error", onError);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
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
