"use client";
import "./shortformGuarantee.css";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

/* --- Section reveal ------------------------------------------------------ */

/** How far past the fold the section has to be before it reveals, in px. */
const REVEAL_INSET = 220;
/** How far it rises on the way in, in px. Positive is below its own place. */
const SECTION_RISE = 100;
/** Seconds. Not a scrub, so this one is played rather than scrolled. */
const SECTION_FADE = 0.6;

export const ShortformGuarantee = () => {
  const sectionRef = useRef<HTMLElement>(null);

  /**
   * Reveals once and then stops watching -- the same observer-driven reveal the
   * process heading next door uses, rather than a ScrollTrigger, because there
   * is nothing here to scrub against.
   */
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.set(section, { opacity: 0, y: SECTION_RISE });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        // Nothing hides it again, so there is nothing left to watch for.
        observer.disconnect();
        gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: SECTION_FADE,
          ease: "power2.out",
        });
      },
      // A negative bottom margin pulls the root's lower edge up the screen, so
      // "intersecting" comes to mean "this far past the fold" rather than
      // "touching it". The other three edges stay where they are, which is what
      // still fires this for someone who loads the page already scrolled down
      // to it.
      { rootMargin: `0px 0px -${REVEAL_INSET}px 0px` },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      gsap.killTweensOf(section);
    };
  }, []);

  return (
    <section className="shortform-guarantee-section" ref={sectionRef}>
      <div className="shortform-guarantee-icon">
        <svg viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 11 14 15 10"></polyline>
        </svg>
      </div>
      <h2>Our Promise to you</h2>
      <p>
        We intentionally work with a small number of select clients so that we
        give them each our full attention. That's why every partnership starts
        with a discovery call. If we don't think we can make you win, we'll tell
        you on the call so neither of us wastes time. But if we're a fit, you
        get our whole team, our full system, and our full support to make you
        win.
      </p>
    </section>
  );
};
