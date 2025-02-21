import Link from "next/link";
import "./serviceCard.css";
import nextConfig from "../../../next.config";
import Image from "next/image";

interface IServiceCard {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
}

export const ServiceCard = (props: IServiceCard) => {
  const { title, description, link, imageSrc } = props;
  return (
    <Link className="service-card" href={link}>
      <Image
        src={nextConfig.basePath + imageSrc}
        fill
        alt="background image for Service card"
      />
      <div className="service-card-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};
