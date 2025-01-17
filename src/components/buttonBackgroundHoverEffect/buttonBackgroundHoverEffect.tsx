import "./buttonBackgroundHoverEffect.css";

interface IProps {
  text: string;
  className?: string;
  link?: string;
  onClick?: () => void;
}

export const ButtonBackgroundHoverEffect = (props: IProps) => {
  const { text, className = "", link = "", onClick = () => {} } = props;
  return link ? (
    <a
      href={link}
      className={`button-background-effect-container ${className}`}
    >
      <button className="button-background-effect">{text}</button>
      <button className="black-background">{text}</button>
    </a>
  ) : (
    <div className={`button-background-effect-container ${className}`}>
      <button className="button-background-effect" onClick={onClick}>
        {text}
      </button>
      <button className="black-background" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
