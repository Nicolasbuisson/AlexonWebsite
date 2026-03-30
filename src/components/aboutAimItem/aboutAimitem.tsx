import "./aboutAimItem.css";

interface IProps {
  heading: string;
  title: string;
  description: string;
}

export const AboutAimItem = (props: IProps) => {
  const { heading, title, description } = props;
  return (
    <div className="about-aim-item-wrapper">
      <span className="about-aim-item-heading">{heading}</span>
      <span className="about-aim-item-title">{title}</span>
      <span className="about-aim-item-description">{description}</span>
    </div>
  );
};
