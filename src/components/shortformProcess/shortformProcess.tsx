"use client";
import "./shortformProcess.css";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Five arrows chasing each other around a 600x600 ring, clockwise:
 * target -> clipboard -> camera -> film -> rocket -> back to target.
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

/**
 * A step that owns one arrow on the ring. The ring only has room for the five
 * arrows described above, so the geometry lives here rather than on Step.
 */
type DiagramStep = {
  id: string;
  /** Human-readable name of the stage, used for the accessible description. */
  label: string;
  /** What the stage involves, in at most two sentences. */
  description: string;
  /** Present and false on every step that is drawn. See Step. */
  isNotInDiagram?: false;
  /**
   * Polar angle of the blunt tail edge, in SVG degrees about (300,300) -- so
   * 0 points right and angles grow clockwise on screen. The arrow runs from
   * here to tailAngle + ARROW_SWEEP, where its tip sits on the midline.
   */
  tailAngle: number;
  /** Filled arrow body. */
  arrow: string;
  /**
   * Stroked line-art icon from Lucide, authored in a 24x24 box. Lucide ships
   * each icon as several elements -- <circle>, <rect>, <line>, multiple
   * <path>s -- so each one here is flattened into a single d: the reveal below
   * drives one dashoffset per icon, which needs one path to measure.
   * Subpaths are ordered so the icon draws itself outside-in.
   */
  icon: string;
  /** Places the icon box inside that arrow's head: re-origin, scale, position. */
  iconTransform: string;
};

/**
 * A step of the process that is not drawn on the ring, so it carries no
 * geometry at all -- the flag is what tells the two apart, and narrows the
 * union everywhere the diagram is built.
 */
type NonDiagramStep = {
  id: string;
  label: string;
  description: string;
  isNotInDiagram: true;
};

type Step = DiagramStep | NonDiagramStep;

/**
 * Every icon is 24x24, so they all share one recipe: centre the box on the
 * origin, scale it to a 62.4px footprint inside the 92px head, then move it
 * into place. Scaling multiplies the stroke too, so the group's nominal 1.5
 * lands at 3.9 root units on screen.
 */
const ICON_SCALE = 2.3;
const iconTransform = (x: number, y: number) =>
  `translate(${x} ${y}) scale(${ICON_SCALE}) translate(-12 -12)`;

