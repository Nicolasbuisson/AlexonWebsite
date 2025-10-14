import { ReactNode } from "react";
import "./tagLine.css";

interface TagLineProps {
  children: ReactNode;
}

export const TagLine = (props: TagLineProps) => {
  return <div className="tagline">{props.children}</div>;
};
