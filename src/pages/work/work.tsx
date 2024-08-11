import { Footer } from "../../components/footer/footer";
import { Navigation } from "../../components/navigation/navigation";
import "./work.css";
import { LogoScroller } from "../../components/logoScroller/logoScroller";
import { WorkItemProps } from "../../types/work";
import { Projects } from "../../components/projects/projects";

interface WorkProps {
  projects: WorkItemProps[];
}

export const Work = (props: WorkProps) => {
  const { projects } = props;

  return (
    <div className="work-container">
      <Navigation></Navigation>
      <section className="work-section-container">
        <h2>Our Projects</h2>
        <Projects projects={projects}></Projects>
      </section>
      <section className="work-section-container">
        <h2>Our Clients</h2>
        <LogoScroller></LogoScroller>
      </section>
      <Footer></Footer>
    </div>
  );
};
