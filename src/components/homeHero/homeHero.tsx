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

  const frameRef = useRef<HTMLDivElement>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const IMAGES = [
    {
      src: "https://d128kbp85lo7cj.cloudfront.net/homeAnimationImages/Atlantis.webp",
      label: "Atlantis",
    },
    {
      src: "https://d128kbp85lo7cj.cloudfront.net/homeAnimationImages/DJI.webp",
      label: "DJI",
    },
    {
      src: "https://d128kbp85lo7cj.cloudfront.net/homeAnimationImages/ON.webp",
      label: "ON",
    },
    {
      src: "https://d128kbp85lo7cj.cloudfront.net/homeAnimationImages/PepxVISA.webp",
      label: "Pep x VISA",
    },
    {
      src: "https://d128kbp85lo7cj.cloudfront.net/homeAnimationImages/VisualizerFrame.webp",
      label: "same image as overlay to be expanded",
      overlay: true,
    },
    {
      src: "https://d128kbp85lo7cj.cloudfront.net/homeAnimationImages/RiceFields.webp",
      label: "Alexon in a very chinese time of his life",
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
      const frame = frameRef.current!;
      const allCardsExceptLast = cards.slice(0, -1);
      const lastCard = cards[cards.length - 1];

      // drop the css transform that parks the column below the fold for the
      // first paint, so the rects below read layout positions and not the
      // parked ones. We are inside useLayoutEffect, so nothing paints between
      // this and the real start position being set further down.
      gsap.set(cards, { y: 0 });

      // measure — all coordinates are relative to the hero section, the same
      // reference box the overlay snap below uses. Everything is derived from
      // where the overlay card actually sits, so card size, gap and image
      // count can all change without touching the timeline.
      const sectionRect = homeHeroSection.getBoundingClientRect();
      const overlayCardRect = overlayImg.getBoundingClientRect();
      // the viewport's middle, where the viewfinder opens
      const viewportMiddle = window.innerHeight / 2 - sectionRect.top;
      // the column scrolls exactly far enough to bring the overlay card there
      const framedCardTop = Math.round(
        viewportMiddle - overlayCardRect.height / 2,
      );
      const totalShift = Math.round(
        overlayCardRect.top - sectionRect.top - framedCardTop,
      );
      // the column waits below the viewport, first card's top edge a little
      // under the bottom edge of the screen, and scrolls up from there
      const firstCardTop =
        cards[0]!.getBoundingClientRect().top - sectionRect.top;
      const CARDS_START_OFFSET = Math.round(overlayCardRect.height * 0.8);
      const cardsStartY = Math.round(
        window.innerHeight -
          sectionRect.top -
          firstCardTop +
          CARDS_START_OFFSET,
      );
      // how much larger than a card the frame sits while framing it
      const framePad = Math.round(Math.max(10, overlayCardRect.height * 0.04));
      // where the overlay card comes to rest once the column has scrolled
      const framedRect = {
        top: framedCardTop - framePad,
        left: overlayCardRect.left - sectionRect.left - framePad,
        width: overlayCardRect.width + 2 * framePad,
        height: overlayCardRect.height + 2 * framePad,
      };
      // final frame box — the overlay's own end box (the full section) grown by
      // the same amount on every side, so the frame stays concentric with the
      // overlay the whole way instead of tracking the viewport. It fades out
      // well before it gets there.
      const FRAME_EXIT_PAD = 120;
      const frameExitRect = {
        top: -FRAME_EXIT_PAD,
        left: -FRAME_EXIT_PAD,
        width: sectionRect.width + 2 * FRAME_EXIT_PAD,
        height: sectionRect.height + 2 * FRAME_EXIT_PAD,
      };

      // initial container and column state - parked below the viewport
      gsap.set([imageContainer, column], { zIndex: 21 });
      gsap.set(cards, { y: cardsStartY });
      // initial frame state - small square centred in the viewport, concentric
      // with the rectangle it opens into
      const FRAME_START_SIZE = 72;
      gsap.set(frame, {
        top: Math.round(viewportMiddle - FRAME_START_SIZE / 2),
        left: Math.round(sectionRect.width / 2 - FRAME_START_SIZE / 2),
        width: FRAME_START_SIZE,
        height: FRAME_START_SIZE,
      });
      // initial overlay state — hidden, low z-index
      gsap.set(overlay, { autoAlpha: 0, zIndex: 0 });
      // initial hero text state - opacity hidden (in css) and slightly lower
      gsap.set(heroText, { y: 100 });
      // initial nav state - opacity hidden with hideOnMount prop, parked above the viewport
      gsap.set(nav, { yPercent: -100 });
      // initial video state - opacity hidden (in css)

      // timeline
      const tl = gsap.timeline({ paused: true, delay: 0.4 });

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

      // 1. Open the viewfinder square into a rectangle framing the card column
      tl.to(frame, {
        ...framedRect,
        duration: 0.8,
        ease: "power2.inOut",
      });

      // 2. Scroll the cards up from below the viewport, the overlay card
      // landing exactly inside the frame
      tl.to(
        cards,
        {
          y: -totalShift,
          duration: 1.7,
          ease: "power1.inOut",
        },
        ">-0.15",
      );

      //3. Snap overlay — kept as .call() because getBoundingClientRect() must be live
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

      // 4. Expand overlay and frame, fade out overlayImg,
      // everything here is pinned to labels rather than "<"/">" so that the
      // shorter tweens below can never become the reference for what follows
      const EXPAND_DURATION = 0.8;
      // back.in(s) is p² * ((s + 1)p - s), so it pulls backwards until its
      // derivative hits zero at p = 2s / (3(s + 1)) and only then drives
      // forward. The cards are pushed from exactly that turning point.
      const BACK_OVERSHOOT = 1.70158; // gsap's own default for back.in
      const EXPAND_EASE = `back.in(${BACK_OVERSHOOT})`;
      const backTurn = (2 * BACK_OVERSHOOT) / (3 * (BACK_OVERSHOOT + 1));
      const cardsPushStart = EXPAND_DURATION * backTurn;

      tl.addLabel("expand");
      tl.addLabel("cardsPush", `expand+=${cardsPushStart}`);
      tl.addLabel("expandEnd", `expand+=${EXPAND_DURATION}`);

      tl.to(
        overlay,
        {
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          duration: EXPAND_DURATION,
          ease: EXPAND_EASE,
        },
        "expand",
      );

      tl.to(
        overlayImg,
        {
          opacity: 0,
          duration: 0.05,
          ease: "power1.in",
        },
        "expand",
      ); // start at same time as overlay expansion

      // make other images scroll out of screen as if pushed by the overlay expansion
      tl.to(
        allCardsExceptLast,
        {
          y: -1.4 * totalShift,
          duration: EXPAND_DURATION - cardsPushStart,
          ease: "power1.in",
        },
        "cardsPush",
      ); // start where the expansion turns forward, end with it

      // push last card down
      tl.to(
        lastCard,
        {
          y: -0.1 * totalShift,
          duration: EXPAND_DURATION - cardsPushStart,
          ease: "power1.in",
        },
        "cardsPush",
      ); // start where the expansion turns forward, end with it

      // expand the frame with the overlay, straight out of the viewport
      tl.to(
        frame,
        {
          ...frameExitRect,
          duration: EXPAND_DURATION,
          ease: EXPAND_EASE,
        },
        "expand",
      ); // start at same time as overlay expansion

      // fade the whole frame out as it goes, crosshair included
      tl.to(
        frame,
        {
          opacity: 0,
          duration: 0.6,
          ease: "power1.in",
        },
        "expand",
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
        "expandEnd", // once cards and frame finished moving out of frame
      );

      // 5. Fade overlay out, fade video in
      tl.to(
        overlay,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power1.in",
        },
        "expandEnd+=0.1", // start 0.1 seconds after end of overlay expansion
      );

      tl.to(
        video,
        {
          opacity: 1,
          duration: 0.05, // make it faster so it's already there?
          ease: "power1.in",
        },
        "<", // start at same time as overlay fade
      );

      // 6. Play video — kept as .call() because .play() is a side effect that needs to be in callback
      tl.call(
        () => {
          video.play();
        },
        [],
        ">0.2",
      );

      // 7. Fade in/slide heroText
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

      // 8. Slide nav down into its natural position
      tl.to(
        nav,
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power1.inOut",
          // the transform gsap leaves behind would make the header the
          // containing block for the burger menu, which is position: fixed,
          // so drop it once the slide is over
          onComplete: () => {
            gsap.set(nav, { clearProps: "transform" });
          },
        },
        "<", // start at same time as heroText animation
      );

      // 9. Enable scroll
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

      // wait for card images to be downloaded + decoded before playing,
      // capped so a slow connection never blocks the intro indefinitely
      const MAX_IMAGE_WAIT_MS = 2000;
      let cancelled = false;
      const imagesReady = Promise.all(
        cards
          .map((card) => card?.querySelector("img"))
          .map((img) => img?.decode().catch(() => {})),
      );
      const timeout = new Promise((resolve) =>
        setTimeout(resolve, MAX_IMAGE_WAIT_MS),
      );
      Promise.race([imagesReady, timeout]).then(() => {
        if (!cancelled) tl.play();
      });

      return () => {
        cancelled = true;
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
              "https://d128kbp85lo7cj.cloudfront.net/videos/VisualizerAlexonMedia-v1.webm"
            }
            poster={overlaySrc}
            preload="auto"
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
          <div ref={frameRef} className="home-hero-frame" aria-hidden="true">
            <span className="home-hero-frame-corner top-left"></span>
            <span className="home-hero-frame-corner top-right"></span>
            <span className="home-hero-frame-corner bottom-left"></span>
            <span className="home-hero-frame-corner bottom-right"></span>
            <span className="home-hero-frame-crosshair"></span>
          </div>
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
