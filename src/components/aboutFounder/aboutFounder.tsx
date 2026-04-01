"use client";
import "./aboutFounder.css";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export const AboutFounder = () => {
  const founderSectionRef = useRef<HTMLDivElement>(null);
  const founderImageRef = useRef<HTMLImageElement>(null);
  const founderTextRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const founderImage = founderImageRef.current;

    const imageWidthTimeline = gsap.timeline({
      defaults: { ease: "none" }, // linear so scrub maps 1-to-1 with scroll
      scrollTrigger: {
        trigger: founderSectionRef.current,
        start: "top bottom-=100px",
        end: "top center",
        scrub: 1,
      },
    });

    imageWidthTimeline.to(founderImage, {
      width: "100%",
    });

    const imageFilterTimeline = gsap.timeline({
      defaults: { ease: "none" }, // linear so scrub maps 1-to-1 with scroll
      scrollTrigger: {
        trigger: founderTextRef.current,
        start: "top bottom-=100px",
        end: "top center",
        scrub: 1,
      },
    });

    imageFilterTimeline.to(founderImage, {
      filter: "blur(8px) brightness(0.6)",
    });
  }, []);

  return (
    <section className="about-founder-section" ref={founderSectionRef}>
      <div className="about-founder-sticky-container">
        <div className="about-founder-image-wrapper" ref={founderImageRef}>
          <Image
            src="https://d128kbp85lo7cj.cloudfront.net/images/AlexonHorizontal.jpg"
            fill
            alt="Alexon founder portrait"
          />
        </div>
      </div>
      <div className="about-founder-text-container" ref={founderTextRef}>
        <h2>
          Founder,
          <br />
          Alexandre Buisson
        </h2>
        <p>
          Alexandre Buisson is a French director, filmmaker, and content
          strategist based in Dubai, UAE. Growing up surrounded by diverse
          cultures sparked an early fascination with people, places, and the
          stories that connect them. Recognizing the power storytelling holds to
          shape perception, Alex later studied business at McGill University in
          Canada, where he developed a deep understanding of how digital
          marketing and content can drive real impact for brands.
        </p>
        <p>
          Today, Alexon's work sits at the intersection of cinematic
          storytelling and strategic thinking. His approach is rooted in
          capturing emotion, ideas, and moments that often go
          unnoticed—transforming the intangible into something tangible through
          powerful visual narratives.
        </p>
      </div>
    </section>
  );
};
