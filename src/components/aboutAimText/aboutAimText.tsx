"use client";
import { useInView } from "react-intersection-observer";
import { AboutAimItem, IAboutAimItemProps } from "../aboutAimItem/aboutAimitem";
import "./aboutAimText.css";

const AIMS: IAboutAimItemProps[] = [
  {
    heading: "[ 01 ]",
    title: "Stories That Elevate Brands",
    description:
      "Every premium brand carries a story worth telling. We craft cinematic narratives that reveal the essence of a brand—shaping perception, building aspiration, and turning audiences into believers & long-term customers.",
  },
  {
    heading: "[ 02 ]",
    title: "Content With a Strategic Edge",
    description:
      "Beautiful content alone isn't enough. We create strategic, social-first content designed to move audiences from attention to action—aligning creativity with clear business outcomes and measurable growth to increase your bottom-line revenue.",
  },
  {
    heading: "[ 03 ]",
    title: "Celebrating the Beauty of Life",
    description:
      "We believe the most powerful stories are rooted in authenticity. Through our lens, we celebrate the moments, places, and perspectives that remind people to slow down, look closer, and rediscover the beauty that surrounds them.",
  },
  {
    heading: "[ 04 ]",
    title: "Pioneering Social-First Production",
    description:
      "We operate at the intersection of media, strategy, and innovation. As a nimble non-agency team, we’re redefining how high-quality, social-first content is produced—making premium visuals faster, smarter, and more accessible for modern brands.",
  },
];

export const AboutAimText = () => {
  // observe the heading rather than the wrapper, and only once it is 20% up
  // the screen, so the items animate where they can be seen
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -40% 0px",
  });
  return (
    <div className={`about-aim-text ${inView ? "about-aim-visible" : ""}`}>
      <h4 ref={ref}>
        What sets us <br />
        on fire
      </h4>
      {AIMS.map((aim, index) => (
        <AboutAimItem
          key={aim.title}
          {...aim}
          style={{ transitionDelay: `${index * 150}ms` }}
        />
      ))}
    </div>
  );
};
