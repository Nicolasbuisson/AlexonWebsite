import "./masonry.css";

interface MasonryProps {
  images: StillImage[];
}

export const MasonryLayout = (props: MasonryProps) => {
  const { images } = props;

  return (
    <div className="masonry-container">
      {images.map((image) => {
        return (
          <div
            key={"masonry-item " + image.imageUrl}
            className="masonry-item-wrapper"
          >
            <img src={image.imageUrl} alt={"project picture"}></img>
          </div>
        );
      })}
    </div>
  );
};
