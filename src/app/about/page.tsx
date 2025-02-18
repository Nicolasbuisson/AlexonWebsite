"use client";
import "./about.css";
import { InstaSection } from "../../components/insta/instaSection";
import { Navigation } from "../../components/navigation/navigation";
import { Offerings } from "../../components/offerings/offerings";
import nextConfig from "../../../next.config";
import useScrollPercentage from "../../hooks/useScrollPercentage";
import Image from "next/image";

function AboutPage() {
  useScrollPercentage(); // initiate css variable --scroll

  return (
    <div className="about-container">
      <Navigation showIcons></Navigation>
      <section className="about-section-hero-container">
        <div className="about-hero">
          <h1 className="about-hero-header">About Us</h1>
          <div className="about-hero-picture"></div>
          <p className="about-hero-paragraph">
            A born artist hailing from the picturesque landscapes of the UK.
            Through the lens, Gatsby weaves a tapestry of emotion, light, and
            timeless moments, inviting you to embark on a visual journey where
            each photograph tells a story of its own.
          </p>
        </div>
      </section>
      <section className="about-services-section">
        <Offerings />
      </section>
      <section className="about-story-section">
        <div className="about-story-section-title">
          <h3>Founder's Story</h3>
          <img
            className="about-story-logo"
            src={nextConfig.basePath + "/assets/logos/Signature-white.png"}
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
            tempore reprehenderit reiciendis sint minima soluta earum dolore
            corporis, quod harum, labore molestiae dolorem alias cupiditate
            repudiandae. Consequatur possimus odit quibusdam.
          </p>
        </div>
        <div className="about-story-image-grid">
          <Image
            src={nextConfig.basePath + "/assets/images/AlexBali.jpg"}
            width={2832}
            height={4240}
            alt={"Alexon in Bali"}
            layout="responsive"
          />
          <Image
            src={nextConfig.basePath + "/assets/images/AlexParis.jpg"}
            width={3072}
            height={4608}
            alt={"Alexon in Paris"}
            layout="responsive"
          />
          <Image
            src={nextConfig.basePath + "/assets/images/AlexTanzania.png"}
            width={3533}
            height={5300}
            alt={"Alexon in Tanzania working for Patsch"}
            layout="responsive"
          />
          <Image
            src={nextConfig.basePath + "/assets/images/Skydive.png"}
            width={1915}
            height={2872}
            alt={"Alexon skydiving"}
            layout="responsive"
          />
        </div>
      </section>
      <h3>Follow the Journey</h3>
      <InstaSection />
    </div>
  );
}

export default AboutPage;
