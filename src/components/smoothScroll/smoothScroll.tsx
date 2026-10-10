"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Owns the one Lenis instance for the whole app. Lives in the root layout so
 * it survives client-side navigations, and so the ScrollTrigger wiring below
 * is set up once rather than per page.
 */
export const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true });

    // lenis writes the real scroll position, so ScrollTrigger would pick it up
    // from the native scroll event anyway — but a frame later. Updating from
    // lenis itself keeps pinned and scrubbed triggers in step with the scroll.
    const updateScrollTrigger = () => {
      ScrollTrigger.update();
    };
    lenis.on("scroll", updateScrollTrigger);

    // drive lenis from gsap's ticker so there is a single raf loop. Two loops
    // have no defined order between them, which is what makes pinned sections
    // jitter.
    const raf = (time: number) => {
      lenis.raf(time * 1000); // ticker counts seconds, lenis wants ms
    };
    gsap.ticker.add(raf);
    // gsap clamps its delta after a long frame, which would stall lenis now
    // that it rides the ticker
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      gsap.ticker.lagSmoothing(500, 33); // gsap's own defaults
      lenis.off("scroll", updateScrollTrigger);
      lenis.destroy();
    };
  }, []);

  return null;
};
