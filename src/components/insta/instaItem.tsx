import { InstaItemProps } from "../../types/insta";
import { CarouselIcon } from "./icons/carouselIcon";
import { VideoIcon } from "./icons/videoIcon";
import "./instaItem.css";

export const InstaItem = (props: InstaItemProps) => {
  const { permaLink, mediaURL, mediaType, caption, thumbnailURL = "" } = props;

  return (
    <a href={permaLink} target="_blank" rel="noopener noreferrer">
      <div className="insta-grid-item">
        <img src={mediaType === "VIDEO" ? thumbnailURL : mediaURL} />
        <p className="caption">{caption}</p>
        {mediaType === "CAROUSEL_ALBUM" ? (
          <CarouselIcon className="insta-svg"></CarouselIcon>
        ) : mediaType === "VIDEO" ? (
          <VideoIcon className="insta-svg"></VideoIcon>
        ) : (
          <></>
        )}
      </div>
    </a>
  );
};
