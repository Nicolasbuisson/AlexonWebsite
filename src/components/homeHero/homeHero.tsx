"use client";
import "./homeHero.css";
import { ButtonBackgroundHoverEffect } from "../buttonBackgroundHoverEffect/buttonBackgroundHoverEffect";
import { Navigation } from "../navigation/navigation";
import { HomeLoader } from "../homeLoader/homeLoader";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export const HomeHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const columnRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lastImgRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLImageElement>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // ─── placeholder images (replace with your own) ───────────────────────────────
  const IMAGES = [
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      label: "01 — Peaks",
    },
    {
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
      label: "02 — Forest",
    },
    {
      src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80",
      label: "03 — Desert",
    },
    {
      src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80",
      label: "04 — Lake",
    },
    {
      src: "https://d128kbp85lo7cj.cloudfront.net/images/VisualizerAlexonMediaFrame-v1.jpg",
      label: "05 — Valley",
    },
    // remove translateY of parent? or put translateY on all images and just screw the column container
  ];

  const LAST_SRC = IMAGES[IMAGES.length - 1].src;

  // or use the useGSAP hook
  useLayoutEffect(() => {
    if (
      containerRef &&
      columnRef &&
      cardsRef &&
      lastImgRef &&
      overlayRef &&
      videoRef &&
      heroTextRef &&
      navRef
    ) {
      const imageContainer = containerRef.current!;
      const column = columnRef.current!;
      const cards = cardsRef.current;
      const lastImg = lastImgRef.current!;
      const overlay = overlayRef.current!;
      const video = videoRef.current!;
      const heroText = heroTextRef.current!;
      const nav = navRef.current!;

      // measure
      const cardH = cards?.[0]!.offsetHeight ?? 0;
      const gap = 24; // 1.5rem at 16px base
      const totalShift = (IMAGES.length - 2) * (cardH + gap);

      // initial container and column state
      gsap.set([imageContainer, column], { zIndex: 21 });
      // initial overlay state — hidden, low z-index
      gsap.set(overlay, { autoAlpha: 0, zIndex: 0 });
      // initial hero text state - opacity hidden and slightly lower
      gsap.set(heroText, { y: 100, opacity: 0 });
      // initial nav state - opacity hidden
      gsap.set(nav, { opacity: 0 });
      // initial video state - opacity hidden
      gsap.set(video, { opacity: 0 });

      // timeline
      const tl = gsap.timeline({ paused: true, delay: 0.7 });

      // 1. Scroll column up
      tl.to(column, {
        y: -totalShift,
        duration: 2.0,
        ease: "power1.inOut",
      });

      // 2. Snap overlay — kept as .call() because getBoundingClientRect() must be live
      tl.call(
        () => {
          const rect = lastImg.getBoundingClientRect();
          gsap.set([imageContainer, column], {
            zIndex: 0,
          });
          gsap.set(overlay, {
            autoAlpha: 1,
            zIndex: 9999,
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
          });
        },
        [],
        ">",
      );

      // 3. Expand overlay, fade out lastImg, reset column — all in parallel
      tl.to(
        overlay,
        {
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          duration: 1.2,
          ease: "power1.inOut",
        },
        ">",
      );

      tl.to(
        lastImg,
        {
          opacity: 0,
          duration: 0.05,
          ease: "power1.inOut",
        },
        "<",
      ); // start at same time as overlay expansion

      tl.to(
        column,
        {
          y: -(1.5 * totalShift),
          duration: 1.2,
          ease: "power1.inOut",
        },
        "<",
      ); // start at same time as overlay expansion

      // 4. Fade overlay out, fade video in
      tl.to(
        overlay,
        {
          opacity: 0,
          duration: 0.4,
          ease: "power1.inOut",
        },
        ">0.4", // start 0.4 seconds after end of overlay expansion
      );

      tl.to(
        video,
        {
          opacity: 1,
          duration: 0.1, // make it faster so it's already there?
          ease: "power1.inOut",
        },
        "<", // start at same time as overlay fade
      );

      // 5. Play video — kept as .call() because .play() is a side effect that needs to be in callback
      tl.call(
        () => {
          video.play();
        },
        [],
        ">0.6",
      );

      // 6. Fade in heroText and nav, slide heroText to y:0 — in parallel
      tl.to(
        [heroText, nav],
        {
          opacity: 1,
          duration: 0.7,
          ease: "power1.inOut",
        },
        ">",
      );

      tl.to(
        heroText,
        {
          y: 0,
          duration: 0.7,
          ease: "power1.inOut",
        },
        "<",
      ); // parallel with opacity

      tl.play();
      return () => {
        tl.kill();
      };
    }
  }, []);

  return (
    <>
      <Navigation ref={navRef} sticky titleScroll showIcons />
      <section className="home-hero-section">
        <HomeLoader
          containerRef={containerRef}
          columnRef={columnRef}
          cardsRef={cardsRef}
          lastImgRef={lastImgRef}
          images={IMAGES}
        />
        <div className="home-hero-bg">
          <video
            ref={videoRef}
            src={
              "https://d128kbp85lo7cj.cloudfront.net/videos/VisualizerAlexonMedia-v1.mp4"
            }
            muted
            loop
            playsInline
          ></video>
          <Image
            ref={overlayRef}
            src={LAST_SRC}
            width={1920}
            height={1080}
            alt="fullscreen overlay"
            className="home-hero-overlay"
            style={{
              visibility: "hidden", // GSAP autoAlpha controls this
            }}
          />
        </div>
        <div ref={heroTextRef} className="home-hero-text">
          <h3 className="home-pitch">
            Where cinematic excellence meets strategic performance
          </h3>
          <ButtonBackgroundHoverEffect
            text="Let's Work Together"
            link="/contact"
            accent
          ></ButtonBackgroundHoverEffect>
        </div>
      </section>
    </>
  );
};
