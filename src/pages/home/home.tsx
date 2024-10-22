import { Accordion } from "../../components/accordion/accordion";
import { ButtonBackgroundHoverEffect } from "../../components/buttonBackgroundHoverEffect/buttonBackgroundHoverEffect";
import { CustomerExperience } from "../../components/customerExperience/customerExperience";
import { Footer } from "../../components/footer/footer";
import { HorizontalScroller } from "../../components/horizontalScroller/horizontalScroller";
import { InstaSection } from "../../components/insta/instaSection";
import { LogoList } from "../../components/logoList/logoList";
import { Navigation } from "../../components/navigation/navigation";
import { Offerings } from "../../components/offerings/offerings";
import { Projects } from "../../components/projects/projects";
import { Statistic } from "../../components/statistic/statistic";
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
          <h3 className="home-pitch">
            Pioneering creative and production house offering commercials,
            branded, and short-form content to your favourite brands
          </h3>
          <ButtonBackgroundHoverEffect text="Let's Work Together"></ButtonBackgroundHoverEffect>
        </div>
      </section>
      <section className="home-services-section">
        <h3 className="home-pitch-long">
          Alexon media is a pioneering <br />{" "}
          <h3>creative and production house</h3> Offering commercials, branded,
          and short-form content to your favourite brands <br /> Inspired by the
          pursuit of dreams, passion, and nature
        </h3>
        <Offerings />
      </section>
      <section className="home-clients-section">
        <h3>Join the ranks of clients like:</h3>
        <LogoList
          logos={[
            "/assets/clientLogos/Corona.png",
            "/assets/clientLogos/AirCanada.png",
            "/assets/clientLogos/Monolink.png",
            "/assets/clientLogos/FourSeasons.png",
            "/assets/clientLogos/Claptone.png",
          ]}
        ></LogoList>
      </section>
      <section className="home-work-section">
        <h3>Our Work</h3>
        <Projects projects={projects} max={9} />
      </section>
      <section className="home-stats-section">
        <h3>Some compelling statistics to share</h3>
        <div className="home-stats-container">
          <Statistic
            statNumber={73}
            statString="%"
            description="of consumers prefer to watch a short-form video to learn about a product or service"
          ></Statistic>
          <Statistic
            statNumber={48}
            statString=""
            description="minutes devoted daily to watching short form content on average"
          ></Statistic>
          <Statistic
            statNumber={1}
            statString="#"
            statStringBeforeNumber
            description="highest ROI out of any social media marketing strategy"
          ></Statistic>
        </div>
      </section>
      <section className="home-customer-experiences-section">
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
      </section>
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
