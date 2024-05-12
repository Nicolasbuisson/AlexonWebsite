import { ReactNode } from "react";
import "./timelineItem.css";
import { useInView } from "react-intersection-observer";

interface TimelineItemProps {
  title: string;
  text: string;
  images: ReactNode;
  isLast?: boolean;
}

export const TimelineItem = (props: TimelineItemProps) => {
  const { title, text, images, isLast = false } = props;
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-200px 0px",
  });
  return (
    <div
      ref={ref}
      className={`story-timeline-item ${isLast ? "last-timeline-item" : ""} ${
        inView ? "show" : "hidden"
      }`}
    >
      <p className="story-timeline-paragraph">{text}</p>
      <div className="story-section-timeline-circle-container">
        <h4>{title}</h4>
        <span
          className={`story-timeline-circle ${
            isLast ? "last-timeline-item" : ""
          }`}
        ></span>
      </div>
      <div className="story-timeline-item-images-container">{images}</div>
    </div>
  );
};
