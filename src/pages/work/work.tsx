import { Footer } from "../../components/footer/footer";
import { Navigation } from "../../components/navigation/navigation";
import "./work.css";
import { WorkItemProps } from "../../types/work";
import { Projects } from "../../components/projects/projects";
import { LogoList } from "../../components/logoList/logoList";

interface WorkProps {
  projects: WorkItemProps[];
}

export const Work = (props: WorkProps) => {
  const { projects } = props;

  return (
    <div className="work-container">
      <Navigation showIcons></Navigation>
      <section className="work-section-container">
        <h2 className="work-title">Our Projects</h2>
        <Projects projects={projects}></Projects>
      </section>
      <section className="work-clients-section">
        <h2 className="work-clients-title">Our Clients</h2>
        <LogoList
          logos={[
            "/assets/clientLogos/CoronaBlack.png",
            "/assets/clientLogos/FourSeasonsBlack.png",
            "/assets/clientLogos/ELLEBlack.png",
            "/assets/clientLogos/JohnSummitBlack.png",
            "/assets/clientLogos/McGillUniversityBlack.png",
          ]}
        ></LogoList>
      </section>
      <Footer></Footer>
    </div>
  );
};
