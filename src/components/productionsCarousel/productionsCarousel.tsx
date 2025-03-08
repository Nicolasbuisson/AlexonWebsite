"use client";
import "./productionsCarousel.css";
import { WorkItemProps } from "../../types/work";
import projectsJSON from "../../resources/projects.json";
import { Carousel } from "../carousel/carousel";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useCallback } from "react";
import { ProductionsCarouselCard } from "./productionsCarouselCard";

interface ProductionsCarouselProps {
  productionToExclude?: string;
}

export const ProductionsCarousel = (props: ProductionsCarouselProps) => {
  const { productionToExclude } = props;

  const windowWidth = useWindowSize();

  const getPageSize = useCallback((): number => {
    if (windowWidth <= 440) {
      return 1;
    } else if (440 < windowWidth && windowWidth < 880) {
      return 2;
    } else {
      return 3;
    }
  }, [windowWidth]);

  return (
    <Carousel
      pageSize={getPageSize()}
      totalPages={Math.floor(projectsJSON.projects.length / getPageSize())}
      itemWidthMin={256}
      itemWidthMax={512}
    >
      {projectsJSON.projects
        .filter((project) => project.title !== productionToExclude)
        .map((project: WorkItemProps) => {
          return (
            <ProductionsCarouselCard
              key={"production-carousel-" + project.route}
              title={project.title}
              route={project.route}
              imageSrc={project.gridImage}
            />
          );
        })}
    </Carousel>
  );
};
