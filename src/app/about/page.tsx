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
            Alexon Media crafts compelling visual narratives that captivate and
            convert. We are a team of storytellers, innovators, and digital
            strategists led by Alexon. Nimble, innovative, and always ahead of
            the curve, we turn ideas into impactful content that resonates
            across platforms. Let’s tell your story boldly, authentically, and
            with purpose.
          </p>
        </div>
      </section>
      <section className="about-services-section">
        <Offerings />
      </section>
      <section className="about-story-section">
        <h3>Founder's Story</h3>
        <div className="about-story-section-grid">
          <div className="about-story-text-grid">
            <Image
              src={nextConfig.basePath + "/assets/logos/Signature-white.png"}
              width={2618}
              height={1351}
              alt={"Alexon signature logo"}
              layout="responsive"
              className="about-story-logo"
            />
            <p>
              Alexon is a french filmmaker, entrepreneur and extreme sports
              athlete born in France and currently based out of Montréal,
              Canada.
            </p>
            <p>
              From a very young age, Alexon was drawn to video editing and
              filmmaking. But what really sparked his unwavering interest in it
              was when he realized that filmmaking is an opportunity to live
              many lifetimes at once and a golden ticket to see and experience
              the world. That’s when his obsession with filmmaking really grew -
              he dreamt of travelling the world with his art.
            </p>
            <p>
              Over the past few years, he has had the immense pleasure of making
              his dreams a reality. Exploring diverse countries and cultures and
              capturing it all in his work for some of your favourite brands:
              Corona, Air Canada, Four Seasons, ELLE (...)
            </p>
            <p>
              These experiences working with leading marketing managers
              worldwide as well as completing a Bachelor of Commerce degree at
              McGill University have taught him a great amount in the world of
              digital strategy and media. He’s also been able to see the
              existing gap that exists for many businesses and brands - with
              many of them having a great product or service but lacking the
              expertise to market it and effectively get their unique product
              out there.
            </p>
          </div>
          <div className="about-story-text-last-paragraphs">
            <p>
              As such, he wanted to create Alexon Media: a team of digital
              strategists and filmmakers led by Alexon. Having worked
              independently for years, he has realized that he can no longer do
              everything alone - and throughout the years a team naturally
              emerged around Alexon in order to service his growth.
            </p>
            <p>
              Today Alexon, along with his team, help businesses scale their
              brands and boost their digital presence through strategic and
              premium video content. During his free time, Alexon loves to work
              on personal film projects, skydive with friends, focus on his
              personal and physical development, and explore other art mediums
              like music and fashion.
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
        </div>
      </section>
      <InstaSection additionalTitle="Follow the Journey" />
    </div>
  );
}

export default AboutPage;
