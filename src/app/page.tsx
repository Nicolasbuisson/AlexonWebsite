"use client";
import "./home.css";
import { ButtonBackgroundHoverEffect } from "../components/buttonBackgroundHoverEffect/buttonBackgroundHoverEffect";
import { HeroParagraph } from "../components/heroParapgraph/heroParagraph";
import { InstaSection } from "../components/insta/instaSection";
import { LogoList } from "../components/logoList/logoList";
import { Navigation } from "../components/navigation/navigation";
import { Projects } from "../components/projects/projects";
import { ServiceCard } from "../components/serviceCard/serviceCard";
import nextConfig from "../../next.config";
import { projects } from "../resources/projects.json";
import useScrollPercentage from "../hooks/useScrollPercentage";

function Home() {
  useScrollPercentage(); // initiate css variable --scroll

  return (
    <div className="home-section-container">
      <Navigation sticky titleScroll showIcons></Navigation>
      <section className="home-hero-section">
        <div className="home-hero-bg">
          <video
            src={
              nextConfig.basePath +
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
            className="home-hero-paragraph"
            boldStartIndex={36}
            boldEndIndex={66}
          />
        </h3>
      </section>
      <section className="home-video-section">
        <video
          src={nextConfig.basePath + "/assets/videos/CoronaPreview.mov"}
          muted
          autoPlay
          loop
          className="landscape"
        ></video>
        <video
          src={nextConfig.basePath + "/assets/videos/Xiaomi-WebsiteMedia.mp4"}
          muted
          autoPlay
          loop
          className="portrait"
        ></video>
        <video
          src={
            nextConfig.basePath + "/assets/videos/L'Equilibre-MovingImage.mov"
          }
          muted
          autoPlay
          loop
          className="landscape"
        ></video>
      </section>
      <section className="home-clients-section">
        <h3>Join the ranks of clients like:</h3>
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
          ]}
        ></LogoList>
      </section>
      <section className="home-services-section">
        <ServiceCard
          title={"Short Form Content"}
          description={"Scale your brand through increased reach"}
          link={"/shortform"}
          imageSrc={"/assets/images/Shortform.jpg"}
        />
        <ServiceCard
          title={"Productions"}
          description={
            "Brand videos, documentaries, aftermovies to forge brand personality and tell impactful stories"
          }
          link={"/productions"}
          imageSrc={"/assets/images/Productions.jpeg"}
        />
      </section>
      <section className="home-work-section">
        <h2>Our Work</h2>
        <Projects projects={projects} homePageFilter />
        <h3
        // do arrow animation like Jacob Media
        >
          Link to see all our work
        </h3>
      </section>
      <InstaSection />
    </div>
  );
}

export default Home;
