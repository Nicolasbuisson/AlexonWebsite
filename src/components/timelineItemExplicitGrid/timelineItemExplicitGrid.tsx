import "./timelineItemExplicitGrid.css";
import { ReactNode } from "react";

interface TimelineItemProps {
  title: string;
  text: string;
  images: ReactNode;
  isLast?: boolean;
}

export const TimelineItemExplicitGrid = (props: TimelineItemProps) => {
  const { title, text, images, isLast = false } = props;
  return (
    <div className="story-timeline-item">
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
