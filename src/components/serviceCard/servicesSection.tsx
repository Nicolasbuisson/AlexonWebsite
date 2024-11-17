import "./servicesSection.css";
import { ServiceCard } from "./serviceCard";

export const ServicesSection = () => {
  return (
    <section className="services-section">
      <ServiceCard />
      <ServiceCard />
    </section>
  );
};
