"use client";
import { useRef } from "react";
import "./aboutHero.css";
import { CanvasScrollEffect } from "../canvasScrollEffect/canvasScrollEffect";
import { useScroll } from "framer-motion";
import { AboutHeroText } from "../aboutHeroText/aboutHeroText";

export const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="about-hero-container">
      <CanvasScrollEffect
        scrollYProgress={scrollYProgress}
      ></CanvasScrollEffect>
      <AboutHeroText scrollYProgress={scrollYProgress} />
      <div className="about-hero-background-layer" />
    </div>
  );
};
