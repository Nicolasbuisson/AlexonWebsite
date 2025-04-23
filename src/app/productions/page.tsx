import "./productions.css";
import { Navigation } from "../../components/navigation/navigation";
import { Projects } from "../../components/projects/projects";
import { ILogo, LogoList } from "../../components/logoList/logoList";
import nextConfig from "../../../next.config";
import projectsJSON from "../../resources/projects.json";

function Productions() {
  const { projects } = projectsJSON;

  const projectsUniqueLogos: ILogo[] = [];
  projects
    .filter((project) => project.excludeLogoList !== "true")
    .map((project) => {
      if (
        !projectsUniqueLogos.find((pul) => pul.src === project.logoImageDark)
      ) {
        projectsUniqueLogos.push({
          src: nextConfig.basePath + project.logoImageDark,
          alt: project.client + " logo",
        });
      }
    });

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
        <LogoList logos={projectsUniqueLogos}></LogoList>
      </section>
    </div>
  );
}

export default Productions;
