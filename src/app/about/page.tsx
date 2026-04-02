import "./about.css";
import { InstaSection } from "../../components/insta/instaSection";
import { Navigation } from "../../components/navigation/navigation";
import { AboutHeroV2 } from "../../components/aboutHeroV2/aboutHeroV2";
import { HeroParagraph } from "../../components/heroParapgraph/heroParagraph";
import { AboutAimItem } from "../../components/aboutAimItem/aboutAimitem";
import { AboutFounder } from "../../components/aboutFounder/aboutFounder";

// revalidate and rebuild the static page every 15 minutes to obtain fresh instagram data
export const revalidate = 900;

function AboutPage() {
  return (
    <div className="about-container">
      <Navigation showIcons />
      <AboutHeroV2 />
      <section className="about-philosophy-section">
        <h3>Our Philosophy</h3>
        <HeroParagraph
          text={
            "At Alexon Media, we believe powerful stories & strategic content shouldn't come with complicated processes. Too often, brands face layers of agency bureaucracy just to produce premium content. We built Alexon Media as a non-agency—a nimble, collaborative team focused on making premium, high-production visuals as seamless and hassle-free as possible. By combining strategic thinking with cinematic storytelling, we help brands create standout content without the friction of traditional agency models."
          }
          className="about-philosophy-paragraph"
          scrollOffset={["start 0.7", "end 0.8"]}
          boldStartIndex={238}
          boldEndIndex={250}
        />
      </section>
      <section className="about-aim-section">
        <h3>Our Aim</h3>
        <div className="about-aim-text">
          <h4>
            What sets us <br />
            on fire
          </h4>
          <AboutAimItem
            heading="[ 01 ]"
            title="Stories That Elevate Brands"
            description="Every premium brand carries a story worth telling. We craft cinematic narratives that reveal the essence of a brand—shaping perception, building aspiration, and turning audiences into believers & long-term customers."
          />
          <AboutAimItem
            heading="[ 02 ]"
            title="Content With a Strategic Edge"
            description="Beautiful content alone isn't enough. We create strategic, social-first content designed to move audiences from attention to action—aligning creativity with clear business outcomes and measurable growth to increase your bottom-line revenue."
          />
          <AboutAimItem
            heading="[ 03 ]"
            title="Celebrating the Beauty of Life"
            description="We believe the most powerful stories are rooted in authenticity. Through our lens, we celebrate the moments, places, and perspectives that remind people to slow down, look closer, and rediscover the beauty that surrounds them."
          />
          <AboutAimItem
            heading="[ 04 ]"
            title="Pioneering Social-First Production"
            description="We operate at the intersection of media, strategy, and innovation. As a nimble non-agency team, we’re redefining how high-quality, social-first content is produced—making premium visuals faster, smarter, and more accessible for modern brands."
          />
        </div>
      </section>
      <AboutFounder />
      <InstaSection additionalTitle="Follow the Journey" />
    </div>
  );
}

export default AboutPage;
