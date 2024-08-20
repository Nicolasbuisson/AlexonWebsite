import "./buttonBackgroundHoverEffect.css";

interface IProps {
  text: string;
}

export const ButtonBackgroundHoverEffect = (props: IProps) => {
  const { text } = props;
  return (
    <div className="button-background-effect-container">
      <button className="button-background-effect">
        <span className="button-background-effect-text">{text}</span>
      </button>
      <button className="black-background">
        <span className="button-background-effect-text">{text}</span>
      </button>
    </div>
  );
};
