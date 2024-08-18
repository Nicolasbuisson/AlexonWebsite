import "./buttonBackgroundHoverEffect.css";

interface IProps {
  text: string;
}

export const ButtonBackgroundHoverEffect = (props: IProps) => {
  const { text } = props;
  return <div className="button-background-effect">{text}</div>;
};
