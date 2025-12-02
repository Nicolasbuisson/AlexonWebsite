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
            src={"https://d128kbp85lo7cj.cloudfront.net/videos/Productions.mp4"}
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
              src: "https://d128kbp85lo7cj.cloudfront.net/clientLogos/CoronaBlack.png",
              alt: "Corona logo",
            },
            {
              src: "https://d128kbp85lo7cj.cloudfront.net/clientLogos/FourSeasonsBlack.png",
              alt: "Four Seasons logo",
            },
            {
              src: "https://d128kbp85lo7cj.cloudfront.net/clientLogos/ELLEBlack.png",
              alt: "ELLE logo",
            },
            {
              src: "https://d128kbp85lo7cj.cloudfront.net/clientLogos/JohnSummitBlack.png",
              alt: "John Summit logo",
            },
            {
              src: "https://d128kbp85lo7cj.cloudfront.net/clientLogos/McGillUniversityBlack.png",
              alt: "McGill University logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/AirCanadaBlack.png`,
              alt: "AirCanada logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/BelcoreBlack.png`,
              alt: "Belcore logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/BUNTBlack.png`,
              alt: "BUNT logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/ChrisLakeBlack.png`,
              alt: "Chris Lake logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/ClaptoneBlack.png`,
              alt: "Claptone logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/ElewanaBlack.png`,
              alt: "Elewana logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/IleSoniqBlack.png`,
              alt: "Ile Soniq logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/KSHMRBlack.png`,
              alt: "KSHMR logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/LequilibreBlack.png`,
              alt: "L'Équilibre logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/LHOFTBlack.png`,
              alt: "LHOFT logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/MonolinkBlack.png`,
              alt: "Monolink logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/NewCityGasBlack.png`,
              alt: "New City Gas logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/OnomoHotelsBlack.png`,
              alt: "Onomo Hotels logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/PatschBlack.png`,
              alt: "Patsch logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/PrepinsonBlack.png`,
              alt: "Prepinson logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/St-PierreBlack.png`,
              alt: "St-Pierre logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/VacierBlack.png`,
              alt: "Vacier logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/VaudeBlack.png`,
              alt: "Vaude logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/Web3MTLBlack.png`,
              alt: "Web3MTL logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/XiaomiBlack.png`,
              alt: "Xiaomi logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/PonenteBlack.png`,
              alt: "Ponente logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/ParcOmegaBlack.png`,
              alt: "Parc Omega logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/CoinbaseBlack.png`,
              alt: "Coinbase logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/AquilaSafarisBlack.png`,
              alt: "Aquila Safaris logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/PuntoDeVistaBlack.png`,
              alt: "Punto de Vista logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/ToyotaBlack.png`,
              alt: "Toyota logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/EmiratesNBD_black.png`,
              alt: "Emirates NBD logo",
            },
            {
              src: `https://d128kbp85lo7cj.cloudfront.net/clientLogos/VISA_black.png`,
              alt: "Visa logo",
            },
          ]}
        ></LogoList>
      </section>
    </div>
  );
}

export default Productions;
