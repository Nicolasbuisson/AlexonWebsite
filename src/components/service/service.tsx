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
    </div>
  );
};
