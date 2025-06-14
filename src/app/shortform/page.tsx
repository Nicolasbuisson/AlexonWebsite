import "./shortform.css";
import { Navigation } from "../../components/navigation/navigation";
import { ButtonBackgroundHoverEffect } from "../../components/buttonBackgroundHoverEffect/buttonBackgroundHoverEffect";
import { Offerings } from "../../components/offerings/offerings";
import { Statistic } from "../../components/statistic/statistic";
import { Package } from "../../components/package/package";
import { HorizontalScroller } from "../../components/horizontalScroller/horizontalScroller";
import Image from "next/image";
import { ParallaxScrollGallery } from "../../components/parallaxScrollGallery/parallaxScrollGallery";

function ShortForm() {
  return (
    <div className="shortform-container">
      <Navigation />
      <section className="shortform-hero-section">
        <div className="shortform-video-background">
          <video
            src={"https://d128kbp85lo7cj.cloudfront.net/videos/Productions.mp4"}
            muted
            autoPlay
            loop
          ></video>
          <h2 className="shortform-title">
            Optimized vertical videos for Limitless Impact
          </h2>
          <div className="shortform-hero-text">
            <p>Maximize your reach, increase your conversions,</p>
            <p>
              and boost your sales with our effortless short-form content
              offering
            </p>
            <ButtonBackgroundHoverEffect
              text="See Packages"
              className="shortform-hero-button"
              link="#shortform-packages"
            ></ButtonBackgroundHoverEffect>
          </div>
        </div>
      </section>
      <section className="shortform-offerings-section">
        <Offerings />
      </section>
      <div className="shortform-packages-white-background">
        <section className="shortform-packages-section" id="shortform-packages">
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
          <HorizontalScroller>
            <div className="shortform-horizontal-scroller-logo-wrapper">
              <Image
                src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/Corona.png`}
                fill
                alt="Corona logo"
                className="shortform-horizontal-scroller-logo"
              />
            </div>
            <div className="shortform-horizontal-scroller-logo-wrapper">
              <Image
                src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/FourSeasons.png`}
                fill
                alt="Four Seasons logo"
                className="shortform-horizontal-scroller-logo"
              />
            </div>
            <div className="shortform-horizontal-scroller-logo-wrapper">
              <Image
                src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/McGillUniversity.png`}
                fill
                alt="McGill University logo"
                className="shortform-horizontal-scroller-logo"
              />
            </div>
            <div className="shortform-horizontal-scroller-logo-wrapper">
              <Image
                src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/Coinbase.png`}
                fill
                alt="Coinbase logo"
                className="shortform-horizontal-scroller-logo"
              />
            </div>
            <div className="shortform-horizontal-scroller-logo-wrapper">
              <Image
                src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/AirCanada.png`}
                fill
                alt="AirCanada logo"
                className="shortform-horizontal-scroller-logo"
              />
            </div>
            <div className="shortform-horizontal-scroller-logo-wrapper">
              <Image
                src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/Claptone.png`}
                fill
                alt="Claptone logo"
                className="shortform-horizontal-scroller-logo"
              />
            </div>
            <div className="shortform-horizontal-scroller-logo-wrapper">
              <Image
                src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/ParcOmega.png`}
                fill
                alt="Parc Omega logo"
                className="shortform-horizontal-scroller-logo"
              />
            </div>
            <div className="shortform-horizontal-scroller-logo-wrapper">
              <Image
                src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/Monolink.png`}
                fill
                alt="Monolink logo"
                className="shortform-horizontal-scroller-logo"
              />
            </div>
          </HorizontalScroller>
          <h2 className="shortform-work-title">Our Work</h2>
        </section>
      </div>
      <section className="shortform-work-section">
        <div className="parallax-scroll-gallery-wrapper">
          <ParallaxScrollGallery></ParallaxScrollGallery>
        </div>
      </section>
      <section className="shortform-results-section">
        <div className="shortform-results-text">
          <h3>Results you can see</h3>
          <h3 className="grey">and Measure</h3>
          <p className="grey">
            Capture attention, tell your story, and drive results with our
            short-form video packages.
          </p>
          <p className="grey">
            Designed for virality and engagement, our videos make your brand
            stand out in the scroll and ultimately boost your revenues.
          </p>
        </div>
        <div className="stats-container">
          <Statistic
            title="ROI"
            statNumber={1}
            statString="#"
            statStringBeforeNumber
            description="Highest ROI of any marketing strategy"
          />
          <Statistic
            title="Reach"
            statNumber={8}
            statString="x"
            statStringBeforeNumber
            description="After 3 months"
          />
          <Statistic
            title="Cost Savings"
            statNumber={11000}
            statString="$"
            statStringBeforeNumber
            description="Saved anually on marketing expenses"
          />
          <Statistic
            title="Brand Perception"
            statNumber={93}
            statString="%"
            description="Increase in likelihood of purchase"
          />
          <Statistic
            title="Conversion Rate"
            statNumber={29}
            statString="%"
            description=" Increase after investing in your brand presence"
          />
          <Statistic
            title="Follower Growth"
            statNumber={59}
            statString="%"
            description="After a year"
          />
        </div>
      </section>
    </div>
  );
}

export default ShortForm;
