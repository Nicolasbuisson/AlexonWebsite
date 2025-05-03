"use client";
import "./parallaxScrollGallery.css";
import { ParallaxScrollColumn } from "./parallaxScrollColumn";
import nextConfig from "../../../next.config";
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
    width < 740 ? (width < 600 ? (width < 420 ? 1.44 : 1.6) : 1.85) : 2.2;
  const coef2 = width < 740 ? (width < 600 ? 1.02 : 1.15) : 1.4;
  const coef3 = width < 740 ? (width < 600 ? 1.25 : 1.5) : 1.9;
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * coef1]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * coef2]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * coef3]);

  return (
    <div ref={containerRef} className="parallax-scroll-gallery">
      <ParallaxScrollColumn
        videos={[
          nextConfig.basePath + "/assets/videos/shortform/Claptone.mov",
          nextConfig.basePath + "/assets/videos/shortform/Claptone.mov",
          nextConfig.basePath + "/assets/videos/shortform/Claptone.mov",
          width < 420
            ? nextConfig.basePath + "/assets/videos/shortform/Vacier.mov"
            : "",
        ]}
        parallaxCoefficient={y1}
      />
      <ParallaxScrollColumn
        videos={[
          nextConfig.basePath + "/assets/videos/shortform/Corona.mov",
          nextConfig.basePath +
            "/assets/videos/shortform/ElewanaCollection.mov",
          nextConfig.basePath + "/assets/videos/shortform/Prepinson.mov",
          width < 420
            ? nextConfig.basePath + "/assets/videos/shortform/Prepinson.mov"
            : "",
        ]}
        parallaxCoefficient={y2}
      />
      {width >= 420 && (
        <ParallaxScrollColumn
          videos={[
            nextConfig.basePath + "/assets/videos/shortform/Vacier.mov",
            nextConfig.basePath + "/assets/videos/shortform/Vacier.mov",
            nextConfig.basePath + "/assets/videos/shortform/Vacier.mov",
          ]}
          parallaxCoefficient={y3}
        />
      )}
    </div>
  );
};
