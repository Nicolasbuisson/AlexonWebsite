import { CSSProperties, ReactNode } from "react";
import "./painpointItem.css";

export interface IPainPointItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

interface IProps extends IPainPointItemProps {
  style?: CSSProperties;
}

export const PainPointItem = (props: IProps) => {
  const { icon, title, description, style } = props;
  return (
    <div className="painpoint-item" style={style}>
      {icon}
      <div className="painpoint-item-text">
        <p className="painpoint-item-title">{title}</p>
        <p className="painpoint-item-description">{description}</p>
      </div>
    </div>
  );
};
