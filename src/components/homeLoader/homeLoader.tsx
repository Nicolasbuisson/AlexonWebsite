"use client";
import "./homeLoader.css";
import { RefObject } from "react";
import Image from "next/image";

interface IHomeLoaderProps {
  containerRef: RefObject<HTMLDivElement>;
  columnRef: RefObject<HTMLDivElement>;
  cardsRef: RefObject<(HTMLDivElement | null)[]>;
  overlayImgRef: RefObject<HTMLImageElement>;
  images: { src: string; label: string; overlay?: boolean }[];
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
              <Image
                ref={image.overlay ? overlayImgRef : null}
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
