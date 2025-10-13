"use client";
import "./aboutHeroText.css";
import { HeroParagraph } from "../heroParapgraph/heroParagraph";
import { MotionValue } from "framer-motion";

interface AboutHeroTextProps {
  scrollYProgress: MotionValue<number>;
}

export const AboutHeroText = (props: AboutHeroTextProps) => {
  const { scrollYProgress } = props;

  return (
    <div className="about-hero-text">
      <h1 className="about-hero-header">About Us</h1>
      <HeroParagraph
        text={
          "Alexon Media is a video production agency creating luxury brand films and high-performance short-form content. We combine cinematic storytelling with strategic precision to move audiences and drive measurable brand growth."
        }
        className="about-hero-paragraph"
        scrollYProgress={scrollYProgress}
        startingOpacity={0}
        startFromEnd={false}
      />
    </div>
  );
};
