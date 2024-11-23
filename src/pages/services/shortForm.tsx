import { Navigation } from "../../components/navigation/navigation";
import { Characters } from "../../components/opacityParagraph/characters";
import { OpacityParagraph } from "../../components/opacityParagraph/opacityParagraph";
import { Words } from "../../components/opacityParagraph/words";
import { StatisticSection } from "../../components/statistic/statisticSection";
import "./shortForm.css";

export const ShortForm = () => {
  return (
    <div className="short-form-container">
      <Navigation showIcons></Navigation>
      <section className="short-form-hero-section">
        <h2>hello short-form</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          dolores molestias pariatur debitis quidem magnam voluptatem eveniet,
          perferendis architecto, maxime, aut laboriosam obcaecati veritatis
          quod eius! Facere minima vero voluptas!
        </p>
      </section>
      <StatisticSection />
      <div style={{ height: "100vh" }}></div>
      <OpacityParagraph
        text={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae dolores molestias pariatur debitis quidem magnam voluptatem eveniet, perferendis architecto, maxime, aut laboriosam obcaecati veritatis quod eius! Facere minima vero voluptas"
        }
      />
      <div style={{ height: "100vh" }}></div>
      <Words
        text={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae dolores molestias pariatur debitis quidem magnam voluptatem eveniet, perferendis architecto, maxime, aut laboriosam obcaecati veritatis quod eius! Facere minima vero voluptas"
        }
      />
      <div style={{ height: "100vh" }}></div>
      <Characters
        text={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae dolores molestias pariatur debitis quidem magnam voluptatem eveniet, perferendis architecto, maxime, aut laboriosam obcaecati veritatis quod eius! Facere minima vero voluptas"
        }
      />
      <div style={{ height: "100vh" }}></div>
    </div>
  );
};
