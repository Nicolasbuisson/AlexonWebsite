"use client";
import "./shortformProcess.css";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Five arrows chasing each other around a 600x600 ring, clockwise:
 * target -> clipboard -> camera -> laptop -> rocket -> back to target.
 *
 * BAND. Symmetric about a constant midline at r=204: the half-width tapers from
 * 34px at the tail (68px wide) to 46px at the head base (92px wide), and BOTH
 * edges taper by the same amount. That symmetry is what keeps a tail centred
 * inside the head lapping over it. Tapering only the inner edge -- with the
 * outer pinned to a circle -- drifts the centreline 9px outward at the tail,
 * which made the tail stick out 46px on the outer side but only 28px on the
 * inner one. The cost of fixing it is that the outer edge is a spiral rather
 * than a circular arc, so the silhouette breathes between r=238 and r=250.
 *
 * HEAD. A symmetric straight-edged triangle, 92px long with a 73deg tip, big
 * enough for the icon to sit inside it. Base midpoint and tip both sit on the
 * midline and the barbs go PERPENDICULAR to that base->tip axis, which makes
 * the two slanted edges exactly equal (114.23px each). Barbs on a radial line
 * instead leave the tip visibly off-centre, because the perpendicular bisector
 * of a radial segment is the tangent and the midline curves away from it.
 *
 * OVERLAP. Those straight head edges cut a chord inside the outer radius, so
 * each arrow sweeps 95deg -- 23deg more than the 72deg it owns -- to keep the
 * next arrow's blunt tail end buried under the head. 15.5deg is the minimum
 * that still works, so there is room to spare.
 *
 * Every arrow and every icon is its own <path> so they can be animated
 * independently -- see the scroll timeline below.
 */

type Step = {
  id: string;
  /** Human-readable name of the stage, used for the accessible description. */
  label: string;
  /**
   * Polar angle of the blunt tail edge, in SVG degrees about (300,300) -- so
   * 0 points right and angles grow clockwise on screen. The arrow runs from
   * here to tailAngle + ARROW_SWEEP, where its tip sits on the midline.
   */
  tailAngle: number;
  /** Filled arrow body. */
  arrow: string;
  /** Stroked line-art icon, authored in a 48x48 box. */
  icon: string;
  /** Places the 48x48 icon box inside that arrow's head. */
  iconTransform: string;
};

