"use client";
import { motion } from "framer-motion";
import "./flipLink.css";
import nextConfig from "../../../next.config";

interface FlipLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export const FlipLink = (props: FlipLinkProps) => {
  const DURATION = 0.25;
  const STAGGER = 0.025;
  const { href, label, onClick = () => {} } = props;
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={nextConfig.basePath + href}
      className="flip-link"
      onClick={onClick}
    >
      <div>
        {label.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div>
        {label.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
