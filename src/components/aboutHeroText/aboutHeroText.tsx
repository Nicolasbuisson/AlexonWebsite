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
          "Alexon Media crafts compelling visual narratives that captivate and convert. We are a team of storytellers, innovators, and digital strategists led by Alexon. Nimble, innovative, and always ahead of the curve, we turn ideas into impactful content that resonates across platforms. Let’s tell your story boldly, authentically, and with purpose."
        }
        className="about-hero-paragraph"
        scrollYProgress={scrollYProgress}
        startingOpacity={0}
        startFromEnd={false}
      />
    </div>
  );
};
