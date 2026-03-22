"use client";
import "./homeHero.css";
import { ButtonBackgroundHoverEffect } from "../buttonBackgroundHoverEffect/buttonBackgroundHoverEffect";
import { Navigation } from "../navigation/navigation";
import { HomeLoader } from "../homeLoader/homeLoader";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export const HomeHero = () => {
  const homeHeroSectionRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const columnRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const overlayImgRef = useRef<HTMLImageElement>(null);
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
      label: "same image as overlay to be expanded",
      overlay: true,
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      label: "06 — Peaks",
    },
  ];

  const overlaySrc =
    IMAGES.find((image) => image.overlay)?.src ?? IMAGES[IMAGES.length - 1].src;

  // or use the useGSAP hook
  useLayoutEffect(() => {
    if (
      homeHeroSectionRef &&
      imageContainerRef &&
      columnRef &&
      cardsRef &&
      overlayImgRef &&
      overlayRef &&
      videoRef &&
      heroTextRef &&
      navRef
    ) {
      const homeHeroSection = homeHeroSectionRef.current!;
      const imageContainer = imageContainerRef.current!;
      const column = columnRef.current!;
      const cards = cardsRef.current;
      const overlayImg = overlayImgRef.current!;
      const overlay = overlayRef.current!;
      const video = videoRef.current!;
      const heroText = heroTextRef.current!;
      const nav = navRef.current!;
      const allCardsExceptLast = cards.slice(0, -1);
      const lastCard = cards[cards.length - 1];

      // measure
      const cardH = cards?.[0]!.offsetHeight ?? 0;
      const gap = 24; // 1.5rem at 16px base
      const totalShift = Math.round((IMAGES.length - 2.3) * (cardH + gap));

      // initial container and column state
      gsap.set([imageContainer, column], { zIndex: 21 });
      // initial overlay state — hidden, low z-index
      gsap.set(overlay, { autoAlpha: 0, zIndex: 0 });
      // initial hero text state - opacity hidden and slightly lower
      gsap.set(heroText, { y: 100, opacity: 0 });
      // initial nav state - opacity hidden with hideOnMount prop
      // initial video state - opacity hidden
      gsap.set(video, { opacity: 0 });

      // timeline
      const tl = gsap.timeline({ paused: true, delay: 0.7 });

      const disableScroll = () => {
        document.body.style.overflow = "hidden";
        document.body.setAttribute("data-lenis-prevent", "true"); // Make sure you pass true as string
      };
      const enableScroll = () => {
        document.body.style.overflow = "auto";
        document.body.setAttribute("data-lenis-prevent", "false"); // Make sure you pass false as string
      };

      // 0. Disable scroll
      tl.call(
        () => {
          disableScroll();
        },
        [],
        "<",
      );

      // 1. Scroll all cards up
      tl.to(cards, {
        y: -totalShift,
        duration: 2.0,
        ease: "power1.inOut",
      });

      //2. Snap overlay — kept as .call() because getBoundingClientRect() must be live
      tl.call(
        () => {
          const rect = overlayImg.getBoundingClientRect();
          const parentRect = homeHeroSection.getBoundingClientRect();

          gsap.set(overlay, {
            autoAlpha: 1,
            zIndex: 9999,
            top: Math.abs(parentRect.top - rect.top),
            // not sure why but this should not be negative, so we must take absolute value
            // in case rect.top > parentRect.top
            left: rect.left,
            width: rect.width,
            height: rect.height,
          });
        },
        [],
        ">",
      );

      // 3. Expand overlay, fade out overlayImg,
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
        overlayImg,
        {
          opacity: 0,
          duration: 0.05,
          ease: "power1.inOut",
        },
        "<",
      ); // start at same time as overlay expansion

      // make other images scroll out of screen as if pushed by the overlay expansion
      tl.to(
        allCardsExceptLast,
        //cards,
        {
          y: -1.25 * totalShift,
          duration: 1.2,
          ease: "power1.inOut",
        },
        "<",
      ); // start at same time as overlay expansion

      // push last card down
      tl.to(
        lastCard,
        {
          y: -0.75 * totalShift,
          duration: 1.2,
          ease: "power1.inOut",
        },
        "<",
      ); // start at same time as overlay expansion

      //make cards z-index 0 again to make them stay behind
      tl.call(
        () => {
          gsap.set([imageContainer, column, cards], {
            zIndex: 0,
            opacity: 0,
          });
        },
        [],
        ">", // once cards finished moving out of frame
      );

      // 4. Fade overlay out, fade video in
      tl.to(
        overlay,
        {
          opacity: 0,
          duration: 0.4,
          ease: "power1.inOut",
        },
        ">0.2", // start 0.2 seconds after end of overlay expansion
      );

      tl.to(
        video,
        {
          opacity: 1,
          duration: 0.05, // make it faster so it's already there?
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
        ">0.2",
      );

      // 6. Fade in/slide heroText
      tl.to(
        heroText,
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power1.inOut",
        },
        ">",
      ); // parallel with opacity

      // 7. Make nav appear
      tl.to(
        [nav],
        {
          opacity: 1,
          duration: 1.0,
          ease: "power1.inOut",
        },
        "<0.7", // start 0.7 seconds after heroText animation start
      );

      // 8. Enable scroll
      tl.call(
        () => {
          enableScroll();
          gsap.set(document.body, {
            overflow: "auto",
          });
        },
        [],
        ">",
      );

      tl.play();
      return () => {
        tl.kill();
      };
    }
  }, []);

  return (
    <>
      <Navigation ref={navRef} sticky titleScroll showIcons hideOnMount />
      <section ref={homeHeroSectionRef} className="home-hero-section">
        <HomeLoader
          containerRef={imageContainerRef}
          columnRef={columnRef}
          cardsRef={cardsRef}
          overlayImgRef={overlayImgRef}
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
            src={overlaySrc}
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
