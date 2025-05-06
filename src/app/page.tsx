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
import { ArrowPathLink } from "../components/arrowPath/arrowPathLink";
import { useEffect } from "react";
import Lenis from "lenis";

function Home() {
  useScrollPercentage(); // initiate css variable --scroll
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="home-section-container">
      <Navigation sticky titleScroll showIcons></Navigation>
      <section className="home-hero-section">
        <div className="home-hero-bg">
          <video
            src={
              "https://alexonmedia.s3.ca-central-1.amazonaws.com/videos/VisualizerAlexonMedia-v1.mov"
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
          src={
            "https://alexonmedia.s3.ca-central-1.amazonaws.com/videos/CoronaPreview.mov"
          }
          muted
          autoPlay
          loop
          className="landscape"
        ></video>
        <video
          src={
            "https://alexonmedia.s3.ca-central-1.amazonaws.com/videos/Xiaomi-WebsiteMedia.mp4"
          }
          muted
          autoPlay
          loop
          className="portrait"
        ></video>
        <video
          src={
            "https://alexonmedia.s3.ca-central-1.amazonaws.com/videos/L'Equilibre-MovingImage.mov"
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
              src: nextConfig.basePath + "/assets/clientLogos/Corona.png",
              alt: "Corona logo",
            },
            {
              src: nextConfig.basePath + "/assets/clientLogos/FourSeasons.png",
              alt: "Four Seasons logo",
            },
            {
              src: nextConfig.basePath + "/assets/clientLogos/ELLE.png",
              alt: "ELLE logo",
            },
            {
              src: nextConfig.basePath + "/assets/clientLogos/JohnSummit.png",
              alt: "John Summit logo",
            },
            {
              src:
                nextConfig.basePath +
                "/assets/clientLogos/McGillUniversity.png",
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
          imageSrc={
            "https://alexonmedia.s3.ca-central-1.amazonaws.com/images/Shortform.jpg"
          }
        />
        <ServiceCard
          title={"Productions"}
          description={
            "Brand videos, documentaries, aftermovies to forge brand personality and tell impactful stories"
          }
          link={"/productions"}
          imageSrc={
            "https://alexonmedia.s3.ca-central-1.amazonaws.com/images/Productions.jpeg"
          }
        />
      </section>
      <section className="home-work-section">
        <h2>Our Work</h2>
        <Projects projects={projects} homePageFilter />
        <ArrowPathLink
          url="/productions"
          text="See our work"
          className="home-work-link"
          svgClassName="home-work-arrow"
        />
      </section>
      <InstaSection />
    </div>
  );
}

export default Home;
