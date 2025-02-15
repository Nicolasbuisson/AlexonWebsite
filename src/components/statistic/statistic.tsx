"use client";
import { useInView } from "react-intersection-observer";
import "./statistic.css";

interface IProps {
  title: string;
  statString: string;
  statNumber: number;
  statStringBeforeNumber?: boolean;
  description: string;
}

export const Statistic = (props: IProps) => {
  const {
    title,
    statString,
    statNumber,
    statStringBeforeNumber = false,
    description,
  } = props;
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
  });
  return (
    <div className={`stat-container ${inView ? "show" : "hidden"}`} ref={ref}>
      <p className="stat-title">{title}</p>
      <div className="stat-number-description">
        <p
          data-stat={statNumber}
          className={`stat-number ${
            statStringBeforeNumber ? "before-number" : "after-number"
          } ${inView ? `stat-initializer-${statNumber}` : ""}`}
        >
          {statString}
        </p>
        <p className="stat-description">{description}</p>
      </div>
    </div>
  );
};
