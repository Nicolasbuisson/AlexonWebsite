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
import { PageLoader } from "../components/pageLoader/pageLoader";

function Home() {
  return (
    <div className="home-section-container">
      <PageLoader />
      <Navigation sticky titleScroll showIcons></Navigation>
      <section className="home-hero-section">
        <div className="home-hero-bg">
          <video
            src={
              "https://d128kbp85lo7cj.cloudfront.net/videos/VisualizerAlexonMedia-v1.mp4"
            }
            muted
            autoPlay
            loop
          ></video>
        </div>
        <div className="home-hero-text">
          <h3 className="home-pitch">
            Where cinematic excellence
            <br />
            meets strategic performance
          </h3>
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
              src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/Corona.png`}
              fill
              alt="Corona logo"
              className="home-horizontal-scroller-logo"
            />
          </div>
          <div className="home-horizontal-scroller-logo-wrapper">
            <Image
              src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/FourSeasons.png`}
              fill
              alt="Four Seasons logo"
              className="home-horizontal-scroller-logo"
            />
          </div>
          <div className="home-horizontal-scroller-logo-wrapper">
            <Image
              src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/McGillUniversity.png`}
              fill
              alt="McGill University logo"
              className="home-horizontal-scroller-logo"
            />
          </div>
          <div className="home-horizontal-scroller-logo-wrapper">
            <Image
              src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/Coinbase.png`}
              fill
              alt="Coinbase logo"
              className="home-horizontal-scroller-logo"
            />
          </div>
          <div className="home-horizontal-scroller-logo-wrapper">
            <Image
              src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/AirCanada.png`}
              fill
              alt="AirCanada logo"
              className="home-horizontal-scroller-logo"
            />
          </div>
          <div className="home-horizontal-scroller-logo-wrapper">
            <Image
              src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/Claptone.png`}
              fill
              alt="Claptone logo"
              className="home-horizontal-scroller-logo"
            />
          </div>
          <div className="home-horizontal-scroller-logo-wrapper">
            <Image
              src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/ParcOmega.png`}
              fill
              alt="Parc Omega logo"
              className="home-horizontal-scroller-logo"
            />
          </div>
          <div className="home-horizontal-scroller-logo-wrapper">
            <Image
              src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/Monolink.png`}
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
              src={`https://d128kbp85lo7cj.cloudfront.net/images/About1.jpg`}
              alt="Villa picture"
              fill
              className="home-about-collage-image"
            />
          </div>
          <div className="home-about-collage-image-wrapper">
            <Image
              src={`https://d128kbp85lo7cj.cloudfront.net/images/About2.jpeg`}
              alt="girl in Ocean picture"
              fill
              className="home-about-collage-image"
            />
          </div>
          <div className="home-about-collage-image-wrapper">
            <Image
              src={`https://d128kbp85lo7cj.cloudfront.net/images/About3.jpeg`}
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
      <section className="home-productions-section">
        <div className="home-productions-header">
          <h4>Productions</h4>
          <h4>02/</h4>
        </div>
        <Projects projects={projects} homePageFilter />
        <ArrowPathLink
          url="/productions"
          text="See our Work"
          className="home-work-link"
          svgClassName="home-work-arrow"
        />
      </section>
      <section className="home-shortform-section">
        <div className="home-shortform-header">
          <h4>Short-Form</h4>
          <h4>03/</h4>
        </div>
        <h3 className="home-shortform-description">
          Complimentary services built for <span>impact</span>
          <br />
          Increased <span>reach</span>, increased
          <span> conversions</span>
        </h3>
        <div className="home-shortform-video-grid">
          {/* <video
            src={
              ""
              //"https://alexonmedia.s3.ca-central-1.amazonaws.com/videos/CoronaPreview.mov"
            }
            muted
            autoPlay
            loop
            className="landscape"
          ></video>
          <video
            src={
              ""
              //"https://alexonmedia.s3.ca-central-1.amazonaws.com/videos/Xiaomi-WebsiteMedia.mp4"
            }
            muted
            autoPlay
            loop
            className="portrait"
          ></video>
          <video
            src={
              ""
              //"https://d128kbp85lo7cj.cloudfront.net/reels/L'Equilibre.mp4"
            }
            muted
            autoPlay
            loop
            className="landscape"
          ></video> */}
        </div>
      </section>
      <InstaSection />
    </div>
  );
}

export default Home;
