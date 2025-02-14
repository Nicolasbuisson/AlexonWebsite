import Link from "next/link";
import "./serviceCard.css";
import nextConfig from "../../../next.config";

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
      <img src={nextConfig.basePath + imageSrc}></img>
      <div className="service-card-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};
