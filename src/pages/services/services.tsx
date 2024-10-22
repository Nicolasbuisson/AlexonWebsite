import { Navigation } from "../../components/navigation/navigation";
import { StatisticSection } from "../../components/statistic/statisticSection";
import "./services.css";

export const Services = () => {
  return (
    <div className="services-container">
      <Navigation showIcons></Navigation>
      <section className="services-hero-section">
        <h2>hello services</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          dolores molestias pariatur debitis quidem magnam voluptatem eveniet,
          perferendis architecto, maxime, aut laboriosam obcaecati veritatis
          quod eius! Facere minima vero voluptas!
        </p>
      </section>
      <StatisticSection />
    </div>
  );
};
