import { StillImage } from "../../types/work";
import "./masonry.css";
import nextConfig from "../../../next.config";

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
            {/* <Image
              src={nextConfig.basePath + image.imageUrl}
              alt={"project picture"}
              //fill
              //   style={{ height: "unset" }}
              className="masonry-item-image"
            /> */}
            <img
              src={nextConfig.basePath + image.imageUrl}
              alt={"project picture"}
            ></img>
          </div>
        );
      })}
    </div>
  );
};
