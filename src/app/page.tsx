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
import { TagLine } from "../components/tagLine/tagLine";
import { Feature } from "../components/feature/feature";
import { AboutCollage } from "../components/aboutCollage/aboutCollage";

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
            Where cinematic excellence meets strategic performance
          </h3>
          <ButtonBackgroundHoverEffect
            text="Let's Work Together"
            link="/contact"
            accent
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
              src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/ELLE.png`}
              fill
              alt="ELLE logo"
              className="home-horizontal-scroller-logo"
            />
          </div>
          <div className="home-horizontal-scroller-logo-wrapper">
            <Image
              src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/JohnSummit.png`}
              fill
              alt="John Summit logo"
              className="home-horizontal-scroller-logo"
            />
          </div>
          <div className="home-horizontal-scroller-logo-wrapper">
            <Image
              src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/AirCanada.png`}
              fill
              alt="Air Canada logo"
              className="home-horizontal-scroller-logo"
            />
          </div>
          <div className="home-horizontal-scroller-logo-wrapper">
            <Image
              src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/Xiaomi.png`}
              fill
              alt="Xiaomi logo"
              className="home-horizontal-scroller-logo"
            />
          </div>
          <div className="home-horizontal-scroller-logo-wrapper">
            <Image
              src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/BUNT.png`}
              fill
              alt="BUNT logo"
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
              src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/OnomoHotels.png`}
              fill
              alt="Onomo Hotels logo"
              className="home-horizontal-scroller-logo"
            />
          </div>
          <div className="home-horizontal-scroller-logo-wrapper">
            <Image
              src={`https://d128kbp85lo7cj.cloudfront.net/clientLogos/Toyota.png`}
              fill
              alt="Toyota logo"
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
              "Alexon Media is a social-first video production agency crafting cinematic storytelling for brands that want to stand out. We blend creative vision with strategic precision—producing both luxury brand films and high-performing short-form content designed to inspire, engage, and convert."
            }
            className="home-about-hero-paragraph"
            italicWordIndexes={[4, 5, 6, 7]}
          />
        </h3>
        <AboutCollage />
      </section>
      <section className="home-productions-section">
        <div className="home-productions-header">
          <h4>Productions</h4>
          <h4>02/</h4>
        </div>
        <TagLine>
          <h3>
            Redefining <span>modern storytelling</span> through our signature
            lens <br />
            where creativity, agility, and mastery converge to set a{" "}
            <span>new standard</span> in brand films.
          </h3>
        </TagLine>
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
        <TagLine>
          <h3>
            Our <span>done-for-you</span> short-form content packages are
            engineered for impact - where visual excellence meets brand strategy
            to drive <span>reach, conversions, and ROI.</span>
          </h3>
        </TagLine>
        <div className="home-shortform-video-container">
          <video
            src={
              "https://d128kbp85lo7cj.cloudfront.net/shortform/Weekenders.mp4"
            }
            muted
            autoPlay
            loop
          ></video>
          <video
            src={
              "https://d128kbp85lo7cj.cloudfront.net/shortform/AlexParentsAdvice.mp4"
            }
            muted
            autoPlay
            loop
          ></video>
          <video
            src={
              "https://d128kbp85lo7cj.cloudfront.net/shortform/Montgolfieeres.mp4"
            }
            muted
            autoPlay
            loop
          ></video>
          <video
            src={"https://d128kbp85lo7cj.cloudfront.net/shortform/DavidTso.mp4"}
            muted
            autoPlay
            loop
          ></video>
        </div>
        <div className="home-shortform-features-container">
          <Feature
            svgPath={
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 24 24"
              >
                <path d="M4.991 19.053c-.365-4.385 4.436-7.43 4.468-8.513.003-.084-.058-.09-.114-.088-.527.02-2.061 1.722-3.939 1.108-1.194-.389-1.89-1.705-1.96-2.805-.065-1.021.378-1.859 1.186-2.242.984-.466 1.279-1.209 1.592-1.997.182-.456.72-2.238 2.696-2.238.305 0 .578.044.821.086.119-.565-.254-1.828-.883-2.364 8.276.037 11.226 5.967 11.226 9.652 0 5.012-2.729 7.166-1.37 9.357 1.585.138 2.286 1.511 2.286 2.491 0 1.198-.953 2.5-2.5 2.5h-13c-1.196 0-2.5-.946-2.5-2.5 0-1.197.847-2.211 1.991-2.447zm14.009 2.447c0-.276-.223-.5-.5-.5h-13c-.276 0-.5.224-.5.5 0 .277.224.5.5.5h13c.277 0 .5-.223.5-.5zm-1.149-13.5c-.602-2.197-2.408-4.682-5.981-5.655.332 1.324-.543 2.323-2.416 2-.955-.169-.998-.027-1.371.911-.359.9-.9 2.262-2.594 3.065-.181.194.102 1.196.536 1.337.852.278 1.93-1.201 3.339-1.201 1.207 0 2.076 1.099 2.094 2.041.027 1.135-.914 2.111-2.003 3.239-1.392 1.444-2.678 3.247-2.467 5.263h9.503c-.256-.91-.156-2.205.423-4h-1.195c-.239 0-.5-.189-.5-.5 0-.31.26-.5.5-.5h1.541c.11-.319.222-.651.323-1h-1.251c-.31 0-.5-.259-.5-.5 0-.239.19-.5.5-.5h1.506c.068-.318.124-.65.166-1h-1.285c-.239 0-.5-.189-.5-.5 0-.31.26-.5.5-.5h1.36c.01-.382.008-.643-.034-1h-1.491c-.239 0-.5-.189-.5-.5 0-.31.26-.5.5-.5h1.297zm-7.911-2.684c.519 0 .94.378.94.842 0 .465-.421.842-.94.842-.518 0-.94-.377-.94-.842 0-.464.422-.842.94-.842z" />
              </svg>
            }
            title="Where Beauty Meets Strategy"
            description="We merge luxury-grade visuals with data-driven strategy, ensuring your content doesn’t just look exceptional, it delivers measurable impact."
          />
          <Feature
            svgPath={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 24 24"
              >
                <path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z" />
              </svg>
            }
            title="Speed Without Compromise"
            description="We move at the speed of culture without compromising quality. Our agile production model allows us to deliver cinematic content faster, keeping your brand ahead of trends and competition."
          />
          <Feature
            svgPath={
              <svg
                clipRule="evenodd"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                height={32}
                width={32}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm13.5 10.75c0-.414-.336-.75-.75-.75h-4.5c-.414 0-.75.336-.75.75s.336.75.75.75h4.5c.414 0 .75-.336.75-.75zm-11.772-.537 1.25 1.114c.13.116.293.173.455.173.185 0 .37-.075.504-.222l2.116-2.313c.12-.131.179-.296.179-.459 0-.375-.303-.682-.684-.682-.185 0-.368.074-.504.221l-1.66 1.815-.746-.665c-.131-.116-.293-.173-.455-.173-.379 0-.683.307-.683.682 0 .188.077.374.228.509zm11.772-2.711c0-.414-.336-.75-.75-.75h-4.5c-.414 0-.75.336-.75.75s.336.75.75.75h4.5c.414 0 .75-.336.75-.75zm-11.772-1.613 1.25 1.114c.13.116.293.173.455.173.185 0 .37-.074.504-.221l2.116-2.313c.12-.131.179-.296.179-.46 0-.374-.303-.682-.684-.682-.185 0-.368.074-.504.221l-1.66 1.815-.746-.664c-.131-.116-.293-.173-.455-.173-.379 0-.683.306-.683.682 0 .187.077.374.228.509zm11.772-1.639c0-.414-.336-.75-.75-.75h-4.5c-.414 0-.75.336-.75.75s.336.75.75.75h4.5c.414 0 .75-.336.75-.75z" />
              </svg>
            }
            title="Done for you Workflow"
            description="We make productions effortless. From ideation to execution, our done-for-you process handles every detail - so you can focus on running your business while we deliver impact-driven content."
          />
          <Feature
            svgPath={
              <svg
                width={32}
                height={32}
                viewBox="0 0 28 28"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth="1" fillRule="evenodd">
                  <g fillRule="nonzero">
                    <path d="M17.2540247,11 C18.4966654,11 19.5040247,12.0073593 19.5040247,13.25 L19.5040247,19.4989513 C19.5040247,22.5370966 17.0411213,25 14.002976,25 C10.9648308,25 8.50192738,22.5370966 8.50192738,19.4989513 L8.50192738,13.25 C8.50192738,12.0073593 9.5092867,11 10.7519274,11 L17.2540247,11 Z M17.2540247,12.5 L10.7519274,12.5 C10.3377138,12.5 10.0019274,12.8357864 10.0019274,13.25 L10.0019274,19.4989513 C10.0019274,21.7086695 11.7932579,23.5 14.002976,23.5 C16.2126942,23.5 18.0040247,21.7086695 18.0040247,19.4989513 L18.0040247,13.25 C18.0040247,12.8357864 17.6682382,12.5 17.2540247,12.5 Z M4.25,11 L8.40645343,11.000271 C8.01177565,11.4116389 7.72426829,11.9266236 7.58881197,12.5003444 L4.25,12.5 C3.83578644,12.5 3.5,12.8357864 3.5,13.25 L3.5,18.49876 C3.5,20.1562991 4.8437009,21.5 6.50123996,21.5 C6.94210796,21.5 7.36077379,21.4049412 7.73785924,21.2342019 C7.87129592,21.7236075 8.06231805,22.1898881 8.30186513,22.6257307 C7.75085328,22.8662539 7.14166566,23 6.50123996,23 C4.01527377,23 2,20.9847262 2,18.49876 L2,13.25 C2,12.0073593 3.00735931,11 4.25,11 Z M23.75,11 C24.9926407,11 26,12.0073593 26,13.25 L26,18.5 C26,20.9852814 23.9852814,23 21.5,23 C20.8609276,23 20.2529701,22.8667819 19.7023824,22.6266008 L19.7581025,22.5253735 C19.9721624,22.119151 20.1444731,21.6875096 20.2693267,21.2361575 C20.6437791,21.4056508 21.0608713,21.5 21.5,21.5 C23.1568542,21.5 24.5,20.1568542 24.5,18.5 L24.5,13.25 C24.5,12.8357864 24.1642136,12.5 23.75,12.5 L20.4171401,12.5003444 C20.2816838,11.9266236 19.9941764,11.4116389 19.5994986,11.000271 L23.75,11 Z M14,3 C15.9329966,3 17.5,4.56700338 17.5,6.5 C17.5,8.43299662 15.9329966,10 14,10 C12.0670034,10 10.5,8.43299662 10.5,6.5 C10.5,4.56700338 12.0670034,3 14,3 Z M22.0029842,4 C23.6598384,4 25.0029842,5.34314575 25.0029842,7 C25.0029842,8.65685425 23.6598384,10 22.0029842,10 C20.3461299,10 19.0029842,8.65685425 19.0029842,7 C19.0029842,5.34314575 20.3461299,4 22.0029842,4 Z M5.99701582,4 C7.65387007,4 8.99701582,5.34314575 8.99701582,7 C8.99701582,8.65685425 7.65387007,10 5.99701582,10 C4.34016157,10 2.99701582,8.65685425 2.99701582,7 C2.99701582,5.34314575 4.34016157,4 5.99701582,4 Z M14,4.5 C12.8954305,4.5 12,5.3954305 12,6.5 C12,7.6045695 12.8954305,8.5 14,8.5 C15.1045695,8.5 16,7.6045695 16,6.5 C16,5.3954305 15.1045695,4.5 14,4.5 Z M22.0029842,5.5 C21.1745571,5.5 20.5029842,6.17157288 20.5029842,7 C20.5029842,7.82842712 21.1745571,8.5 22.0029842,8.5 C22.8314113,8.5 23.5029842,7.82842712 23.5029842,7 C23.5029842,6.17157288 22.8314113,5.5 22.0029842,5.5 Z M5.99701582,5.5 C5.16858869,5.5 4.49701582,6.17157288 4.49701582,7 C4.49701582,7.82842712 5.16858869,8.5 5.99701582,8.5 C6.82544294,8.5 7.49701582,7.82842712 7.49701582,7 C7.49701582,6.17157288 6.82544294,5.5 5.99701582,5.5 Z"></path>
                  </g>
                </g>
              </svg>
            }
            title="Your Dedicated creative team"
            description="By partnering with us, you’re gaining a team. You will have a dedicated project manager, editor, and videographer who will evolve with you to create seamless, consistent, and high-impact over the long-run."
          />
        </div>
      </section>
      <InstaSection />
    </div>
  );
}

export default Home;
