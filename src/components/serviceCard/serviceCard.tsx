import { Link } from "react-router-dom";
import "./serviceCard.css";

interface IServiceCard {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
}

export const ServiceCard = (props: IServiceCard) => {
  const { title, description, link, imageSrc } = props;
  return (
    <Link className="service-card" to={link}>
      <img src={import.meta.env.BASE_URL + imageSrc}></img>
      <div className="service-card-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};
