import "./servicesOverview.css";
import Link from "next/link";
import Image from "next/image";

interface IServiceOverview {
  title: string;
  description: string;
  link: string;
}

interface IServiceImage {
  src: string;
  alt: string;
  link: string;
}

interface ServicesOverviewProps {
  images: IServiceImage[];
  services: IServiceOverview[];
}

export const ServicesOverview = (props: ServicesOverviewProps) => {
  const { images, services } = props;

  return (
    <div className="services-overview-container">
      {images.map((img) => (
        <Link
          key={"service-overview-image-" + img.alt}
          className="service-overview-image-wrapper"
          href={img.link}
        >
          <Image src={img.src} fill alt={img.alt} />
        </Link>
      ))}
      {services.map((service) => {
        return (
          <Link
            key={"service-overview-text-" + service.title}
            className="service-overview-text"
            href={service.link}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </Link>
        );
      })}
    </div>
  );
};
