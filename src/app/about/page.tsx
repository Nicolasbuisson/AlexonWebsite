import "./about.css";
import type { Metadata } from "next";
import { InstaSection } from "../../components/insta/instaSection";
import { Navigation } from "../../components/navigation/navigation";
import { AboutHeroV2 } from "../../components/aboutHeroV2/aboutHeroV2";
import { HeroParagraph } from "../../components/heroParapgraph/heroParagraph";
import { AboutAimText } from "../../components/aboutAimText/aboutAimText";
import { AboutFounder } from "../../components/aboutFounder/aboutFounder";

export const metadata: Metadata = {
  title: "About Us — The Non-Agency Production Team",
  description:
    "Meet Alexon Media: a nimble non-agency team blending strategic thinking with cinematic storytelling to make premium brand content hassle-free.",
};

// revalidate and rebuild the static page every 1 hour to obtain fresh instagram data
export const revalidate = 3600;

function AboutPage() {
  return (
    <div className="about-container">
      <Navigation showIcons />
      <AboutHeroV2 />
      <section className="about-philosophy-section">
        <h3>
          <span className="about-section-number">01/</span>
          Our Philosophy
        </h3>
        <HeroParagraph
          text={
            "At Alexon Media, we believe powerful stories & strategic content shouldn't come with complicated processes. Too often, brands face layers of agency bureaucracy just to produce premium content. We built Alexon Media as a non-agency — a nimble, collaborative team focused on making premium, high-production visuals as seamless and hassle-free as possible. By combining strategic thinking with cinematic storytelling, we help brands create standout content without the friction of traditional agency models."
          }
          className="about-philosophy-paragraph"
          scrollOffset={["start 0.7", "end 0.6"]}
          italicWordIndexes={[34, 43, 44, 54, 55, 57, 58, 63]}
        />
      </section>
      <section className="about-aim-section">
        <h3>
          <span className="about-section-number">02/</span>
          Our Aim
        </h3>
        <AboutAimText />
      </section>
      <AboutFounder />
      <InstaSection additionalTitle="Follow the Journey" />
    </div>
  );
}

export default AboutPage;
