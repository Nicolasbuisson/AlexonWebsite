import { Footer } from "../../components/footer/footer";
import { Navigation } from "../../components/navigation/navigation";
import "./productions.css";
import { WorkItemProps } from "../../types/work";
import { Projects } from "../../components/projects/projects";
import { LogoList } from "../../components/logoList/logoList";

interface ProductionsProps {
  projects: WorkItemProps[];
}

export const Productions = (props: ProductionsProps) => {
  const { projects } = props;

  return (
    <div className="productions-container">
      <Navigation showIcons></Navigation>
      <section className="productions-section-container">
        <div className="productions-video-background">
          <video
            src={import.meta.env.BASE_URL + "/assets/videos/Productions.mp4"}
            muted
            autoPlay
            loop
          ></video>
          <h2 className="productions-title">
            Crafting Stories, <h2>Inspiring Audiences</h2>
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
            `${import.meta.env.BASE_URL}/assets/clientLogos/CoronaBlack.png`,
            `${
              import.meta.env.BASE_URL
            }/assets/clientLogos/FourSeasonsBlack.png`,
            `${import.meta.env.BASE_URL}/assets/clientLogos/ELLEBlack.png`,
            `${
              import.meta.env.BASE_URL
            }/assets/clientLogos/JohnSummitBlack.png`,
            `${
              import.meta.env.BASE_URL
            }/assets/clientLogos/McGillUniversityBlack.png`,
            `${import.meta.env.BASE_URL}/assets/clientLogos/AirCanadaBlack.png`,
            `${import.meta.env.BASE_URL}/assets/clientLogos/BelcoreBlack.png`,
            `${import.meta.env.BASE_URL}/assets/clientLogos/BUNTBlack.png`,
            `${
              import.meta.env.BASE_URL
            }/assets/clientLogos/CCLuxembourgBlack.png`,
            `${import.meta.env.BASE_URL}/assets/clientLogos/ChrisLakeBlack.png`,
            `${import.meta.env.BASE_URL}/assets/clientLogos/ClaptoneBlack.png`,
            `${import.meta.env.BASE_URL}/assets/clientLogos/ElewanaBlack.png`,
            `${import.meta.env.BASE_URL}/assets/clientLogos/IleSoniqBlack.png`,
            `${import.meta.env.BASE_URL}/assets/clientLogos/KSHMRBlack.png`,
            `${
              import.meta.env.BASE_URL
            }/assets/clientLogos/LequilibreBlack.png`,
            `${import.meta.env.BASE_URL}/assets/clientLogos/LHOFTBlack.png`,
            `${import.meta.env.BASE_URL}/assets/clientLogos/MonolinkBlack.png`,
            `${
              import.meta.env.BASE_URL
            }/assets/clientLogos/NewCityGasBlack.png`,
            `${
              import.meta.env.BASE_URL
            }/assets/clientLogos/OnomoHotelsBlack.png`,
            `${import.meta.env.BASE_URL}/assets/clientLogos/PatschBlack.png`,
            `${import.meta.env.BASE_URL}/assets/clientLogos/St-PierreBlack.png`,
            `${import.meta.env.BASE_URL}/assets/clientLogos/VacierBlack.png`,
            `${import.meta.env.BASE_URL}/assets/clientLogos/VaudeBlack.png`,
            `${import.meta.env.BASE_URL}/assets/clientLogos/Web3MTLBlack.png`,
            `${import.meta.env.BASE_URL}/assets/clientLogos/XiaomiBlack.png`,
          ]}
        ></LogoList>
      </section>
      <Footer></Footer>
    </div>
  );
};
