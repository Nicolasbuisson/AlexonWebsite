import "./home.css";
import { ButtonBackgroundHoverEffect } from "../components/buttonBackgroundHoverEffect/buttonBackgroundHoverEffect";
import { HeroParagraph } from "../components/heroParapgraph/heroParagraph";
import { InstaSection } from "../components/insta/instaSection";
import { Navigation } from "../components/navigation/navigation";
import { Projects } from "../components/projects/projects";
import { ServiceCard } from "../components/serviceCard/serviceCard";
import { projects } from "../resources/projects.json";
import { ArrowPathLink } from "../components/arrowPath/arrowPathLink";
import { HorizontalScroller } from "../components/horizontalScroller/horizontalScroller";
import Image from "next/image";

function Home() {
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
      <section>
        <HorizontalScroller>
          <div className="home-horizontal-scroller-logo-wrapper">
            <Image
              src={`https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/Corona.png`}
              fill
              alt="Corona logo"
              className="home-horizontal-scroller-logo"
            />
          </div>
          <div className="home-horizontal-scroller-logo-wrapper">
            <Image
              src={`https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/FourSeasons.png`}
              fill
              alt="Four Seasons logo"
              className="home-horizontal-scroller-logo"
            />
          </div>
          <div className="home-horizontal-scroller-logo-wrapper">
            <Image
              src={`https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/McGillUniversity.png`}
              fill
              alt="McGill University logo"
              className="home-horizontal-scroller-logo"
            />
          </div>
          <div className="home-horizontal-scroller-logo-wrapper">
            <Image
              src={`https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/Coinbase.png`}
              fill
              alt="Coinbase logo"
              className="home-horizontal-scroller-logo"
            />
          </div>
          <div className="home-horizontal-scroller-logo-wrapper">
            <Image
              src={`https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/AirCanada.png`}
              fill
              alt="AirCanada logo"
              className="home-horizontal-scroller-logo"
            />
          </div>
          <div className="home-horizontal-scroller-logo-wrapper">
            <Image
              src={`https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/Claptone.png`}
              fill
              alt="Claptone logo"
              className="home-horizontal-scroller-logo"
            />
          </div>
          <div className="home-horizontal-scroller-logo-wrapper">
            <Image
              src={`https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/ParcOmega.png`}
              fill
              alt="Parc Omega logo"
              className="home-horizontal-scroller-logo"
            />
          </div>
          <div className="home-horizontal-scroller-logo-wrapper">
            <Image
              src={`https://alexonmedia.s3.ca-central-1.amazonaws.com/clientLogos/Monolink.png`}
              fill
              alt="Monolink logo"
              className="home-horizontal-scroller-logo"
            />
          </div>
        </HorizontalScroller>
      </section>
      <section className="home-about-section">
        <div className="home-about-header">
          <h4>About</h4>
          <h4>01/</h4>
        </div>
        <h3 className="home-about-description">
          <HeroParagraph
            text={
              "Your long-term partner and in-house production team for pioneering commercials, branded, and short-form content worldwide"
            }
            className="home-hero-paragraph"
            italicIndexes={[
              [7, 25],
              [62, 73],
              [112, 121],
            ]}
          />
        </h3>
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