/** Flow order. Also the order the animation timeline steps through. */
const STEPS: Step[] = [
  {
    id: "target",
    label: "Strategy",
    description:
      "We define who you are talking to and what the content has to achieve. Every decision after this is measured against those goals.",
    tailAngle: 139,
    arrow:
      "M120.38 456.14C103.37 438.16 89.09 417.38 78.29 394.75C67.49 372.12 60.19 347.64 56.82 322.47C53.46 297.3 54.03 271.44 58.62 246.13C63.21 220.82 71.81 196.08 84.1 173.12L68.56 159.62L180.09 134.96L171.2 248.84L155.27 234.99C148.24 248.33 143.07 262.79 140.03 277.83C136.99 292.87 136.09 308.47 137.43 324.02C138.78 339.57 142.37 355.07 148.13 369.86C153.9 384.65 161.84 398.75 171.7 411.53Z",
    // lucide/target -- three concentric circles, as arc pairs.
    icon: "M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0M6 12a6 6 0 1 0 12 0 6 6 0 1 0-12 0M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0",
    iconTransform: iconTransform(135.62, 186.11),
  },
  {
    id: "clipboard",
    label: "Plan",
    description:
      "The strategy turns into a concrete calendar of hooks, formats and posting cadence. You sign off on it before anything is shot.",
    tailAngle: 211,
    arrow:
      "M95.99 177.42C107.84 155.69 123.19 135.68 141.38 118.42C159.56 101.16 180.58 86.65 203.48 75.67C226.38 64.69 251.16 57.24 276.64 53.79C302.13 50.33 328.32 50.86 353.95 55.46L361.99 36.5L419.91 134.96L308.85 161.69L317.1 142.26C302.25 139.7 286.89 139.25 271.65 141.01C256.41 142.77 241.29 146.73 226.92 152.81C212.54 158.9 198.92 167.1 186.63 177.15C174.34 187.21 163.39 199.11 154.28 212.44Z",
    // lucide/clipboard-check -- board, then the clip <rect>, then the tick.
    icon: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM9 14l2 2 4-4",
    iconTransform: iconTransform(357.52, 108.48),
  },
  {
    id: "camera",
    label: "Film",
    description:
      "We capture weeks of content in a single focused shoot. Batching keeps production light and your calendar clear.",
    tailAngle: 283,
    arrow:
      "M353.54 68.1C377.87 72.65 401.64 81.07 423.67 93.03C445.71 104.99 466.01 120.5 483.53 138.89C501.04 157.27 515.78 178.53 526.94 201.7C538.11 224.87 545.7 249.94 549.25 275.74L569.76 277.54L494.02 363.04L434.27 265.68L455.3 267.52C453.15 252.6 448.83 237.86 442.45 223.91C436.07 209.96 427.63 196.8 417.4 185.01C407.17 173.22 395.16 162.8 381.8 154.22C368.44 145.64 353.73 138.9 338.24 134.36Z",
    // lucide/video -- body <rect> first, then the lens wedge.
    icon: "M4 6h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zM16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
    iconTransform: iconTransform(499.92, 295.52),
  },

  {
    id: "film",
    label: "Produce",
    description:
      "Every take is cut, captioned and scored into a piece that holds attention from the first frame. You review each edit before it ships.",
    tailAngle: 355,
    arrow:
      "M537.09 279.26C540.28 303.8 539.62 329.01 535.06 353.66C530.49 378.32 522.01 402.41 509.94 424.76C497.87 447.1 482.2 467.68 463.62 485.46C445.03 503.24 423.53 518.2 400.09 529.55L404.72 549.61L300 504L374.13 417.1L378.88 437.67C392.4 431.01 405.09 422.34 416.38 411.96C427.68 401.58 437.58 389.49 445.64 376.12C453.69 362.75 459.9 348.1 463.93 332.75C467.96 317.39 469.82 301.32 469.35 285.18Z",
    // lucide/film -- frame <rect>, then the two rails, then the sprockets.
    icon: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM7 3v18M17 3v18M3 12h18M3 7.5h4M3 16.5h4M17 7.5h4M17 16.5h4",
    iconTransform: iconTransform(366.04, 488.75),
  },
  {
    id: "rocket",
    label: "Publish",
    description:
      "Each piece goes out on the platforms that suit it, at the times your audience is watching. Nothing sits waiting in a folder.",
    tailAngle: 67,
    arrow:
      "M392.99 519.08C370.63 529.7 346.46 536.86 321.6 540.14C296.74 543.41 271.21 542.8 246.23 538.22C221.25 533.64 196.83 525.1 174.18 512.92C151.53 500.74 130.65 484.91 112.61 466.13L94.97 476.73L105.98 363.04L211.54 406.69L193.45 417.56C203.96 428.36 216.12 437.75 229.48 445.29C242.84 452.82 257.41 458.5 272.61 462.03C287.82 465.56 303.66 466.93 319.51 466.02C335.36 465.11 351.22 461.91 366.42 456.49Z",
    // lucide/rocket -- body first, then the two fins, then the exhaust.
    icon: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
    iconTransform: iconTransform(140.89, 421.14),
  },
  {
    id: "repeat",
    label: "Learn & Repeat",
    description:
      "We read the numbers on every post and feed what worked into the next cycle. The system gets sharper with each round.",
    isNotInDiagram: true,
  },
];

/**
 * The steps the ring actually draws, in flow order. Everything below indexes
 * against this list rather than STEPS, so a step flagged isNotInDiagram never
 * claims an arrow, a mask or a slot in the timeline.
 */
const DIAGRAM_STEPS = STEPS.filter(
  (step): step is DiagramStep => !step.isNotInDiagram,
);

/**
 * Every arrow must paint above the one it laps onto, which is a cycle: target
 * over clipboard over camera over film over rocket -- and rocket over target.
 * No flat paint order satisfies all five, so we paint DIAGRAM_STEPS in reverse
 * (rocket first, target last) and then re-stamp rocket's head on top through a
 * wedge clip to close the loop. The wedge only spans rocket's own arrowhead,
 * where the only other geometry is target's tail.
 */
