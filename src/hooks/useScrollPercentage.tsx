"use client";
import { useEffect } from "react";

/**
 * Publishes the scroll position on <html> as two CSS custom properties:
 *   --scroll  how far down the page we are, 0-100
 *   --vh      one percent of the height --scroll was measured against, in px
 *
 * They come from one measurement, so CSS that multiplies --scroll by --vh
 * cannot drift from whatever JS divided by. Pairing --scroll with a literal
 * 1vh is what made the nav logo jump on ios: the url bar retracting resizes
 * the layout viewport, and vh does not follow it.
 */
const useScrollPercentage = () => {
  useEffect(() => {
    const html = document.documentElement;
    // re-measured only on resize. Reading this per scroll event would remap
    // the animation mid-gesture while the ios url bar is collapsing
    let referenceHeight = html.clientHeight || 1;
    let frame = 0;

    const writeScroll = () => {
      frame = 0;
      // ios rubber-banding drives scrollTop negative past either end, which
      // pushed the logo back past its own start position
      const ratio = (html.scrollTop / referenceHeight) * 100;
      const clamped = Math.min(Math.max(ratio, 0), 100);
      html.style.setProperty("--scroll", clamped.toString());
    };

    // scroll fires more often than the screen repaints, so coalesce to one
    // write per frame rather than laying the nav out repeatedly for one frame
    const schedule = () => {
      if (frame === 0) frame = requestAnimationFrame(writeScroll);
    };

    const remeasure = () => {
      referenceHeight = html.clientHeight || 1;
      html.style.setProperty("--vh", `${referenceHeight / 100}px`);
      schedule();
    };

    // passive says this handler never calls preventDefault, which lets safari
    // keep the scroll itself off the main thread
    document.addEventListener("scroll", schedule, { passive: true });
    // resize is a window event. The old listener sat on document, where it
    // never fired, so rotating the phone left the mapping stale
    window.addEventListener("resize", remeasure);
    window.addEventListener("orientationchange", remeasure);
    // a refresh or a back-forward restore can land us part-way down the page
    remeasure();

    return () => {
      if (frame !== 0) cancelAnimationFrame(frame);
      document.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", remeasure);
      window.removeEventListener("orientationchange", remeasure);
    };
  }, []);
};

export default useScrollPercentage;
