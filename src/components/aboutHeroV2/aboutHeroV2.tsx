"use client";
import "./aboutHeroV2.css";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export const AboutHeroV2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const image1Ref = useRef<HTMLImageElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);
  const image3Ref = useRef<HTMLImageElement>(null);
  const image4Ref = useRef<HTMLImageElement>(null);
  const image5Ref = useRef<HTMLImageElement>(null);
  const image6Ref = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {}, []);

  return (
    <section className="about-hero-container">
      <div className="about-hero-sticky-container">
        <div className="about-hero-images-container">
          <div className="about-hero-image-wrapper">
            <Image
              ref={image1Ref}
              src="https://d128kbp85lo7cj.cloudfront.net/aboutAnimationImages/BaliVilla.jpeg"
              fill
              alt="Bali Villa"
            />
          </div>
          <div className="about-hero-image-wrapper">
            <Image
              ref={image2Ref}
              src="https://d128kbp85lo7cj.cloudfront.net/aboutAnimationImages/StereoParc.jpeg"
              fill
              alt="Stereo Parc"
            />
          </div>
          <div className="about-hero-image-wrapper">
            <Image
              ref={image3Ref}
              src="https://d128kbp85lo7cj.cloudfront.net/aboutAnimationImages/Corona.jpg"
              fill
              alt="Corona"
            />
          </div>
          <div className="about-hero-image-wrapper">
            <Image
              ref={image4Ref}
              src="https://d128kbp85lo7cj.cloudfront.net/aboutAnimationImages/DubaiMarathons.jpeg"
              fill
              alt="Dubai Marathons"
            />
          </div>
          <div className="about-hero-image-wrapper">
            <Image
              ref={image5Ref}
              src="https://d128kbp85lo7cj.cloudfront.net/aboutAnimationImages/DubaiSkyline.jpg"
              fill
              alt="Dubai Skyline"
            />
          </div>
          <div className="about-hero-image-wrapper">
            <Image
              ref={image6Ref}
              src="https://d128kbp85lo7cj.cloudfront.net/aboutAnimationImages/Atlantis.jpeg"
              fill
              alt="Atlantis"
            />
          </div>
        </div>
        <div className="about-hero-text-wrapper">
          <h3>About us</h3>
          <h1>
            Why we started <br />
            Alexon Media
          </h1>
        </div>
      </div>
    </section>
  );
};
