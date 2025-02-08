"use client";
import "./heroParagraph.css";
import { useRef } from "react";
import { useScroll, motion, MotionValue, useTransform } from "framer-motion";

interface IProps {
  text: string;
  boldStartIndex?: number;
  boldEndIndex?: number;
}

export const HeroParagraph = (props: IProps) => {
  const { text, boldEndIndex = 0, boldStartIndex = 0 } = props;

  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.4"],
  });

  const words = text.split(" ");

  return (
    <p ref={element} className="hero-paragraph">
      {words.map((word, i) => {
        const step = 1 / words.length;
        const start = i * step;
        const end = start + step;
        return (
          <Word
            key={"hero-word-" + i}
            keyId={"hero-word-" + i}
            start={start}
            end={end}
            scrollYProgress={scrollYProgress}
            totalCharCount={text.length}
            boldStartIndex={boldStartIndex}
            boldEndIndex={boldEndIndex}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
};

interface WordProps {
  children: string;
  keyId: string;
  start: number;
  end: number;
  scrollYProgress: MotionValue<number>;
  totalCharCount: number;
  boldStartIndex: number;
  boldEndIndex: number;
}

const Word = (props: WordProps) => {
  const {
    children,
    keyId,
    start,
    end,
    scrollYProgress,
    totalCharCount,
    boldStartIndex,
    boldEndIndex,
  } = props;
  const characters = children.split("");
  const amount = end - start;
  const step = amount / children.length;
  return (
    <span key={keyId} className="hero-word">
      {characters.map((character, i) => {
        const characterStart = start + step * i;
        const characterEnd = characterStart + step;
        return (
          <Character
            key={"hero-character-" + i}
            keyId={"hero-character-" + i}
            start={characterStart}
            end={characterEnd}
            scrollYProgress={scrollYProgress}
            totalCharCount={totalCharCount}
            boldStartIndex={boldStartIndex}
            boldEndIndex={boldEndIndex}
          >
            {character}
          </Character>
        );
      })}
    </span>
  );
};

const Character = (props: WordProps) => {
  const {
    children,
    keyId,
    start,
    end,
    scrollYProgress,
    totalCharCount,
    boldStartIndex,
    boldEndIndex,
  } = props;
  const characterOpacity = useTransform(
    scrollYProgress,
    [start, end],
    [0.1, 1]
  );

  return (
    <motion.span
      key={keyId}
      className={`hero-character ${
        end * totalCharCount <= boldEndIndex &&
        start * totalCharCount >= boldStartIndex
          ? "bold"
          : ""
      }`}
      style={{ opacity: characterOpacity }}
    >
      {children}
    </motion.span>
  );
};
