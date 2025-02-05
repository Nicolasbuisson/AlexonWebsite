import { ButtonBackgroundHoverEffect } from "../../components/buttonBackgroundHoverEffect/buttonBackgroundHoverEffect";
import { Footer } from "../../components/footer/footer";
import { HeroParagraph } from "../../components/heroParapgraph/heroParagraph";
import { InstaSection } from "../../components/insta/instaSection";
import { LogoList } from "../../components/logoList/logoList";
import { Navigation } from "../../components/navigation/navigation";
import { Projects } from "../../components/projects/projects";
import { ServiceCard } from "../../components/serviceCard/serviceCard";
import { WorkItemProps } from "../../types/work";
import "./home.css";

interface HomeProps {
  projects: WorkItemProps[];
}

export const Home = (props: HomeProps) => {
  const { projects } = props;
  return (
    <div className="home-section-container">
      <Navigation sticky titleScroll showIcons></Navigation>
      <section className="home-hero-section">
        <div className="home-hero-bg">
          <video
            src={
              import.meta.env.BASE_URL +
              "/assets/videos/VisualizerAlexonMedia-v1.mov"
            }
            muted
            autoPlay
            loop
          ></video>
        </div>
        <div className="home-hero-text">
          <h3 className="home-pitch">elevate your brand</h3>
          <ButtonBackgroundHoverEffect text="Let's Work Together"></ButtonBackgroundHoverEffect>
        </div>
      </section>
      <section className="home-pitch-section">
        <h3 className="home-pitch-long">
          <HeroParagraph
            text={
              "Alexon media is a pioneering creative and production house Offering commercials, branded, and short-form content to your favourite brands worlwide"
            }
            boldStartIndex={36}
            boldEndIndex={66}
          />
        </h3>
      </section>
      <section className="home-video-section">
        <video
          src={import.meta.env.BASE_URL + "/assets/videos/CORONA-KILINDI.mov"}
          muted
          autoPlay
          loop
          className="portrait"
        ></video>
        <video
          src={
            import.meta.env.BASE_URL +
            "/assets/videos/L'Equilibre-MovingImage.mov"
          }
          muted
          autoPlay
          loop
          className="landscape"
        ></video>
        <video
          src={
            import.meta.env.BASE_URL + "/assets/videos/Xiaomi-WebsiteMedia.mp4"
          }
          muted
          autoPlay
          loop
          className="portrait"
        ></video>
      </section>
      <section className="home-clients-section">
        <h3>Join the ranks of clients like:</h3>
        <LogoList
          logos={[
            import.meta.env.BASE_URL + "/assets/clientLogos/CoronaBlack.png",
            import.meta.env.BASE_URL +
              "/assets/clientLogos/FourSeasonsBlack.png",
            import.meta.env.BASE_URL + "/assets/clientLogos/ELLEBlack.png",
            import.meta.env.BASE_URL +
              "/assets/clientLogos/JohnSummitBlack.png",
            import.meta.env.BASE_URL +
              "assets/clientLogos/McGillUniversityBlack.png",
          ]}
        ></LogoList>
      </section>
      <section className="home-services-section">
        <ServiceCard
          title={"Short Form Content"}
          description={"Scale your brand through increased reach"}
          link={"/services/shortform"}
          imageSrc={"/assets/images/rice-hills.jpg"}
        />
        <ServiceCard
          title={"Productions"}
          description={
            "Brand videos, documentaries, aftermovies to forge brand personality and tell impactful stories"
          }
          link={"/productions"}
          imageSrc={"assets/images/lake.jpg"}
        />
      </section>
      <section className="home-work-section">
        <h2>Our Work</h2>
        <Projects projects={projects} homePageFilter />
      </section>
      <InstaSection />
      <Footer />
    </div>
  );
};
