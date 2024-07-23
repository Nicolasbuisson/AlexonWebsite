import "./instaItem.css";

interface InstaItem {
  permaLink: string;
  mediaURL: string;
}

export const InstaItem = (props: InstaItem) => {
  const { permaLink, mediaURL } = props;

  return (
    <a href={permaLink} target="_blank" rel="noopener noreferrer">
      {permaLink.match("/reel/") ? (
        <video src={mediaURL} controls className="insta-grid-item"></video>
      ) : (
        <img src={mediaURL} className="insta-grid-item"></img>
      )}
    </a>
  );
};
