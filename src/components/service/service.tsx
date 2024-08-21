import { ReactNode } from "react";
import "./service.css";

interface IProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export const Service = (props: IProps) => {
  const { title, description, icon } = props;
  return (
    <div className="service-container">
      <div className="service-icon">{icon}</div>
      <h4 className="service-title">{title}</h4>
      <p className="service-description">{description}</p>
      <a href="/work" className="service-learn-more-container">
        <p className="service-learn-more-text">Learn More</p>
        <svg
          className="service-learn-more-icon"
          viewBox="-3.2 -3.2 38.40 38.40"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="SVGRepo_bgCarrier"
            strokeWidth="0"
            transform="translate(9.280000000000001,9.280000000000001), scale(0.42)"
          ></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="0.44800000000000006"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path>{" "}
          </g>
        </svg>
      </a>
    </div>
  );
};
