import nextConfig from "../../../next.config";
import { StillImage } from "../../types/work";
import Image from "next/image";
import "./behindTheScenesGallery.css";

interface BehindTheScenesGalleryProps {
  btsImages: StillImage[];
}

export const BehindTheScenesGallery = (props: BehindTheScenesGalleryProps) => {
  const { btsImages } = props;
  return (
    <div className="bts-grid">
      {btsImages.map((btsImg) => {
        return (
          <div key={"bts-" + btsImg.imageUrl} className="bts-grid-item-wrapper">
            <Image
              className="bts-grid-item"
              src={nextConfig.basePath + btsImg.imageUrl}
              alt="project bts picture"
              fill
            />
          </div>
        );
      })}
    </div>
  );
};
