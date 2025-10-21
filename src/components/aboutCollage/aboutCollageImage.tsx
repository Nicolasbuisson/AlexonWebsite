"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import "./aboutCollageImage.css";

interface AboutCollageImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  className: string;
}

export const AboutCollageImage = (props: AboutCollageImageProps) => {
  const { src, alt, height, width, className } = props;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  return (
    <Image
      ref={ref}
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={`${className} ${inView ? "show" : "hidden"}`}
    />
  );
};
