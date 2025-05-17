"use client";
import { useCallback } from "react";
import { InstaItemProps } from "../../types/insta";
import "./insta.css";
import { InstaItem } from "./instaItem";
import { Carousel } from "../carousel/carousel";
import { useWindowSize } from "../../hooks/useWindowSize";

interface InstaProps {
  instaItems: InstaItemProps[];
  totalItems: number;
}

export const Insta = (props: InstaProps) => {
  const { instaItems, totalItems } = props;

  const { width: windowWidth } = useWindowSize();

  const getPageSize = useCallback((): number => {
    if (windowWidth <= 440) {
      return 2;
    } else if (440 < windowWidth && windowWidth < 880) {
      return 4;
    } else {
      return 5;
    }
  }, [windowWidth]);

  return (
    <Carousel
      pageSize={getPageSize()}
      totalPages={Math.floor(totalItems / getPageSize())}
    >
      {instaItems.map((item) => {
        return (
          <InstaItem
            key={item.mediaURL}
            permaLink={item.permaLink}
            mediaURL={item.mediaURL}
            mediaType={item.mediaType}
            caption={item.caption}
            thumbnailURL={item.thumbnailURL}
          ></InstaItem>
        );
      })}
    </Carousel>
  );
};