/** Flow order. Also the order the animation timeline steps through. */
const STEPS: Step[] = [
  {
    id: "target",
    label: "Objectifs",
    tailAngle: 139,
    arrow:
      "M120.38 456.14C103.37 438.16 89.09 417.38 78.29 394.75C67.49 372.12 60.19 347.64 56.82 322.47C53.46 297.3 54.03 271.44 58.62 246.13C63.21 220.82 71.81 196.08 84.1 173.12L68.56 159.62L180.09 134.96L171.2 248.84L155.27 234.99C148.24 248.33 143.07 262.79 140.03 277.83C136.99 292.87 136.09 308.47 137.43 324.02C138.78 339.57 142.37 355.07 148.13 369.86C153.9 384.65 161.84 398.75 171.7 411.53Z",
    icon: "M24 38a14 14 0 1 1 0-28 14 14 0 1 1 0 28ZM24 32a8 8 0 1 1 0-16 8 8 0 1 1 0 16ZM24 26.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 1 1 0 5ZM24 24 39 9M31.5 9H39v7.5",
    iconTransform: "translate(135.62 186.11) scale(1.3) translate(-24 -24)",
  },
  {
    id: "clipboard",
    label: "Planification",
    tailAngle: 211,
    arrow:
      "M95.99 177.42C107.84 155.69 123.19 135.68 141.38 118.42C159.56 101.16 180.58 86.65 203.48 75.67C226.38 64.69 251.16 57.24 276.64 53.79C302.13 50.33 328.32 50.86 353.95 55.46L361.99 36.5L419.91 134.96L308.85 161.69L317.1 142.26C302.25 139.7 286.89 139.25 271.65 141.01C256.41 142.77 241.29 146.73 226.92 152.81C212.54 158.9 198.92 167.1 186.63 177.15C174.34 187.21 163.39 199.11 154.28 212.44Z",
    icon: "M16 8H13a3 3 0 0 0-3 3v29a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3h-3M19 4h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H19a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM14 20l2.5 2.5L21 17.5M25 20h9M14 28l2.5 2.5L21 25.5M25 28h9M14 36l2.5 2.5L21 33.5M25 36h9",
    iconTransform: "translate(357.52 108.48) scale(1.3) translate(-24 -24)",
  },
  {
    id: "camera",
    label: "Tournage",
    tailAngle: 283,
    arrow:
      "M353.54 68.1C377.87 72.65 401.64 81.07 423.67 93.03C445.71 104.99 466.01 120.5 483.53 138.89C501.04 157.27 515.78 178.53 526.94 201.7C538.11 224.87 545.7 249.94 549.25 275.74L569.76 277.54L494.02 363.04L434.27 265.68L455.3 267.52C453.15 252.6 448.83 237.86 442.45 223.91C436.07 209.96 427.63 196.8 417.4 185.01C407.17 173.22 395.16 162.8 381.8 154.22C368.44 145.64 353.73 138.9 338.24 134.36Z",
    icon: "M11 17h6l3-4h8l3 4h6a3 3 0 0 1 3 3v17a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V20a3 3 0 0 1 3-3ZM24 31.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 1 0 0 13ZM33.5 22h.01",
    iconTransform: "translate(499.92 295.52) scale(1.3) translate(-24 -24)",
  },
  {
    id: "laptop",
    label: "Montage",
    tailAngle: 355,
    arrow:
      "M537.09 279.26C540.28 303.8 539.62 329.01 535.06 353.66C530.49 378.32 522.01 402.41 509.94 424.76C497.87 447.1 482.2 467.68 463.62 485.46C445.03 503.24 423.53 518.2 400.09 529.55L404.72 549.61L300 504L374.13 417.1L378.88 437.67C392.4 431.01 405.09 422.34 416.38 411.96C427.68 401.58 437.58 389.49 445.64 376.12C453.69 362.75 459.9 348.1 463.93 332.75C467.96 317.39 469.82 301.32 469.35 285.18Z",
    icon: "M10 34V16a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v18M7 34h34l2.5 4.5H4.5ZM24 28a5 5 0 1 1 0-10 5 5 0 1 1 0 10ZM24 16v-2M28.95 18.05l1.41-1.41M31 23h2M28.95 27.95l1.41 1.41M24 30v2M19.05 27.95l-1.41 1.41M17 23h-2M19.05 18.05l-1.41-1.41",
    iconTransform: "translate(366.04 488.75) scale(1.3) translate(-24 -24)",
  },
  {
    id: "rocket",
    label: "Publication",
    tailAngle: 67,
    arrow:
      "M392.99 519.08C370.63 529.7 346.46 536.86 321.6 540.14C296.74 543.41 271.21 542.8 246.23 538.22C221.25 533.64 196.83 525.1 174.18 512.92C151.53 500.74 130.65 484.91 112.61 466.13L94.97 476.73L105.98 363.04L211.54 406.69L193.45 417.56C203.96 428.36 216.12 437.75 229.48 445.29C242.84 452.82 257.41 458.5 272.61 462.03C287.82 465.56 303.66 466.93 319.51 466.02C335.36 465.11 351.22 461.91 366.42 456.49Z",
    icon: "M24 5c5 5 7.5 11.5 7.5 19v8h-15v-8c0-7.5 2.5-14 7.5-19ZM24 22a3.5 3.5 0 1 1 0-7 3.5 3.5 0 1 1 0 7ZM16.5 25 11 30.5V38l5.5-5.5M31.5 25 37 30.5V38l-5.5-5.5M20 33c.5 4.5 2 7 4 9 2-2 3.5-4.5 4-9",
    iconTransform: "translate(140.89 421.14) scale(1.3) translate(-24 -24)",
  },
];

/**
 * Every arrow must paint above the one it laps onto, which is a cycle: target
 * over clipboard over camera over laptop over rocket -- and rocket over target.
 * No flat paint order satisfies all five, so we paint STEPS in reverse (rocket
 * first, target last) and then re-stamp rocket's head on top through a wedge
 * clip to close the loop. The wedge only spans rocket's own arrowhead, where
 * the only other geometry is target's tail.
 */
const PAINT_ORDER = STEPS.map((step, index) => ({ step, index })).reverse();

const CYCLE_CLOSER_ID = "rocket";
const CYCLE_CLOSER_CLIP =
  "M300 300 L120.87 540.65 A300 300 0 0 1 11.62 382.69 Z";

/* --- Reveal geometry ---------------------------------------------------- */

const CENTER = 300;
const MIDLINE_RADIUS = 204;
/** Degrees from an arrow's tail edge to its tip. See OVERLAP above. */
const ARROW_SWEEP = 95;
/**
 * Each arrow is unmasked by a fat arc stroked along the midline, so the reveal
 * front is a radial line sweeping tail -> head. The stroke has to be wide
 * enough to clear the widest part of the arrow, which is the head barbs at
 * r=138.6 and r=270.7 -- 150 covers r=129..279 with room to spare.
 */
const REVEAL_BAND = 150;
/** Degrees of slack at both ends so the butt caps never clip the tail or tip. */
const REVEAL_PAD = 3;

const polar = (degrees: number, radius: number) => {
  const radians = (degrees * Math.PI) / 180;
  return [
    CENTER + radius * Math.cos(radians),
    CENTER + radius * Math.sin(radians),
  ];
};

