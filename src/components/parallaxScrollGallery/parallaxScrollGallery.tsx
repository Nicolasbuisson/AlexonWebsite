"use client";
import "./parallaxScrollGallery.css";
import { ParallaxScrollColumn } from "./parallaxScrollColumn";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useWindowSize } from "../../hooks/useWindowSize";

export const ParallaxScrollGallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const { height, width } = useWindowSize();

  const coef1 =
    width < 1240
      ? width < 1000
        ? width < 800
          ? width < 600
            ? 3.3
            : 3.6
          : 4.0
        : 4.4
      : 5.1;
  const coef2 =
    width < 1240
      ? width < 1000
        ? width < 800
          ? width < 600
            ? 3.15
            : 3.3
          : 3.7
        : 4.1
      : 4.8;
  const coef3 =
    width < 1240
      ? width < 1000
        ? width < 800
          ? width < 600
            ? 3.4
            : 3.8
          : 4.1
        : 4.6
      : 5.25;
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * coef1]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * coef2]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * coef3]);

  return (
    <div ref={containerRef} className="parallax-scroll-gallery">
      <ParallaxScrollColumn
        videos={[
          "https://d128kbp85lo7cj.cloudfront.net/reels/Belcore.mp4",
          "https://d128kbp85lo7cj.cloudfront.net/reels/Corona.mp4",
          "https://d128kbp85lo7cj.cloudfront.net/reels/L'Equilibre.mp4",
          "https://d128kbp85lo7cj.cloudfront.net/reels/Weekenders1.mp4",
        ]}
        parallaxCoefficient={y1}
      />
      <ParallaxScrollColumn
        videos={[
          "https://d128kbp85lo7cj.cloudfront.net/reels/Claptone.mp4",
          "https://d128kbp85lo7cj.cloudfront.net/reels/Elewana.mp4",
          "https://d128kbp85lo7cj.cloudfront.net/reels/Prepinson.mp4",
          "https://d128kbp85lo7cj.cloudfront.net/reels/Weekenders2.mp4",
        ]}
        parallaxCoefficient={y2}
      />
      {width >= 420 && (
        <ParallaxScrollColumn
          videos={[
            "https://d128kbp85lo7cj.cloudfront.net/reels/Vacier.mp4",
            "https://d128kbp85lo7cj.cloudfront.net/reels/Atlantis.mp4",
            "https://d128kbp85lo7cj.cloudfront.net/reels/Ylee.mp4",
            "https://d128kbp85lo7cj.cloudfront.net/reels/CoinbasePenrosePartners.mp4",
          ]}
          parallaxCoefficient={y3}
        />
      )}
    </div>
  );
};
