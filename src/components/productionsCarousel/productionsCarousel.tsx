"use client";
import "./productionsCarousel.css";
import { WorkItemProps } from "../../types/work";
import projectsJSON from "../../resources/projects.json";
import { Carousel } from "../carousel/carousel";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useCallback, useEffect, useState } from "react";
import { ProductionsCarouselCard } from "./productionsCarouselCard";

interface ProductionsCarouselProps {
  productionToExclude?: string;
}

export const ProductionsCarousel = (props: ProductionsCarouselProps) => {
  const { productionToExclude } = props;

  const projectsWithCurrentProjectExcluded = projectsJSON.projects.filter(
    (project) => project.title !== productionToExclude
  );

  const [pageSize, setPageSize] = useState<number>(1);
  const [totalProductionsShown, setTotalProductionsShown] = useState<number>(
    projectsWithCurrentProjectExcluded.length
  );

  const windowWidth = useWindowSize();

  const getPageSize = useCallback((): number => {
    if (windowWidth <= 580) {
      return 1;
    } else if (580 < windowWidth && windowWidth < 880) {
      return 2;
    } else {
      return 3;
    }
  }, [windowWidth]);

  const getTotalProductionsShown = useCallback((): number => {
    return (
      Math.floor(projectsWithCurrentProjectExcluded.length / pageSize) *
      pageSize
    );
  }, [pageSize]);

  // set state variable correctly on initial load
  useEffect(() => {
    setPageSize(getPageSize());
  }, []);

  // set state variable correctly whenever window width changes
  useEffect(() => {
    setPageSize(getPageSize());
  }, [windowWidth]);

  // set total productions to show in carousel whenever page size changes
  useEffect(() => {
    setTotalProductionsShown(getTotalProductionsShown());
  }, [pageSize]);

  return (
    <Carousel
      pageSize={pageSize}
      totalPages={Math.floor(totalProductionsShown / pageSize)}
      itemWidthMin={256}
      itemWidthMax={512}
      dynamicSize
      rootClass="production-carousel"
    >
      {projectsWithCurrentProjectExcluded
        .slice(0, totalProductionsShown)
        .map((project: WorkItemProps) => {
          return (
            <ProductionsCarouselCard
              key={"production-carousel-" + project.route}
              title={project.title}
              route={project.route}
              imageSrc={project.gridImage}
              client={project.client}
              logoImageSrc={project.logoImage}
              videoSrc={project.gridVideoPreview}
            />
          );
        })}
    </Carousel>
  );
};
