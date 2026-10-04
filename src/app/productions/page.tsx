import "./productions.css";
import { Navigation } from "../../components/navigation/navigation";
import { Projects } from "../../components/projects/projects";
import { LogoList } from "../../components/logoList/logoList";
import projectsJSON from "../../resources/projects.json";
import { PageLoader } from "../../components/pageLoader/pageLoader";

function Productions() {
  const { projects } = projectsJSON;

  return (
    <div className="productions-container">
      <PageLoader />
      <Navigation showIcons></Navigation>
      <section className="productions-section-container">
        <div className="productions-video-background">
          <video
            src={
              "https://d128kbp85lo7cj.cloudfront.net/videos/Productions.webm"
            }
            poster={
              "https://d128kbp85lo7cj.cloudfront.net/images/ProductionsPoster.webp"
            }
            preload="auto"
            muted
            autoPlay
            loop
            playsInline
          ></video>
          <h2 className="productions-title">
            Crafting <span className="productions-title-reg">Stories</span>
            <p>
              <span className="productions-title-reg">Inspiring</span> Audiences
            </p>
          </h2>
        </div>
        <div className="productions-projects-wrapper">
          <Projects projects={projects}></Projects>
        </div>
      </section>
      <section className="productions-clients-section">
        <h2 className="productions-clients-title">Trusted by</h2>
        <LogoList
          logos={[
            {
              src: "https://d128kbp85lo7cj.cloudfront.net/clientLogos/CoronaBlack.webp",
              alt: "Corona logo",
            },
            {
              src: "https://d128kbp85lo7cj.cloudfront.net/clientLogos/FourSeasonsBlack.webp",
              alt: "Four Seasons logo",
            },
            {
              src: "https://d128kbp85lo7cj.cloudfront.net/clientLogos/ELLEBlack.webp",
              alt: "ELLE logo",
            },
            {
              src: "https://d128kbp85lo7cj.cloudfront.net/clientLogos/JohnSummitBlack.webp",
              alt: "John Summit logo",
            },
            {
              src: "https://d128kbp85lo7cj.cloudfront.net/clientLogos/McGillUniversityBlack.webp",
              alt: "McGill University logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/AirCanadaBlack.webp`,
              alt: "AirCanada logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/BelcoreBlack.webp`,
              alt: "Belcore logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/BUNTBlack.webp`,
              alt: "BUNT logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/ChrisLakeBlack.webp`,
              alt: "Chris Lake logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/ClaptoneBlack.webp`,
              alt: "Claptone logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/ElewanaBlack.webp`,
              alt: "Elewana logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/IleSoniqBlack.webp`,
              alt: "Ile Soniq logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/KSHMRBlack.webp`,
              alt: "KSHMR logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/LequilibreBlack.webp`,
              alt: "L'Équilibre logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/LHOFTBlack.webp`,
              alt: "LHOFT logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/MonolinkBlack.webp`,
              alt: "Monolink logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/NewCityGasBlack.webp`,
              alt: "New City Gas logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/OnomoHotelsBlack.webp`,
              alt: "Onomo Hotels logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/PatschBlack.webp`,
              alt: "Patsch logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/PrepinsonBlack.webp`,
              alt: "Prepinson logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/St-PierreBlack.webp`,
              alt: "St-Pierre logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/VacierBlack.webp`,
              alt: "Vacier logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/VaudeBlack.webp`,
              alt: "Vaude logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/Web3MTLBlack.webp`,
              alt: "Web3MTL logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/XiaomiBlack.webp`,
              alt: "Xiaomi logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/PonenteBlack.webp`,
              alt: "Ponente logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/ParcOmegaBlack.webp`,
              alt: "Parc Omega logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/CoinbaseBlack.webp`,
              alt: "Coinbase logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/AquilaSafarisBlack.webp`,
              alt: "Aquila Safaris logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/PuntoDeVistaBlack.webp`,
              alt: "Punto de Vista logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/ToyotaBlack.webp`,
              alt: "Toyota logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/EmiratesNBD_black.webp`,
              alt: "Emirates NBD logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/VISA_black.webp`,
              alt: "Visa logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/AtlantisBlack.webp`,
              alt: "Atlantis logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/AsicsBlack.webp`,
              alt: "Asics logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/ONBlack.webp`,
              alt: "ON logo",
            },
          ]}
        ></LogoList>
      </section>
    </div>
  );
}

export default Productions;
