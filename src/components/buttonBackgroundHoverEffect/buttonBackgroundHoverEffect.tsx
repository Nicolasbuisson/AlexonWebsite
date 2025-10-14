"use client";
import Link from "next/link";
import "./buttonBackgroundHoverEffect.css";

type buttonSize = "small" | "normal";

interface IProps {
  text: string;
  className?: string;
  link?: string;
  onClick?: () => void;
  size?: buttonSize;
  accent?: boolean;
}

export const ButtonBackgroundHoverEffect = (props: IProps) => {
  const {
    text,
    className = "",
    link = "",
    onClick = () => {},
    size = "normal",
    accent = false,
  } = props;
  return link ? (
    <Link
      href={link}
      className={`button-background-effect-container ${className} ${
        size === "small" ? "button-size-small" : ""
      }`}
    >
      <button className="button-background-effect">{text}</button>
      <button
        className={`black-background ${accent ? "accent-background" : ""}`}
      >
        {text}
      </button>
    </Link>
  ) : (
    <div
      className={`button-background-effect-container ${className} ${
        size === "small" ? "button-size-small" : ""
      }`}
    >
      <button className="button-background-effect" onClick={onClick}>
        {text}
      </button>
      <button className="black-background" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