/** Midline arc spanning one arrow, from just behind its tail to past its tip. */
const revealArc = (tailAngle: number) => {
  const [x0, y0] = polar(tailAngle - REVEAL_PAD, MIDLINE_RADIUS);
  const [x1, y1] = polar(
    tailAngle + ARROW_SWEEP + REVEAL_PAD,
    MIDLINE_RADIUS,
  );
  // Always under 180deg, always clockwise: large-arc 0, sweep 1.
  return `M${x0.toFixed(2)} ${y0.toFixed(2)} A${MIDLINE_RADIUS} ${MIDLINE_RADIUS} 0 0 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
};

/** Length of the path, used to park a dashoffset at "not drawn yet". */
const pathLength = (_: number, el: SVGPathElement) => el.getTotalLength();

/**
 * Pixels of scroll the whole five-step cycle is spread over. Tied to the pin
 * rather than to the container's height, so pacing is a number we pick instead
 * of a side effect of how tall the heading happens to wrap.
 */
const SCROLL_DISTANCE = 2000;

export const ShortFormProcess = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // All three are indexed the same as STEPS.
  const arrowRefs = useRef<Array<SVGPathElement | null>>([]);
  const revealRefs = useRef<Array<SVGPathElement | null>>([]);
  const iconRefs = useRef<Array<SVGPathElement | null>>([]);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reveals = revealRefs.current.filter(Boolean);
      const icons = iconRefs.current.filter(Boolean);

      // Nothing is drawn until the scrub says so.
      gsap.set([...reveals, ...icons], {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      const cycleTimeline = gsap.timeline({
        defaults: { ease: "none" }, // linear so scrub maps 1-to-1 with scroll
        scrollTrigger: {
          trigger: containerRef.current,
          // Lock the diagram in the middle of the viewport and hold it there
          // for SCROLL_DISTANCE, so the cycle can take as long as it likes
          // without the container scrolling out from under it. ScrollTrigger
          // adds the matching page height itself via its pin-spacer.
          pin: true,
          anticipatePin: 1,
          start: "center center",
          end: `+=${SCROLL_DISTANCE}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      STEPS.forEach((_, i) => {
        // The arrow wipes from its tail to its tip...
        cycleTimeline.to(reveals[i], { strokeDashoffset: 0, duration: 1 });
        // ...and the icon draws itself over the last stretch, which is exactly
        // when the head it sits in comes into view (the barbs start at ~62% of
        // the sweep, the tip lands at 100%).
        cycleTimeline.to(
          icons[i],
          { strokeDashoffset: 0, duration: 0.5 },
          "-=0.3",
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="shortform-process-container" ref={containerRef}>
      <h2>A proven content system delivers consistent results</h2>

      <svg
        className="cycle-diagram"
        width={600}
        height={600}
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`Cycle de création : ${STEPS.map((s) => s.label).join(", ")}`}
      >
        <defs>
          <clipPath id="cycle-head-clip">
            <path d={CYCLE_CLOSER_CLIP} />
          </clipPath>

          {STEPS.map((step, i) => (
            <mask
              key={`reveal-${step.id}`}
              id={`cycle-reveal-${step.id}`}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={600}
              height={600}
            >
              <path
                ref={(el) => {
                  revealRefs.current[i] = el;
                }}
                className="cycle-diagram__reveal"
                d={revealArc(step.tailAngle)}
                fill="none"
                stroke="#fff"
                strokeWidth={REVEAL_BAND}
              />
            </mask>
          ))}
        </defs>

        {/* White body, 2px black outline. Where a head laps a tail, the head's
            outline stays visible on top so the two arrows never merge. */}
        <g fill="#fff" stroke="#000" strokeWidth={2}>
          {PAINT_ORDER.map(({ step, index }) => (
            <path
              key={`arrow-${step.id}`}
              ref={(el) => {
                arrowRefs.current[index] = el;
              }}
              id={`cycle-arrow-${step.id}`}
              className="cycle-diagram__arrow"
              d={step.arrow}
              mask={`url(#cycle-reveal-${step.id})`}
            />
          ))}

          {/* Clones the mask along with the geometry, so the re-stamp reveals
              in step with the arrow it duplicates. */}
          <use
            href={`#cycle-arrow-${CYCLE_CLOSER_ID}`}
            clipPath="url(#cycle-head-clip)"
          />
        </g>

        <g
          fill="none"
          stroke="#000"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {STEPS.map((step, i) => (
            <g key={`icon-${step.id}`} transform={step.iconTransform}>
              <path
                ref={(el) => {
                  iconRefs.current[i] = el;
                }}
                id={`cycle-icon-${step.id}`}
                className="cycle-diagram__icon"
                d={step.icon}
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};
