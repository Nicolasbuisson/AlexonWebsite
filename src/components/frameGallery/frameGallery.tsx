import nextConfig from "../../../next.config";
import { StillImage } from "../../types/work";
import Image from "next/image";
import "./frameGallery.css";

interface FrameGalleryProps {
  stills: StillImage[];
}

export const FrameGallery = (props: FrameGalleryProps) => {
  const { stills } = props;
  return (
    <div className="stills-grid">
      {stills.map((stillImg) => {
        return (
          <div
            key={"stills-" + stillImg.imageUrl}
            className="stills-grid-item-wrapper"
          >
            <Image
              className="stills-grid-item"
              src={nextConfig.basePath + stillImg.imageUrl}
              alt="project stills picture"
              fill
            />
          </div>
        );
      })}
    </div>
  );
};
