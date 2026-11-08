import { CSSProperties } from "react";
import "./aboutAimItem.css";

export interface IAboutAimItemProps {
  heading: string;
  title: string;
  description: string;
}

interface IProps extends IAboutAimItemProps {
  style?: CSSProperties;
}

export const AboutAimItem = (props: IProps) => {
  const { heading, title, description, style } = props;
  return (
    <div className="about-aim-item-wrapper" style={style}>
      <span className="about-aim-item-heading">{heading}</span>
      <span className="about-aim-item-title">{title}</span>
      <span className="about-aim-item-description">{description}</span>
    </div>
  );
};
