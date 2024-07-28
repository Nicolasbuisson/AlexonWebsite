import { MediaType } from "../../types/insta";
import { CarouselIcon } from "./icons/carouselIcon";
import { VideoIcon } from "./icons/videoIcon";
import "./instaItem.css";

interface InstaItem {
  permaLink: string;
  mediaURL: string;
  mediaType: MediaType;
  caption: string;
}

export const InstaItem = (props: InstaItem) => {
  const { permaLink, mediaURL, mediaType, caption } = props;

  return (
    <a href={permaLink} target="_blank" rel="noopener noreferrer">
      <div className="insta-grid-item">
        {permaLink.match("/reel/") ? (
          <video src={mediaURL} controls></video>
        ) : (
          <img src={mediaURL}></img>
        )}
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
