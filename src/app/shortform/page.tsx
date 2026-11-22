import "./shortform.css";
import type { Metadata } from "next";
import { Navigation } from "../../components/navigation/navigation";
import { ShortFormHero } from "../../components/shortformHero/shortformHero";
import { ShortFormPainPoints } from "../../components/shortformPainPoints/shortformPainPoints";
import { Accordion } from "../../components/accordion/accordion";
import { faqs } from "../../resources/faq.json";
import { ShortFormProcess } from "../../components/shortformProcess/shortformProcess";
import { ShortformGuarantee } from "../../components/shortformGuarantee/shortfromGuarantee";
import { Testimonials } from "../../components/testimonials/testimonials";
import { testimonials } from "../../resources/testimonials.json";
import { Statistic } from "../../components/statistic/statistic";

export const metadata: Metadata = {
  title: "Short-Form Content Systems & Packages",
  description:
    "Done-for-you short-form video packages: strategy, filming, editing and distribution handled by a dedicated creative team built to drive reach and ROI.",
};

function ShortForm() {
  return (
    <div className="shortform-container">
      <Navigation />
      <section className="shortform-hero-section">
        <ShortFormHero />
      </section>
      <ShortFormPainPoints />
      <section className="shortform-work-section">
        <h2>Our Work</h2>
        <div className="shortform-work-video-container">
          <video
            src={
              "https://d128kbp85lo7cj.cloudfront.net/shortform/Weekenders.webm"
            }
            muted
            autoPlay
            loop
            playsInline
          ></video>
          <video
            src={
              "https://d128kbp85lo7cj.cloudfront.net/shortform/AlexParentsAdvice.webm"
            }
            muted
            autoPlay
            loop
            playsInline
          ></video>
          <video
            src={
              "https://d128kbp85lo7cj.cloudfront.net/shortform/Montgolfieeres.webm"
            }
            muted
            autoPlay
            loop
            playsInline
          ></video>
          <video
            src={
              "https://d128kbp85lo7cj.cloudfront.net/shortform/DavidTso.webm"
            }
            muted
            autoPlay
            loop
            playsInline
          ></video>
          <video
            src={
              "https://d128kbp85lo7cj.cloudfront.net/shortform/Weekenders.webm"
            }
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
      </section>
      <section className="shortform-results-section">
        <div className="shortform-results-text">
          <h2>
            Results you can see
            <br />
            and Measure
          </h2>
          <p className="light-grey">
            Capture attention, tell your story, and drive results with our
            short-form video packages.
          </p>
          <p className="light-grey">
            Designed for virality and engagement, our videos make your brand
            stand out in the scroll and ultimately boost your revenues.
          </p>
        </div>
        <div className="stats-container">
          <Statistic
            title="Leads"
            statNumber={1}
            statString="#"
            statStringBeforeNumber
            description="Traffic source"
          />
          <Statistic
            title="Expertise"
            statNumber={2000}
            statString="+"
            description="videos created"
          />
          <Statistic
            title="Attention"
            statNumber={370}
            statString="M+"
            description="organic views generated"
          />
        </div>
      </section>
      <section className="shortform-process-section">
        <ShortFormProcess />
      </section>
      {/* <section className="shortform-packages-section" id="shortform-packages">
        <h3 className="shortform-packages-title">
          Packages optimized for success
        </h3>
        <div className="packages-container">
          <Package
            title={"Basic"}
            price={2500}
            description={
              "Perfect for new brands looking to establish a social media presence with high-quality short-form content"
            }
            itemList={[
              { item: "10 reels /month" },
              { item: "2 rounds of revisions/reel included" },
              {
                item: "Stress-free & Optimized Content Distribution",
                hoverText:
                  "Our team of digital specialists will post all of the content on your behalf, on all your platforms to ensure efficient content distribution and save you time",
              },
              {
                item: "Quarterly Branding & Content Strategy Meeting",
                hoverText:
                  "Align and elevate your brand with our Quarterly Strategy Meetings—deep dives into performance, trends, and next steps for content that drives results.",
              },
              {
                item: "Monthly KPI Dashboard",
                hoverText:
                  "Track your success with our Monthly KPI Dashboards—clear, data-driven insights to measure performance and optimize your content strategy as your brand evolves",
              },
              {
                item: "Highly optimized for every platform",
                hoverText:
                  "We tailor your content & optimize formats for every social platform to maximize reach (Instagram, Tik Tok, Youtube Shorts, and Facebook)",
              },
              {
                item: "Your dedicated content team",
                hoverText:
                  "Get a dedicated team of expert creatives, one filmmaker, one editor and one project manager - crafting content tailored to your brand’s voice, vision, and goals—consistency and quality, every time",
              },
              { item: "Direct line of contact w/ Project Manager" },
            ]}
          />
          <Package
            title={"Premium"}
            price={4000}
            description={
              "Designed for growing brands that want to increase their reach, boost their engagement and stand out with more strategic and impactful content"
            }
            itemList={[
              { item: "20 reels /month" },
              { item: "2 rounds of revisions/reel included" },
              {
                item: "Stress-free & Optimized Content Distribution",
                hoverText:
                  "Our team of digital specialists will post all of the content on your behalf, on all your platforms to ensure efficient content distribution and save you time",
              },
              {
                item: "Quarterly Branding & Content Strategy Meeting",
                hoverText:
                  "Align and elevate your brand with our Quarterly Strategy Meetings—deep dives into performance, trends, and next steps for content that drives results",
              },
              {
                item: "Monthly KPI Dashboard",
                hoverText:
                  "Track your success with our Monthly KPI Dashboards—clear, data-driven insights to measure performance and optimize your content strategy as your brand evolves",
              },
              {
                item: "Highly optimized for every platform",
                hoverText:
                  "We tailor your content & optimize formats for every social platform to maximize reach (Instagram, Tik Tok, Youtube Shorts, and Facebook)",
              },
              {
                item: "Your dedicated content team",
                hoverText:
                  "Get a dedicated team of expert creatives, one filmmaker, one editor and one project manager - crafting content tailored to your brand’s voice, vision, and goals—consistency and quality, every time",
              },
              { item: "Direct line of contact w/ Project Manager" },
            ]}
          />
          <Package
            title={"Scaler"}
            price={6500}
            description={
              "Built for serious brands and businesses aiming for massive reach, virality, and becoming the key player in their industry"
            }
            itemList={[
              { item: "30 reels /month" },
              { item: "3 rounds of revisions/reel included" },
              {
                item: "Stress-free & Optimized Content Distribution",
                hoverText:
                  "Our team of digital specialists will post all of the content on your behalf, on all your platforms to ensure efficient content distribution and save you time",
              },
              {
                item: "Quarterly Branding & Content Strategy Meeting",
                hoverText:
                  "Align and elevate your brand with our Quarterly Strategy Meetings—deep dives into performance, trends, and next steps for content that drives results",
              },
              {
                item: "Monthly KPI Dashboard",
                hoverText:
                  "Track your success with our Monthly KPI Dashboards—clear, data-driven insights to measure performance and optimize your content strategy as your brand evolves",
              },
              {
                item: "Highly optimized for every platform",
                hoverText:
                  "We tailor your content & optimize formats for every social platform to maximize reach (Instagram, Tik Tok, Youtube Shorts, and Facebook)",
              },
              {
                item: "Your dedicated content team",
                hoverText:
                  "Get a dedicated team of expert creatives, one filmmaker, one editor and one project manager - crafting content tailored to your brand’s voice, vision, and goals—consistency and quality, every time",
              },
              { item: "Direct line of contact w/ Project Manager" },
              { item: "15 Professional photos/month" },
            ]}
          />
        </div>
      </section> */}
      <ShortformGuarantee />
      <Testimonials testimonials={testimonials} />
      {/* <section className="shortform-work-section">
      unfortunately, not enough video content + degrades performance too much
      to have 12 videos of 10 MB each loading
        <div className="parallax-scroll-gallery-wrapper">
          <ParallaxScrollGallery></ParallaxScrollGallery>
        </div>
      </section> */}
      <section className="shortform-faq-section">
        <div className="shortform-faq-container">
          <p className="shortform-faq-heading">FAQ</p>
          <h2 className="shortform-faq-title">Common Questions</h2>
          <Accordion faqs={faqs} />
        </div>
      </section>
    </div>
  );
}

export default ShortForm;
