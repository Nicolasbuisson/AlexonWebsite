"use client";
import "./aboutHeroV2.css";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export const AboutHeroV2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);
  const image4Ref = useRef<HTMLDivElement>(null);
  const image5Ref = useRef<HTMLDivElement>(null);
  const image6Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const image1 = image1Ref.current;
    const image2 = image2Ref.current;
    const image3 = image3Ref.current;
    const image4 = image4Ref.current;
    const image5 = image5Ref.current;
    const image6 = image6Ref.current;

    const tl = gsap.timeline({
      defaults: { ease: "none" }, // linear so scrub maps 1-to-1 with scroll
      scrollTrigger: {
        trigger: "#trigger-container", // the tall scroll container
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        markers: true, // remove, only for debugging
      },
    });

    // duration of each animation is determined by scrollTrigger
    // it divides it up equally between all of them
    // if want to increase timeline duration, increase container height for more scroll room

    tl.to(image1, { z: 1400 });
    tl.to(image2, { z: 1200 }, "<50%"); // start at same time as previous animation reaches 50% completion
    tl.to(image3, { opacity: 1, z: 1500 }, "<50%");
    tl.to(image4, { opacity: 1, z: 1500 }, "<50%");
    tl.to(image5, { opacity: 1, z: 1200 }, "<50%");
    tl.to(image6, { opacity: 1, z: 1200 }, "<50%");
  }, []);

  return (
    <section className="about-hero-container" id="trigger-container">
      <div className="about-hero-sticky-container">
        <div className="about-hero-images-container">
          <div className="about-hero-image-wrapper" ref={image1Ref}>
            <Image
              src="https://d128kbp85lo7cj.cloudfront.net/aboutAnimationImages/BaliVilla.jpeg"
              fill
              alt="Bali Villa"
            />
          </div>
          <div className="about-hero-image-wrapper" ref={image2Ref}>
            <Image
              src="https://d128kbp85lo7cj.cloudfront.net/aboutAnimationImages/StereoParc.jpeg"
              fill
              alt="Stereo Parc"
            />
          </div>
          <div className="about-hero-image-wrapper" ref={image3Ref}>
            <Image
              src="https://d128kbp85lo7cj.cloudfront.net/aboutAnimationImages/Corona.jpg"
              fill
              alt="Corona"
            />
          </div>
          <div className="about-hero-image-wrapper" ref={image4Ref}>
            <Image
              src="https://d128kbp85lo7cj.cloudfront.net/aboutAnimationImages/DubaiMarathons.jpeg"
              fill
              alt="Dubai Marathons"
            />
          </div>
          <div className="about-hero-image-wrapper" ref={image5Ref}>
            <Image
              src="https://d128kbp85lo7cj.cloudfront.net/aboutAnimationImages/DubaiSkyline.jpg"
              fill
              alt="Dubai Skyline"
            />
          </div>
          <div className="about-hero-image-wrapper" ref={image6Ref}>
            <Image
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
