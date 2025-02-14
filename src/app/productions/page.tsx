import "./productions.css";
import { Footer } from "../../components/footer/footer";
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
            <h2>
              <span className="productions-title-reg">Inspiring</span> Audiences
            </h2>
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
            `${nextConfig.basePath}/assets/clientLogos/CoronaBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/FourSeasonsBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/ELLEBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/JohnSummitBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/McGillUniversityBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/AirCanadaBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/BelcoreBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/BUNTBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/CCLuxembourgBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/ChrisLakeBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/ClaptoneBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/ElewanaBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/IleSoniqBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/KSHMRBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/LequilibreBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/LHOFTBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/MonolinkBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/NewCityGasBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/OnomoHotelsBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/PatschBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/St-PierreBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/VacierBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/VaudeBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/Web3MTLBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/XiaomiBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/PonenteBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/ParcOmegaBlack.png`,
            `${nextConfig.basePath}/assets/clientLogos/CoinbaseBlack.png`,
          ]}
        ></LogoList>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Productions;
