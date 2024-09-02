import "./buttonBackgroundHoverEffect.css";

interface IProps {
  text: string;
  className?: string;
}

export const ButtonBackgroundHoverEffect = (props: IProps) => {
  const { text, className = "" } = props;
  return (
    <div className={`button-background-effect-container ${className}`}>
      <button className="button-background-effect">{text}</button>
      <button className="black-background">{text}</button>
    </div>
  );
};
