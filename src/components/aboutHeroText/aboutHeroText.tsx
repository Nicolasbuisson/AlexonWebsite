"use client";
import "./aboutHeroText.css";
import { HeroParagraph } from "../heroParapgraph/heroParagraph";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useCallback } from "react";

export const AboutHeroText = () => {
  const { width: windowWidth } = useWindowSize();

  const scrollOffsetIntersection = useCallback(() => {
    if (windowWidth >= 1240) {
      return "0.2";
    } else if (windowWidth < 1240 && windowWidth > 720) {
      return "0.3";
    } else if (windowWidth <= 720 && windowWidth > 600) {
      return "0.4";
    } else if (windowWidth <= 600 && windowWidth > 460) {
      return "0.55";
    } else {
      return "0.6";
    }
  }, [windowWidth]);

  return (
    <div className="about-hero-text">
      <h1 className="about-hero-header">About Us</h1>
      <HeroParagraph
        text={
          "Alexon Media crafts compelling visual narratives that captivate and convert. We are a team of storytellers, innovators, and digital strategists led by Alexon. Nimble, innovative, and always ahead of the curve, we turn ideas into impactful content that resonates across platforms. Let’s tell your story boldly, authentically, and with purpose."
        }
        className="about-hero-paragraph"
        scrollOffset={["end " + scrollOffsetIntersection(), "end 0"]}
        startFromEnd={true}
      />
    </div>
  );
};
