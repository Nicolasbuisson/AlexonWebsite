import "./productions.css";
import { Navigation } from "../../components/navigation/navigation";
import { Projects } from "../../components/projects/projects";
import { LogoList } from "../../components/logoList/logoList";
import projectsJSON from "../../resources/projects.json";

function Productions() {
  const { projects } = projectsJSON;

  return (
    <div className="productions-container">
      <Navigation showIcons></Navigation>
      <section className="productions-section-container">
        <div className="productions-video-background">
          <video
            src={
              "https://alexonmedia.s3.ca-central-1.amazonaws.com/videos/Productions.mp4"
            }
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
              src: "https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/CoronaBlack.png",
              alt: "Corona logo",
            },
            {
              src: "https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/FourSeasonsBlack.png",
              alt: "Four Seasons logo",
            },
            {
              src: "https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/ELLEBlack.png",
              alt: "ELLE logo",
            },
            {
              src: "https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/JohnSummitBlack.png",
              alt: "John Summit logo",
            },
            {
              src: "https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/McGillUniversityBlack.png",
              alt: "McGill University logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/AirCanadaBlack.png`,
              alt: "AirCanada logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/BelcoreBlack.png`,
              alt: "Belcore logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/BUNTBlack.png`,
              alt: "BUNT logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/CCLuxembourgBlack.png`,
              alt: "Chamber of Commerce Luxembourg logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/ChrisLakeBlack.png`,
              alt: "Chris Lake logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/ClaptoneBlack.png`,
              alt: "Claptone logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/ElewanaBlack.png`,
              alt: "Elewana logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/IleSoniqBlack.png`,
              alt: "Ile Soniq logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/KSHMRBlack.png`,
              alt: "KSHMR logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/LequilibreBlack.png`,
              alt: "L'Équilibre logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/LHOFTBlack.png`,
              alt: "LHOFT logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/MonolinkBlack.png`,
              alt: "Monolink logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/NewCityGasBlack.png`,
              alt: "New City Gas logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/OnomoHotelsBlack.png`,
              alt: "Onomo Hotels logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/PatschBlack.png`,
              alt: "Patsch logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/PrepinsonBlack.png`,
              alt: "Prepinson logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/St-PierreBlack.png`,
              alt: "St-Pierre logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/VacierBlack.png`,
              alt: "Vacier logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/VaudeBlack.png`,
              alt: "Vaude logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/Web3MTLBlack.png`,
              alt: "Web3MTL logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/XiaomiBlack.png`,
              alt: "Xiaomi logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/PonenteBlack.png`,
              alt: "Ponente logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/ParcOmegaBlack.png`,
              alt: "Parc Omega logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/CoinbaseBlack.png`,
              alt: "Coinbase logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/AquilaSafarisBlack.png`,
              alt: "Aquila Safaris logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/PuntoDeVistaBlack.png`,
              alt: "Punto de Vista logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/BDBlack.png`,
              alt: "Beautiful Destinations logo",
            },
            {
              src: `https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/ToyotaBlack.png`,
              alt: "Toyota logo",
            },
          ]}
        ></LogoList>
      </section>
    </div>
  );
}

export default Productions;
