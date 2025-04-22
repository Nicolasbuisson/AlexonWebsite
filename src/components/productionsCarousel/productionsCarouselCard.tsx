import nextConfig from "../../../next.config";
import "./productionsCarouselCard.css";
import Image from "next/image";
import Link from "next/link";

interface ProductionsCarouselCardProps {
  title: string;
  route: string;
  imageSrc?: string;
  logoImageSrc: string;
  client: string;
  videoSrc?: string;
}

export const ProductionsCarouselCard = (
  props: ProductionsCarouselCardProps
) => {
  const { title, route, imageSrc, logoImageSrc, client, videoSrc } = props;

  return (
    <Link
      href={`/productions/${route}`}
      className="production-carousel-card"
      onClick={() => window.scrollTo(0, 0)}
    >
      {videoSrc ? (
        <video
          src={nextConfig.basePath + `/assets/${videoSrc}`}
          muted
          autoPlay
          loop
          className="production-carousel-card-video"
        ></video>
      ) : imageSrc ? (
        <Image
          src={`${nextConfig.basePath}/assets/${imageSrc}`}
          alt={`${title} production cover`}
          fill
          className="production-carousel-card-img"
        />
      ) : (
        <></>
      )}

      {logoImageSrc ? (
        <Image
          src={nextConfig.basePath + `/assets/clientLogos/${logoImageSrc}`}
          alt={`client logo for ${client}`}
          className="production-carousel-card-logo"
          fill
        />
      ) : (
        <></>
      )}
    </Link>
  );
};
