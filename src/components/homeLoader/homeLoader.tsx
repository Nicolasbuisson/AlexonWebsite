"use client";
import "./homeLoader.css";
import { RefObject } from "react";
import { ResponsiveImage } from "../responsiveImage/responsiveImage";

interface IHomeLoaderProps {
  containerRef: RefObject<HTMLDivElement>;
  columnRef: RefObject<HTMLDivElement>;
  cardsRef: RefObject<(HTMLDivElement | null)[]>;
  overlayImgRef: RefObject<HTMLImageElement>;
  images: {
    desktopSrc: string;
    mobileSrc: string;
    label: string;
    overlay?: boolean;
  }[];
}

export const HomeLoader = (props: IHomeLoaderProps) => {
  const { containerRef, columnRef, cardsRef, overlayImgRef, images } = props;

  return (
    <div ref={containerRef} className="home-loader-container">
      <div ref={columnRef} className="home-loader-column" style={{}}>
        {images.map((image, i) => {
          return (
            <div
              key={i}
              ref={(el) => {
                cardsRef.current![i] = el;
              }}
              className="home-loader-image-wrapper"
            >
              <ResponsiveImage
                ref={image.overlay ? overlayImgRef : null}
                desktopSrc={image.desktopSrc}
                mobileSrc={image.mobileSrc}
                alt={image.label}
                // eager-load: cards start offscreen, so lazy loading would
                // delay them until the scroll animation reaches them
                priority
                fetchPriority="high"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
