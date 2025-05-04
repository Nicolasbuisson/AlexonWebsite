import "./productions.css";
import { Navigation } from "../../components/navigation/navigation";
import { Projects } from "../../components/projects/projects";
import { LogoList } from "../../components/logoList/logoList";
import nextConfig from "../../../next.config";
import projectsJSON from "../../resources/projects.json";

function Productions() {
  const { projects } = projectsJSON;

  return (
    <div className="productions-container">
      <Navigation showIcons></Navigation>
      <section className="productions-section-container">
        <div className="productions-video-background">
          <video
            src={nextConfig.basePath + "/assets/videos/Productions.mp4"}
            muted
            autoPlay
            loop
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
              src: nextConfig.basePath + "/assets/clientLogos/CoronaBlack.png",
              alt: "Corona logo",
            },
            {
              src:
                nextConfig.basePath +
                "/assets/clientLogos/FourSeasonsBlack.png",
              alt: "Four Seasons logo",
            },
            {
              src: nextConfig.basePath + "/assets/clientLogos/ELLEBlack.png",
              alt: "ELLE logo",
            },
            {
              src:
                nextConfig.basePath + "/assets/clientLogos/JohnSummitBlack.png",
              alt: "John Summit logo",
            },
            {
              src:
                nextConfig.basePath +
                "/assets/clientLogos/McGillUniversityBlack.png",
              alt: "McGill University logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/AirCanadaBlack.png`,
              alt: "AirCanada logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/BelcoreBlack.png`,
              alt: "Belcore logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/BUNTBlack.png`,
              alt: "BUNT logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/CCLuxembourgBlack.png`,
              alt: "Chamber of Commerce Luxembourg logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/ChrisLakeBlack.png`,
              alt: "Chris Lake logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/ClaptoneBlack.png`,
              alt: "Claptone logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/ElewanaBlack.png`,
              alt: "Elewana logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/IleSoniqBlack.png`,
              alt: "Ile Soniq logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/KSHMRBlack.png`,
              alt: "KSHMR logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/LequilibreBlack.png`,
              alt: "L'Équilibre logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/LHOFTBlack.png`,
              alt: "LHOFT logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/MonolinkBlack.png`,
              alt: "Monolink logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/NewCityGasBlack.png`,
              alt: "New City Gas logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/OnomoHotelsBlack.png`,
              alt: "Onomo Hotels logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/PatschBlack.png`,
              alt: "Patsch logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/PrepinsonBlack.png`,
              alt: "Prepinson logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/St-PierreBlack.png`,
              alt: "St-Pierre logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/VacierBlack.png`,
              alt: "Vacier logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/VaudeBlack.png`,
              alt: "Vaude logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/Web3MTLBlack.png`,
              alt: "Web3MTL logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/XiaomiBlack.png`,
              alt: "Xiaomi logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/PonenteBlack.png`,
              alt: "Ponente logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/ParcOmegaBlack.png`,
              alt: "Parc Omega logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/CoinbaseBlack.png`,
              alt: "Coinbase logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/AquilaSafarisBlack.png`,
              alt: "Aquila Safaris logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/PuntoDeVistaBlack.png`,
              alt: "Punto de Vista logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/BDBlack.png`,
              alt: "Beautiful Destinations logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/ToyotaBlack.png`,
              alt: "Toyota logo",
            },
          ]}
        ></LogoList>
      </section>
    </div>
  );
}

export default Productions;
