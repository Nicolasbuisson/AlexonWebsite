import { ReactNode } from "react";
import "./feature.css";

interface FeatureProps {
  svgPath: ReactNode;
  title: string;
  description: string;
}

export const Feature = (props: FeatureProps) => {
  const { svgPath, title, description } = props;
  return (
    <div className="feature-container">
      {svgPath}
      <p className="feature-title">{title}</p>
      <p className="feature-description">{description}</p>
    </div>
  );
};
