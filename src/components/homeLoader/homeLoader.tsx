"use client";
import { RefObject } from "react";
import Image from "next/image";

interface IHomeLoaderProps {
  columnRef: RefObject<HTMLDivElement>;
  cardsRef: RefObject<(HTMLDivElement | null)[]>;
  lastImgRef: RefObject<HTMLImageElement>;
  images: { src: string; label: string }[];
}

export const HomeLoader = (props: IHomeLoaderProps) => {
  const { columnRef, cardsRef, lastImgRef, images } = props;

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--clr-dark)",
        overflow: "hidden",
        // if overflow here is not hidden, its size grows by how much we shift the columnRef in the timeline
        // which makes the overlay and video not line up cause all of sudden the sizes changed dynamically...

        // control Z-index from GSAP timeline
      }}
    >
      <div
        ref={columnRef}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          width: "min(420px, 90vw)",
        }}
      >
        {images.map((image, i) => {
          const isLast = i === images.length - 1;
          return (
            <div
              key={i}
              ref={(el) => {
                cardsRef.current![i] = el;
              }}
              style={{
                position: "relative",
                flexShrink: 0,
                width: "100%",
                height: "320px",
                borderRadius: "3px",
                overflow: "hidden",
              }}
            >
              <Image
                ref={isLast ? lastImgRef : null}
                src={image.src}
                width={800}
                height={800}
                alt={image.label}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  zIndex: 100,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
