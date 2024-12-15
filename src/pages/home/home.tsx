import { Accordion } from "../../components/accordion/accordion";
import { ButtonBackgroundHoverEffect } from "../../components/buttonBackgroundHoverEffect/buttonBackgroundHoverEffect";
import { CustomerExperience } from "../../components/customerExperience/customerExperience";
import { Footer } from "../../components/footer/footer";
import { HeroParagraph } from "../../components/heroParapgraph/heroParagraph";
import { HorizontalScroller } from "../../components/horizontalScroller/horizontalScroller";
import { InstaSection } from "../../components/insta/instaSection";
import { LogoList } from "../../components/logoList/logoList";
import { Navigation } from "../../components/navigation/navigation";
import { Offerings } from "../../components/offerings/offerings";
import { Projects } from "../../components/projects/projects";
import { ServiceCard } from "../../components/serviceCard/serviceCard";
import { ServicesSection } from "../../components/serviceCard/servicesSection";
import { StatisticSection } from "../../components/statistic/statisticSection";
import { CustomerExperienceProps } from "../../types/customerExperience";
import { FaqProps } from "../../types/faq";
import { WorkItemProps } from "../../types/work";
import "./home.css";

interface HomeProps {
  projects: WorkItemProps[];
  customerExperiences: CustomerExperienceProps[];
  faqs: FaqProps[];
}

export const Home = (props: HomeProps) => {
  const { projects, customerExperiences, faqs } = props;
  return (
    <div className="home-section-container">
      <Navigation sticky titleScroll showIcons></Navigation>
      <section className="home-hero-section">
        <div className="home-hero-bg">
          <video
            src="/assets/videos/VisualizerAlexonMedia-v1.mov"
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
      <section className="home-collage-section">
        collage section: wait for pictures to see how you want to lay them out
      </section>
      <section className="home-clients-section">
        <h3>Join the ranks of clients like:</h3>
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
      <section className="home-services-section">
        {/*
        TODO replace Offerings with Services section
        */}
        <Offerings />
        <ServicesSection />
      </section>
      <section className="home-work-section">
        <h3>Our Work</h3>
        <Projects projects={projects} max={9} />
      </section>
      {/* <section className="home-customer-experiences-section">
        <h3>Customer Experiences</h3>
        <HorizontalScroller>
          {customerExperiences.map((experience) => {
            return (
              <CustomerExperience
                rating={experience.rating}
                quote={experience.quote}
                name={experience.name}
                job={experience.job}
              ></CustomerExperience>
            );
          })}
        </HorizontalScroller>
      </section> */}
      <section className="home-faq-section">
        <h3>
          Get the answers you need about Alexon Media's{" "}
          <h3>digital services</h3>
        </h3>
        <div className="home-faq-container">
          <Accordion faqs={faqs}></Accordion>
          <img src="assets/images/lake.jpg"></img>
        </div>
      </section>
      <InstaSection />
      <Footer></Footer>
    </div>
  );
};
