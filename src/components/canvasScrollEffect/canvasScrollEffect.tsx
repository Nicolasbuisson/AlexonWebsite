"use client";
import "./canvasScrollEffect.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { MotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import nextConfig from "../../../next.config";

interface CanvasScrollEffectProps {
  //frames: HTMLImageElement[];
  scrollYProgress: MotionValue<number>;
}
// LOOK INTO IMAGE HOSTING ON AWS INSTEAD OF PUBLIC FOLDER
// need to preload all images from the AWS bucket beforehand...
// unless I decide to do it in the public folder...
// can just put them all in the public folder and have them served directly from website
// but can also look into putting them on AWS and seeing if server can preload all of them
// and pass them as a prop to the clientside component

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
        canvasRef.current?.getContext("2d")?.drawImage(
          images[index - 1],
          0, //ref?.current.width / 2 - images[index - 1].width / 2,
          0 // ref?.current.height / 2 - images[index - 1].height / 2
        );
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

  // how to make canvas responsive if gotta set its height and width
  // took the height and width of the images
  // gotta fix that using ffmpeg, not sure why it reduced their size compared to the video...

  return (
    <canvas
      ref={canvasRef}
      height={563}
      width={1000}
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
