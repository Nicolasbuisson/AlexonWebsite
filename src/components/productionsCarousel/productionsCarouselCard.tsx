import nextConfig from "../../../next.config";
import "./productionsCarouselCard.css";
import Image from "next/image";
import Link from "next/link";

interface ProductionsCarouselCardProps {
  title: string;
  route: string;
  imageSrc: string;
}

export const ProductionsCarouselCard = (
  props: ProductionsCarouselCardProps
) => {
  const { title, route, imageSrc } = props;
  return (
    <Link
      href={`/productions/${route}`}
      className="production-carousel-card"
      onClick={() => window.scrollTo(0, 0)}
    >
      <Image
        src={`${nextConfig.basePath}/assets/${imageSrc}`}
        alt={`${title} production cover`}
        fill
        className="production-carousel-card-img"
      />
      <p className="production-carousel-card-title">{title}</p>
    </Link>
  );
};
