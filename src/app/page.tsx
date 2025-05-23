import "./home.css";
import { ButtonBackgroundHoverEffect } from "../components/buttonBackgroundHoverEffect/buttonBackgroundHoverEffect";
import { HeroParagraph } from "../components/heroParapgraph/heroParagraph";
import { InstaSection } from "../components/insta/instaSection";
import { Navigation } from "../components/navigation/navigation";
import { Projects } from "../components/projects/projects";
import { projects } from "../resources/projects.json";
import { ArrowPathLink } from "../components/arrowPath/arrowPathLink";
import { HorizontalScroller } from "../components/horizontalScroller/horizontalScroller";
import Image from "next/image";
import { ServicesOverview } from "../components/servicesOverview/servicesOverview";

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
          <ButtonBackgroundHoverEffect
            text="Let's Work Together"
            link="/contact"
          ></ButtonBackgroundHoverEffect>
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
            className="home-about-hero-paragraph"
            italicWordIndexes={[1, 2, 8, 14]}
          />
        </h3>
        <p className="home-about-paragraph">
          Since 2019, Alexon and his team have worked with some of your
          favourite brands to craft impactful and strategic branded content to
          elevate businesses, engage audiences, and boost our clients’ revenues
          by over 4.5M$+
        </p>
        <div className="home-about-collage">
          <div className="home-about-collage-image-wrapper">
            <Image
              src={`https://alexonmedia.s3.ca-central-1.amazonaws.com/images/About1.jpg`}
              alt="Villa picture"
              fill
              className="home-about-collage-image"
            />
          </div>
          <div className="home-about-collage-image-wrapper">
            <Image
              src={`https://alexonmedia.s3.ca-central-1.amazonaws.com/images/About2.jpeg`}
              alt="girl in Ocean picture"
              fill
              className="home-about-collage-image"
            />
          </div>
          <div className="home-about-collage-image-wrapper">
            <Image
              src={`https://alexonmedia.s3.ca-central-1.amazonaws.com/images/About3.jpeg`}
              alt="Alexon at Atlantis picture"
              fill
              className="home-about-collage-image"
            />
          </div>
        </div>
        <ArrowPathLink
          url="/about"
          text="About Us"
          className="home-about-link"
          svgClassName="home-work-arrow"
        />
      </section>
      <section className="home-services-section">
        <div className="home-services-header">
          <h4>Our Services</h4>
          <h4>02/</h4>
        </div>
        <h3 className="home-services-description">
          Complimentary services built for impact; Increased reach, increased
          conversions
        </h3>
        <ServicesOverview
          images={[
            {
              src: "https://alexonmedia.s3.ca-central-1.amazonaws.com/images/About1.jpg",
              alt: "image for productions service",
              link: "/productions",
            },
            {
              src: "https://alexonmedia.s3.ca-central-1.amazonaws.com/images/Shortform.jpg",
              alt: "image for short form service",
              link: "/shortform",
            },
          ]}
          services={[
            {
              title: "Productions",
              description:
                "Brand videos, documentaries, and aftermovies to forge brand personality and tell impactful stories that convert",
              link: "/productions",
            },
            {
              title: "Short Form Content",
              description:
                "Scale your business with increased reach and conversions with our convenient all-in-one short-form packages",
              link: "/shortform",
            },
          ]}
        />
      </section>
      <section className="home-work-section">
        <div className="home-work-header">
          <h4>Our Work</h4>
          <h4>03/</h4>
        </div>
        <Projects projects={projects} homePageFilter />
        <ArrowPathLink
          url="/productions"
          text="See our Work"
          className="home-work-link"
          svgClassName="home-work-arrow"
        />
      </section>
      <InstaSection />
    </div>
  );
}

export default Home;
