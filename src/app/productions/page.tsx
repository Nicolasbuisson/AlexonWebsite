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
            <text>
              <span className="productions-title-reg">Inspiring</span> Audiences
            </text>
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
              width: 2259,
              height: 1464,
              alt: "Corona logo",
            },
            {
              src:
                nextConfig.basePath +
                "/assets/clientLogos/FourSeasonsBlack.png",
              width: 713,
              height: 415,
              alt: "Four Seasons logo",
            },
            {
              src: nextConfig.basePath + "/assets/clientLogos/ELLEBlack.png",
              width: 2960,
              height: 1188,
              alt: "ELLE logo",
            },
            {
              src:
                nextConfig.basePath + "/assets/clientLogos/JohnSummitBlack.png",
              width: 1648,
              height: 212,
              alt: "John Summit logo",
            },
            {
              src:
                nextConfig.basePath +
                "/assets/clientLogos/McGillUniversityBlack.png",
              width: 1590,
              height: 601,
              alt: "McGill University logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/AirCanadaBlack.png`,
              width: 2560,
              height: 332,
              alt: "AirCanada logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/BelcoreBlack.png`,
              width: 1342,
              height: 245,
              alt: "Belcore logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/BUNTBlack.png`,
              width: 413,
              height: 264,
              alt: "BUNT logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/CCLuxembourgBlack.png`,
              width: 688,
              height: 296,
              alt: "Chamber of Commerce Luxembourg logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/ChrisLakeBlack.png`,
              width: 1152,
              height: 284,
              alt: "Chris Lake logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/ClaptoneBlack.png`,
              width: 800,
              height: 115,
              alt: "Claptone logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/ElewanaBlack.png`,
              width: 971,
              height: 516,
              alt: "Elewana logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/IleSoniqBlack.png`,
              width: 1200,
              height: 323,
              alt: "Ile Soniq logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/KSHMRBlack.png`,
              width: 1080,
              height: 292,
              alt: "KSHMR logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/LequilibreBlack.png`,
              width: 3365,
              height: 893,
              alt: "L'Équilibre logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/LHOFTBlack.png`,
              width: 1396,
              height: 646,
              alt: "LHOFT logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/MonolinkBlack.png`,
              width: 1800,
              height: 269,
              alt: "Monolink logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/NewCityGasBlack.png`,
              width: 1080,
              height: 239,
              alt: "New City Gas logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/OnomoHotelsBlack.png`,
              width: 1056,
              height: 429,
              alt: "Onomo Hotels logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/PatschBlack.png`,
              width: 1080,
              height: 261,
              alt: "Patsch logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/PrepinsonBlack.png`,
              width: 1080,
              height: 540,
              alt: "Prepinson logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/St-PierreBlack.png`,
              width: 1200,
              height: 233,
              alt: "St-Pierre logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/VacierBlack.png`,
              width: 5414,
              height: 680,
              alt: "Vacier logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/VaudeBlack.png`,
              width: 1620,
              height: 279,
              alt: "Vaude logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/Web3MTLBlack.png`,
              width: 559,
              height: 231,
              alt: "Web3MTL logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/XiaomiBlack.png`,
              width: 3840,
              height: 1213,
              alt: "Xiaomi logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/PonenteBlack.png`,
              width: 1366,
              height: 448,
              alt: "Ponente logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/ParcOmegaBlack.png`,
              width: 1080,
              height: 540,
              alt: "Parc Omega logo",
            },
            {
              src: `${nextConfig.basePath}/assets/clientLogos/CoinbaseBlack.png`,
              width: 1556,
              height: 278,
              alt: "Coinbase logo",
            },
          ]}
        ></LogoList>
      </section>
    </div>
  );
}

export default Productions;
