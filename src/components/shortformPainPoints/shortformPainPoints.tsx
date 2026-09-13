"use client";
import { useInView } from "react-intersection-observer";
import { AwardIcon } from "../icons/awardIcon";
import { CalendarIcon } from "../icons/calendarIcon";
import { ClockFadingIcon } from "../icons/clockFadingIcon";
import { CopyIcon } from "../icons/copyIcon";
import { MobileOffIcon } from "../icons/mobileOffIcon";
import { PencilIcon } from "../icons/pencilIcon";
import { TargetIcon } from "../icons/targetIcon";
import { TrendingDownIcon } from "../icons/trendingDownIcon";
import { TrendingUpIcon } from "../icons/trendingUpIcon";
import { UserMinusIcon } from "../icons/userMinusIcon";
import { IPainPointItemProps, PainPointItem } from "./painpointItem";
import "./shortformPainPoints.css";

const CON_ICON_CLASS = "painpoint-item-icon painpoint-item-icon-con";
const PRO_ICON_CLASS = "painpoint-item-icon painpoint-item-icon-pro";

const CONS: IPainPointItemProps[] = [
  {
    icon: <MobileOffIcon className={CON_ICON_CLASS} />,
    title: "No content strategy",
    description:
      "Random posts with no clear angle, narrative, or goal behind them.",
  },
  {
    icon: <CopyIcon className={CON_ICON_CLASS} />,
    title: "Generic scripts",
    description:
      "Hooks and formats copied from other creators — not your voice.",
  },
  {
    icon: <ClockFadingIcon className={CON_ICON_CLASS} />,
    title: "Hours lost every week",
    description:
      "Writing, filming, editing, reposting — pulling you away from the business.",
  },
  {
    icon: <TrendingDownIcon className={CON_ICON_CLASS} />,
    title: "Inconsistent output",
    description:
      "Bursts of content followed by weeks of silence. No compounding.",
  },
  {
    icon: <UserMinusIcon className={CON_ICON_CLASS} />,
    title: "Blending into the feed",
    description:
      "Looking like every other brand — no distinct identity or recall.",
  },
];

const PROS: IPainPointItemProps[] = [
  {
    icon: <TargetIcon className={PRO_ICON_CLASS} />,
    title: "Clear content strategy",
    description:
      "Pillars, narrative arcs, and a monthly rollout engineered around your offer.",
  },
  {
    icon: <PencilIcon className={PRO_ICON_CLASS} />,
    title: "Scripts in your voice",
    description:
      "20-30 scripts written monthly, hooked for your audience and platform.",
  },
  {
    icon: <CalendarIcon className={PRO_ICON_CLASS} />,
    title: "One filming day a month",
    description:
      "Full crew, fully directed. You show up and perform — we handle everything else.",
  },
  {
    icon: <TrendingUpIcon className={PRO_ICON_CLASS} />,
    title: "Consistent output, every month",
    description:
      "A content pipeline that never runs dry — publishing on a real schedule.",
  },
  {
    icon: <AwardIcon className={PRO_ICON_CLASS} />,
    title: "A brand people remember",
    description:
      "A distinct visual identity and narrative that makes you the name in your space.",
  },
];

export const ShortFormPainPoints = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -50% 0px",
  });
  return (
    <section
      className={`shortform-painpoints-section ${
        inView ? "shortform-painpoints-visible" : ""
      }`}
      ref={ref}
    >
      <p className="shortform-painpoints-heading">The Reality</p>
      <h3 className="shortform-painpoints-title">
        Most brands post. Few actually <span>build</span>
      </h3>
      <div className="shortform-painpoints-grid">
        <div className="shortform-painpoints-cons">
          <div className="shortform-painpoints-cons-text">
            <p>Without Us</p>
            <p>Posting without a system</p>
          </div>
          {CONS.map((con, index) => (
            <PainPointItem
              key={con.title}
              {...con}
              style={
                inView ? { transitionDelay: `${index * 60}ms` } : undefined
              }
            />
          ))}
        </div>
        <div className="shortform-painpoints-divider" aria-hidden="true">
          <span className="shortform-painpoints-divider-dot" />
        </div>
        <div className="shortform-painpoints-pros">
          <div className="shortform-painpoints-pros-text">
            <p>With Us</p>
            <p>A brand that compounds monthly</p>
          </div>
          {PROS.map((pro, index) => (
            <PainPointItem
              key={pro.title}
              {...pro}
              style={
                inView ? { transitionDelay: `${index * 60}ms` } : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
