import { ButtonBackgroundHoverEffect } from "../../components/buttonBackgroundHoverEffect/buttonBackgroundHoverEffect";
import { Footer } from "../../components/footer/footer";
import { Insta } from "../../components/insta/insta";
import { Navigation } from "../../components/navigation/navigation";
import { Projects } from "../../components/projects/projects";
import { Service } from "../../components/service/service";
import { Statistic } from "../../components/statistic/statistic";
import { WorkItemProps } from "../../types/work";
import "./home.css";

interface HomeProps {
  projects: WorkItemProps[];
}

export const Home = (props: HomeProps) => {
  const { projects } = props;
  return (
    <div className="home-section-container">
      <Navigation sticky title="Alexon" showIcons></Navigation>
      <section className="home-hero-section">
        <div className="home-hero-bg"></div>
        <div className="home-hero-text">
          <h3 className="home-pitch">
            Pioneering creative and production house offering commercials,
            branded, and short-form content to your favourite brands
          </h3>
          <ButtonBackgroundHoverEffect text="Let's Work Together"></ButtonBackgroundHoverEffect>
        </div>
      </section>
      <section className="home-services-section">
        <h3 className="home-services-title">
          Highly expert <h3 className="grey">services offerings</h3>
        </h3>
        <div className="home-services-container">
          <Service
            title="Storytelling"
            description="Master storytellers; we are at our core filmmakers with a passion for telling meaningful and impactful stories"
            icon={
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
                    stroke="#000000"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.2353 6H21.5C21.7761 6 22 6.22386 22 6.5V19.539C22 19.9436 21.5233 20.2124 21.1535 20.0481C20.3584 19.6948 19.0315 19.2632 17.2941 19.2632C14.3529 19.2632 12 21 12 21C12 21 9.64706 19.2632 6.70588 19.2632C4.96845 19.2632 3.64156 19.6948 2.84647 20.0481C2.47668 20.2124 2 19.9436 2 19.539V6.5C2 6.22386 2.22386 6 2.5 6H4.76471"
                    stroke="#000000"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            }
          ></Service>
          <Service
            title="Content Science & Optimization"
            description="Retention-based editing, performance editing while respecting your brand guidelines"
            icon={
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="service-svg"
              >
                <path
                  d="M5 18H15C16.1046 18 17 17.1046 17 16V8.57143V8C17 6.89543 16.1046 6 15 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="6.5"
                  cy="9.5"
                  r="0.5"
                  stroke="#000000"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 10L21 7V17L17 14"
                  stroke="#000000"
                  strokeLinejoin="round"
                />
              </svg>
            }
          ></Service>
          <Service
            title="Brand Strategy"
            description="From conceptualization to ideation to distribution on social media platforms; we have the know how
          and are entrepreneurs ourselves. We'll save you precious time and ensure that your content is effectively distributed"
            icon={
              <svg
                fill="#000000"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
                xmlSpace="preserve"
                width="90px"
                height="90px"
                stroke="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="strategy--play_1_"
                    d="M27,18.64c-1.302,0-2.36,1.059-2.36,2.36s1.059,2.36,2.36,2.36s2.36-1.059,2.36-2.36 S28.302,18.64,27,18.64z M27,22.64c-0.904,0-1.64-0.735-1.64-1.64s0.735-1.64,1.64-1.64s1.64,0.735,1.64,1.64S27.904,22.64,27,22.64 z M20,18.64c-1.302,0-2.36,1.059-2.36,2.36s1.059,2.36,2.36,2.36s2.36-1.059,2.36-2.36S21.302,18.64,20,18.64z M20,22.64 c-0.904,0-1.64-0.735-1.64-1.64s0.735-1.64,1.64-1.64s1.64,0.735,1.64,1.64S20.904,22.64,20,22.64z M20,25.64 c-1.302,0-2.36,1.059-2.36,2.36s1.059,2.36,2.36,2.36s2.36-1.059,2.36-2.36S21.302,25.64,20,25.64z M20,29.64 c-0.904,0-1.64-0.735-1.64-1.64s0.735-1.64,1.64-1.64s1.64,0.735,1.64,1.64S20.904,29.64,20,29.64z M13,23.36 c1.301,0,2.36-1.059,2.36-2.36s-1.059-2.36-2.36-2.36s-2.36,1.059-2.36,2.36S11.699,23.36,13,23.36z M13,19.36 c0.904,0,1.64,0.735,1.64,1.64s-0.736,1.64-1.64,1.64s-1.64-0.735-1.64-1.64S12.096,19.36,13,19.36z M10.746,5.746L12.491,4 l-1.746-1.746l0.509-0.509L13,3.491l1.746-1.746l0.509,0.509L13.509,4l1.746,1.746l-0.509,0.509L13,4.509l-1.746,1.746L10.746,5.746 z M17.745,15.746L19.491,14l-1.746-1.746l0.51-0.509L20,13.491l1.745-1.745l0.51,0.509L20.509,14l1.746,1.746l-0.51,0.509L20,14.509 l-1.745,1.745L17.745,15.746z M27,10.491l1.745-1.745l0.51,0.509L27.509,11l1.746,1.746l-0.51,0.509L27,11.509l-1.745,1.745 l-0.51-0.509L26.491,11l-1.746-1.746l0.51-0.509L27,10.491z M10,27.64h6v0.721h-6c-0.054,0-5.36-0.062-5.36-5.36V5.868L3.255,7.254 l-0.51-0.509L4.997,4.49l2.257,2.254l-0.509,0.51L5.36,5.87V23C5.36,27.587,9.811,27.64,10,27.64z M24.35,2.859l0.01,2.139 c0,2.66-2.198,3.362-3.36,3.362h-4c-3.584,0-3.64,3.492-3.64,3.641v5h-0.72v-5c0-0.043,0.05-4.36,4.36-4.36h4 c0.106,0,2.64-0.044,2.64-2.64l-0.01-2.12l-1.374,1.374l-0.51-0.509L24,1.491l2.255,2.255l-0.51,0.509L24.35,2.859z"
                  />
                </g>
              </svg>
            }
          ></Service>
        </div>
      </section>
      <section className="home-work-section">
        <h3>See some of our work</h3>
        <Projects projects={projects} max={9}></Projects>
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
            description="minutes devoted daily daily to watching short form content on average"
          ></Statistic>
          <Statistic
            statNumber={1}
            statString="#"
            statStringBeforeNumber
            description="highest ROI out of any social media marketing strategy"
          ></Statistic>
        </div>
      </section>
      <section className="home-insta-section">
        <h3>Stay up to date with our Instagram</h3>
        <Insta></Insta>
      </section>
      <Footer></Footer>
    </div>
  );
};
