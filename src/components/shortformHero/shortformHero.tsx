import Image from "next/image";
import { HorizontalScroller } from "../horizontalScroller/horizontalScroller";
import "./shortformHero.css";

const clientLogos = [
  { file: "Corona.webp", alt: "Corona logo" },
  { file: "FourSeasons.webp", alt: "Four Seasons logo" },
  { file: "McGillUniversity.webp", alt: "McGill University logo" },
  { file: "Coinbase.webp", alt: "Coinbase logo" },
  { file: "AirCanada.webp", alt: "AirCanada logo" },
  { file: "Claptone.webp", alt: "Claptone logo" },
  { file: "ParcOmega.webp", alt: "Parc Omega logo" },
  { file: "Monolink.webp", alt: "Monolink logo" },
];

export const ShortFormHero = () => {
  return (
    <div className="shortform-hero">
      <div className="shortform-hero-content">
        <p className="shortform-heading">
          <span>CONTENT SYSTEMS & SHORT-FORM CONTENT</span>
        </p>
        <h1 className="shortform-title">
          <p className="shortform-title-line">
            <span>BUILD A BRAND</span>
          </p>
          <p>
            <span>THEY WILL</span>
          </p>
          <p>
            <span>REMEMBER</span>
          </p>
        </h1>
        <div className="shortform-hero-text">
          <p>
            <span>
              Done-for-you content systems for brands that want to be impossible
              to miss.
            </span>
          </p>
          <p>
            <span>
              Strategy, scripts, filming, editing — handled monthly, so you can
              stay focused on what you do best.
            </span>
          </p>
        </div>
      </div>
      <div className="shortform-hero-scroller">
        <HorizontalScroller fullBleed>
          {clientLogos.map((logo) => (
            <div
              key={logo.file}
              className="shortform-horizontal-scroller-logo-wrapper"
            >
              <Image
                src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/${logo.file}`}
                fill
                alt={logo.alt}
                className="shortform-horizontal-scroller-logo"
              />
            </div>
          ))}
        </HorizontalScroller>
      </div>
    </div>
  );
};
