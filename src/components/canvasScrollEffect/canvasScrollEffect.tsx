"use client";
import "./canvasScrollEffect.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { MotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import nextConfig from "../../../next.config";

interface CanvasScrollEffectProps {
  scrollYProgress: MotionValue<number>;
}

export const CanvasScrollEffect = (props: CanvasScrollEffectProps) => {
  const { scrollYProgress } = props;
  const TOTAL_FRAMES = 113;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    // need to load these on the client side because cannot use a Next Image to draw on the canvas
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `${nextConfig.basePath}/aboutHeroFrames/${i}.webp`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const render = useCallback(
    (index: number) => {
      if (images[index - 1]) {
        canvasRef.current?.getContext("2d")?.drawImage(images[index - 1], 0, 0);
      }
    },
    [images]
  );

  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);

  useMotionValueEvent(currentIndex, "change", (latest) => {
    render(Number(latest.toFixed()));
  });

  useEffect(() => {
    // show first image on mount
    render(1);
  }, [render, images]);

  return (
    <canvas
      ref={canvasRef}
      height={1080}
      width={1920}
      style={{
        // add first frame as backgroundImage so canvas displays the first frame
        // while the images are loading
        backgroundImage: `url(${nextConfig.basePath}/aboutHeroFrames/1.webp)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></canvas>
  );
};