const PAINT_ORDER = DIAGRAM_STEPS.map((step, index) => ({
  step,
  index,
})).reverse();

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
  const [x1, y1] = polar(tailAngle + ARROW_SWEEP + REVEAL_PAD, MIDLINE_RADIUS);
  // Always under 180deg, always clockwise: large-arc 0, sweep 1.
  return `M${x0.toFixed(2)} ${y0.toFixed(2)} A${MIDLINE_RADIUS} ${MIDLINE_RADIUS} 0 0 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
};

/** Length of the path, used to park a dashoffset at "not drawn yet". */
const pathLength = (_: number, el: SVGPathElement) => el.getTotalLength();

/**
 * Where each step's icon starts drawing, relative to the end of its own arrow
 * reveal: the barbs of the head are in view by ~62% of the sweep, so starting
 * the icon 0.3 before the reveal lands puts it inside a head that already
 * exists.
 */
const ICON_LEAD = 0.3;
/** Timeline units an icon takes to draw itself. */
const ICON_DRAW = 0.5;
/** Timeline units an arrow takes to wipe from its tail to its tip. */
const ARROW_DRAW = 1;

/* --- Card timing -------------------------------------------------------- */

/** Timeline units the carousel takes to shift by one slot. */
const CARD_SLIDE = 0.6;
/**
 * Timeline units a step with no arrow of its own owns -- enough to arrive and
 * be read. Only the trailing "Learn & Repeat" card uses this today.
 */
const CARD_ONLY_SPAN = 1;

/* --- Card layouts ------------------------------------------------------- */

/**
 * The cards ride a carousel of slots numbered by their offset from the step
 * being drawn: 0 is the slot on show, -1 the step just finished, +1 the one
 * coming next. Every step shifts each card one slot closer to 0 and on out the
 * far side. A layout decides how far from 0 a card can still be seen and what
 * each slot looks like; a card past that limit is parked in the last slot with
 * nothing showing, so it holds still until its turn comes round.
 */
type CardLayout = {
  /** Slots either side of 0. A card beyond it is clamped into the last one. */
  slotLimit: number;
  /** Where a card sits, and how it looks, in a given slot. */
  state: (slot: number) => gsap.TweenVars;
};

/**
 * Slot pitch, in percent of a card's own height. Every card is stretched to
 * the height of the tallest one by the grid, so one percentage lands the same
 * distance for all six. At 110 the 0.7-scaled neighbours clear the centre
 * card by about a quarter of its height.
 */
const CARD_SLOT_OFFSET = 107;
/** Scale and opacity of the neighbours, either side of the centre slot. */
const CARD_RESTING_SCALE = 0.65;
const CARD_NEIGHBOUR_OPACITY = 0.5;

/**
 * Wide screens: a vertical stack deep enough to show the step on show flanked
 * by the one before and the one after, so a card walks +2 -> +1 -> 0 -> -1 ->
 * -2 across the scroll and the neighbours give it context.
 */
const STACKED_CARDS: CardLayout = {
  slotLimit: 2,
  // Every property either layout touches is stated in both, so switching
  // between them leaves nothing behind from the other one.
  state: (slot) => ({
    xPercent: 0,
    x: 0,
    yPercent: slot * CARD_SLOT_OFFSET,
    y: 0,
    scale: slot === 0 ? 1 : CARD_RESTING_SCALE,
    opacity: slot === 0 ? 1 : Math.abs(slot) === 1 ? CARD_NEIGHBOUR_OPACITY : 0,
  }),
};

/** Slot pitch for the sliding layout, in percent of a card's own width. */
const CARD_SLIDE_OFFSET = 100;
/**
 * Extra pitch on top of that width, in px, and so the literal gap between the
 * card leaving and the card arriving. It cannot come from `gap` on their
 * container: every card is in the same grid cell, and a grid with one cell has
 * nothing to put a gap between. The space has to be carried by the move
 * itself -- which is why it is stated here in px rather than as more percent,
 * since a gap that grew with the card would not be a gap so much as a pause.
 */
const CARD_SLIDE_GAP = 32; // 2rem

/**
 * Narrow screens: one slot, crossed horizontally. There is no width to spare
 * for a neighbour to be legible beside it, so the cards travel single file --
 * the next one in from the left as the current one leaves to the right -- and
 * the limit drops to 1, because one slot off centre is already out of frame.
 *
 * A pitch of a full card width plus the gap is what keeps the two cards in
 * flight apart: halfway through a shift they are CARD_SLIDE_GAP from each
 * other rather than edge to edge, each most of the way out of the frame its
 * container clips. GSAP renders the two as translate(%) translate(px), so they
 * simply add up.
 */
const SLIDING_CARDS: CardLayout = {
  slotLimit: 1,
  state: (slot) => ({
    // Travel is left to right, so the sign flips: the slot ahead of centre
    // (+1) waits out to the left, the one behind it (-1) has left to the right.
    xPercent: -slot * CARD_SLIDE_OFFSET,
    x: -slot * CARD_SLIDE_GAP,
    yPercent: 0,
    y: 0,
    scale: 1,
    opacity: slot === 0 ? 1 : 0,
  }),
};

/**
 * Which layout is in play, as the pair of queries gsap.matchMedia() branches
 * on. Keep in step with the breakpoint in the stylesheet, which clips the
 * sliding layout's frame -- one picks the animation, the other holds it inside
 * the column.
 *
 * Both halves have to be declared, and they have to cover every width between
 * them: matchMedia only runs its callback if one of its queries matches, so a
 * lone "is it wide" would leave narrow screens with no timeline at all rather
 * than the other branch of one. Writing the second as the negation of the
 * first is what guarantees the cover -- a hand-written (max-width: 940px) would
 * strand the fractional widths between them, which real devices do report.
 *
 * The .02 keeps "strictly wider than 940" true at the precision browsers
 * actually resolve a query to, which is a 64th of a pixel.
 */
const WIDE_LAYOUT = "(min-width: 940.02px)";
const NARROW_LAYOUT = `not all and ${WIDE_LAYOUT}`;

/**
 * Where the pin tucks itself closer to the top. Its own breakpoint rather than
 * the layout's: the heading wants that room back well before the cards change
 * how they move, so the two are free to sit at different widths.
 */
const NARROW_PIN = "(max-width: 1200px)";

/** Slot a card sits in once the carousel has run out of room for it. */
const cardSlot = (layout: CardLayout, offset: number) =>
  Math.max(-layout.slotLimit, Math.min(layout.slotLimit, offset));

/**
 * Pixels of scroll the whole five-step cycle is spread over. Tied to the pin
 * rather than to the container's height, so pacing is a number we pick instead
 * of a side effect of how tall the heading happens to wrap.
 */
const SCROLL_DISTANCE = 2000;
const PIN_TOP_OFFSET = 32; // 2rem
const PIN_TOP_OFFSET_NARROW = 0;

/* --- Heading reveal ----------------------------------------------------- */

/** How far past the fold the heading has to be before it reveals, in px. */
const HEADING_REVEAL_INSET = 220;
/** How far it rises on the way in, in px. Positive is below its own place. */
const HEADING_RISE = 24;
/** Seconds. Not a scrub, so this one is played rather than scrolled. */
const HEADING_FADE = 0.6;

export const ShortFormProcess = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  // All three are indexed the same as DIAGRAM_STEPS.
  const arrowRefs = useRef<Array<SVGPathElement | null>>([]);
  const revealRefs = useRef<Array<SVGPathElement | null>>([]);
  const iconRefs = useRef<Array<SVGPathElement | null>>([]);
  // Every step gets a card, drawn or not, so this one is indexed by STEPS.
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const centreLabelRef = useRef<SVGTextElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  /**
   * The heading reveals itself once, off its own observer rather than off the
   * cycle timeline: that timeline is scrubbed and does not begin until the
   * section pins, by which point the heading has been on screen for a while.
   */
  useLayoutEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    gsap.set(heading, { opacity: 0, y: HEADING_RISE });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        // Nothing hides it again, so there is nothing left to watch for.
        observer.disconnect();
        gsap.to(heading, {
          opacity: 1,
          y: 0,
          duration: HEADING_FADE,
          ease: "power2.out",
        });
      },
      // A negative bottom margin pulls the root's lower edge up the screen, so
      // "intersecting" comes to mean "this far past the fold" rather than
      // "touching it". The other three edges stay where they are, which is
      // what still fires this for someone who loads the page already scrolled
      // down to it.
      { rootMargin: `0px 0px -${HEADING_REVEAL_INSET}px 0px` },
    );

    observer.observe(heading);

    return () => {
      observer.disconnect();
      gsap.killTweensOf(heading);
    };
  }, []);

  useLayoutEffect(() => {
    /**
     * Only the cards differ between the two layouts -- the arrows, their masks,
     * the icons and the centre label are the same animation at every width --
     * so this is one callback reading a condition rather than two timelines
     * kept in sync by hand. GSAP re-runs it when the query flips, reverting
     * everything the previous run set on the way.
     */
    const mm = gsap.matchMedia(containerRef);

    // isNarrow is never read: it is declared so that one query always matches,
    // which is what gets this callback run at all. See the queries themselves.
    mm.add(
      { isWide: WIDE_LAYOUT, isNarrow: NARROW_LAYOUT, isNarrowPin: NARROW_PIN },
      (context) => {
        const isWide = Boolean(context.conditions?.isWide);
        const cardLayout = isWide ? STACKED_CARDS : SLIDING_CARDS;
        // Its own breakpoint, so this one is not isWide.
        const pinTopOffset = context.conditions?.isNarrowPin
          ? PIN_TOP_OFFSET_NARROW
          : PIN_TOP_OFFSET;
        /** Clamped slot for a card `offset` steps from the one being drawn. */
        const slot = (offset: number) => cardSlot(cardLayout, offset);

        const reveals = revealRefs.current.filter(Boolean);
        const icons = iconRefs.current.filter(Boolean);
        const cards = cardRefs.current.filter(
          (el): el is HTMLDivElement => el !== null,
        );

        // Nothing is drawn until the scrub says so.
        gsap.set([...reveals, ...icons], {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        // The carousel opens one slot short of the first step, so the first card
        // arrives as the first arrow draws rather than starting in place. That is
        // the layout for a notional step -1.
        cards.forEach((card, i) => {
          gsap.set(card, cardLayout.state(slot(i + 1)));
        });

        // The ring's centre label is nothing until the cycle closes. Scaling an
        // SVG element means the transform attribute, so state the origin rather
        // than relying on the bounding box GSAP would work one out from.
        gsap.set(centreLabelRef.current, {
          opacity: 0,
          scale: 0,
          transformOrigin: "50% 50%",
        });

        /**
         * ...except that a parked dashoffset does not reliably hide a path made
         * of several subpaths. The dash pattern restarts at every subpath, and
         * at each restart the renderer paints a degenerate round cap -- a dot --
         * even though the whole subpath sits inside a gap. That is one stray dot
         * per subpath after the first, which is exactly what showed up around
         * the rocket (two fins and the exhaust) before its arrowhead arrived.
         * Lengthening the dash period does not help, because the dots are not
         * leftover path: they are caps on nothing. So the icons are also held
         * out of the render tree until their own tween starts.
         */
        gsap.set(icons, { visibility: "hidden" });

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
            start: `center center+=${pinTopOffset}`,
            end: `+=${SCROLL_DISTANCE}`,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        /**
         * Shifts every card one slot along, so step `active` lands in the slot on
         * show and the step before it leaves. Which way they travel and what they
         * look like getting there is the layout's business, not this function's.
         *
         * Both ends of every move are stated explicitly. A plain .to() would
         * record its start value the first time it renders, and a scrub can jump
         * the playhead across several steps at once, which leaves those tweens
         * rendering out of order and reading a start value from the wrong slot.
         * immediateRender is off for the same reason it is off elsewhere here:
         * otherwise each fromTo would stamp its from-state at build time.
         */
        const showStep = (active: number, at: number) => {
          cards.forEach((card, i) => {
            const from = slot(i - active + 1); // its slot on the step before
            const to = slot(i - active);
            // Already parked out of frame and staying there -- nothing moves.
            if (from === to) return;

            cycleTimeline.fromTo(
              card,
              cardLayout.state(from),
              {
                ...cardLayout.state(to),
                duration: CARD_SLIDE,
                immediateRender: false,
              },
              at,
            );
          });
        };

        /**
         * Where the step being built begins. Every tween is positioned
         * absolutely off this rather than appended, because the card slide and
         * the arrow it belongs to start together and run for different lengths
         * -- appending would stack them end to end instead.
         */
        let stepStart = 0;
        // Indexes reveals/icons, which only exist for the steps in the diagram.
        let diagramIndex = 0;

        STEPS.forEach((step, i) => {
          // The carousel shifts as the step begins, so the card being described
          // is on show for as long as its arrow is being drawn.
          showStep(i, stepStart);

          if (step.isNotInDiagram) {
            // This step is the ring itself rather than any one arrow, so what it
            // draws is the label in the middle -- growing in on the same beat as
            // its card takes the centre slot.
            cycleTimeline.fromTo(
              centreLabelRef.current,
              { opacity: 0, scale: 0 },
              {
                opacity: 1,
                scale: 1,
                duration: CARD_SLIDE,
                immediateRender: false,
              },
              stepStart,
            );

            // No arrow to keep pace with, so the card is the whole beat. Nothing
            // follows it, so it stays centred for the rest of the scroll.
            stepStart += CARD_ONLY_SPAN;
            return;
          }

          const d = diagramIndex++;

          // The arrow wipes from its tail to its tip...
          cycleTimeline.to(
            reveals[d],
            { strokeDashoffset: 0, duration: ARROW_DRAW },
            stepStart,
          );
          // ...and the icon draws itself over the last stretch, which is exactly
          // when the head it sits in comes into view (the barbs start at ~62% of
          // the sweep, the tip lands at 100%).
          const iconStart = stepStart + ARROW_DRAW - ICON_LEAD;
          // Scrub runs this backwards too, and GSAP reverts a .set() on reverse,
          // so the icon hides itself again when you scroll back up.
          // immediateRender is on by default for zero-duration tweens, which
          // would unhide every icon the moment the timeline is built.
          cycleTimeline.set(
            icons[d],
            { visibility: "visible", immediateRender: false },
            iconStart,
          );
          cycleTimeline.to(
            icons[d],
            { strokeDashoffset: 0, duration: ICON_DRAW },
            iconStart,
          );

          // The next step starts where this one's icon finishes drawing.
          stepStart = iconStart + ICON_DRAW;
        });

        // A timeline is only as long as its children, and the last card slides
        // into place well before the beat it owns is up. This empty tween claims
        // the rest of that beat, so the final card holds still for a moment
        // instead of the pin releasing the instant it lands.
        cycleTimeline.to({}, { duration: 0 }, stepStart);
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <div className="shortform-process-container" ref={containerRef}>
      <h2 ref={headingRef}>
        A proven content system delivers <span>consistent</span> results
      </h2>
      <div className="shortform-process-grid">
        <svg
          className="cycle-diagram"
          width={600}
          height={600}
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={`process of creation: ${DIAGRAM_STEPS.map((s) => s.label).join(", ")}`}
        >
          <defs>
            <clipPath id="cycle-head-clip">
              <path d={CYCLE_CLOSER_CLIP} />
            </clipPath>

            {DIAGRAM_STEPS.map((step, i) => (
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

          {/* Lucide's own rendering defaults, at the width that survives
            ICON_SCALE -- see the transform recipe above. */}
          <g
            fill="none"
            stroke="#000"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {DIAGRAM_STEPS.map((step, i) => (
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
          {/* Placed by its own x/y rather than by CSS: SVG content has no box
              layout, so position/top/left do nothing in here. In exchange the
              label lives in user units and scales with the ring. */}
          <text
            ref={centreLabelRef}
            className="cycle-diagram-text"
            x={CENTER}
            y={CENTER}
            textAnchor="middle"
            dominantBaseline="central"
          >
            Repeat
          </text>
        </svg>
        <div className="shortform-process-cards-container">
          {STEPS.map((step, i) => (
            <div
              key={step.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="shortform-process-card"
            >
              <p className="shortform-process-card-title">
                <span>{i + 1}.</span> {step.label}
              </p>
              <p className="shortform-process-card-description">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
