import "./shortform.css";
import { Navigation } from "../../components/navigation/navigation";
import nextConfig from "../../../next.config";
import { ButtonBackgroundHoverEffect } from "../../components/buttonBackgroundHoverEffect/buttonBackgroundHoverEffect";
import { Offerings } from "../../components/offerings/offerings";
import { Statistic } from "../../components/statistic/statistic";
import { Package } from "../../components/package/package";
import { HorizontalScroller } from "../../components/horizontalScroller/horizontalScroller";
import Image from "next/image";

function ShortForm() {
  return (
    <div className="shortform-container">
      <Navigation />
      <section className="shortform-hero-section">
        <div className="shortform-video-background">
          <video
            src={nextConfig.basePath + "/assets/videos/Productions.mp4"}
            muted
            autoPlay
            loop
          ></video>
          <div className="shortform-hero-text">
            <h2 className="shortform-title">
              Optimized vertical videos for Limitless Impact
            </h2>
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
            <Image
              src={`${nextConfig.basePath}/assets/clientLogos/Corona.png`}
              width={2400}
              height={2400}
              alt="Corona logo"
              className="shortform-horizontal-scroller-logo"
            />
            <Image
              src={`${nextConfig.basePath}/assets/clientLogos/FourSeasons.png`}
              width={1000}
              height={563}
              alt="Four Seasons logo"
              className="shortform-horizontal-scroller-logo"
            />
            <Image
              src={`${nextConfig.basePath}/assets/clientLogos/McGillUniversity.png`}
              width={1759}
              height={756}
              alt="McGill University logo"
              className="shortform-horizontal-scroller-logo"
            />
            <Image
              src={`${nextConfig.basePath}/assets/clientLogos/Coinbase.png`}
              width={1556}
              height={278}
              alt="Coinbase logo"
              className="shortform-horizontal-scroller-logo"
            />
            <Image
              src={`${nextConfig.basePath}/assets/clientLogos/AirCanada.png`}
              width={1280}
              height={166}
              alt="AirCanada logo"
              className="shortform-horizontal-scroller-logo"
            />
            <Image
              src={`${nextConfig.basePath}/assets/clientLogos/Claptone.png`}
              width={800}
              height={300}
              alt="Claptone logo"
              className="shortform-horizontal-scroller-logo"
            />
            <Image
              src={`${nextConfig.basePath}/assets/clientLogos/ParcOmega.png`}
              width={1080}
              height={540}
              alt="Parc Omega logo"
              className="shortform-horizontal-scroller-logo"
            />
            <Image
              src={`${nextConfig.basePath}/assets/clientLogos/Monolink.png`}
              width={1200}
              height={307}
              alt="Monolink logo"
              className="shortform-horizontal-scroller-logo"
            />
          </HorizontalScroller>
        </section>
      </div>
      <section className="shortform-work-section">
        <h2 className="shortform-work-title">Our Work</h2>
        <div className="shortform-work-grid">
          <video
            src={nextConfig.basePath + "/assets/videos/shortform/Belcore.mov"}
            controls
          />
          <video
            src={nextConfig.basePath + "/assets/videos/shortform/Claptone.mov"}
            controls
          />
          <video
            src={
              nextConfig.basePath +
              "/assets/videos/shortform/CoinbasePenrosePartners.mp4"
            }
            controls
          />
          <video
            src={nextConfig.basePath + "/assets/videos/shortform/Corona.mov"}
            controls
          />
          <video
            src={
              nextConfig.basePath +
              "/assets/videos/shortform/ElewanaCollection.mov"
            }
            controls
          />
          <video
            src={nextConfig.basePath + "/assets/videos/shortform/Prepinson.mov"}
            controls
          />
          <video
            src={nextConfig.basePath + "/assets/videos/shortform/Vacier.mov"}
            controls
          />
          <video
            src={nextConfig.basePath + "/assets/videos/shortform/Vacier.mov"}
            controls
          />
          <video
            src={nextConfig.basePath + "/assets/videos/shortform/Vacier.mov"}
            controls
          />
        </div>
      </section>
      <section className="shortform-results-section">
        <div className="shortform-results-text">
          <h3>Results you can see</h3>
          <h3 className="grey">And measure</h3>
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
