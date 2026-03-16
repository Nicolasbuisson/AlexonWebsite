"use client";
import "./homeLoader.css";
import { RefObject } from "react";
import Image from "next/image";

interface IHomeLoaderProps {
  containerRef: RefObject<HTMLDivElement>;
  columnRef: RefObject<HTMLDivElement>;
  cardsRef: RefObject<(HTMLDivElement | null)[]>;
  lastImgRef: RefObject<HTMLImageElement>;
  images: { src: string; label: string }[];
}

export const HomeLoader = (props: IHomeLoaderProps) => {
  const { containerRef, columnRef, cardsRef, lastImgRef, images } = props;

  return (
    <div ref={containerRef} className="home-loader-container">
      <div ref={columnRef} className="home-loader-column" style={{}}>
        {images.map((image, i) => {
          const isLast = i === images.length - 1;
          return (
            <div
              key={i}
              ref={(el) => {
                cardsRef.current![i] = el;
              }}
              className="home-loader-image-wrapper"
            >
              <Image
                ref={isLast ? lastImgRef : null}
                src={image.src}
                alt={image.label}
                fill
                objectFit="cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
