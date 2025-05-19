"use client";
import "./heroParagraph.css";
import { useRef } from "react";
import { useScroll, motion, MotionValue, useTransform } from "framer-motion";

interface IProps {
  text: string;
  className?: string;
  scrollOffset?: any[];
  boldStartIndex?: number;
  boldEndIndex?: number;
  italicIndexes?: number[][];
  startFromEnd?: boolean;
}

export const HeroParagraph = (props: IProps) => {
  const {
    text,
    className = "",
    scrollOffset = ["start 0.9", "start 0.4"],
    boldEndIndex = 0,
    boldStartIndex = 0,
    italicIndexes = [],
    startFromEnd = false,
  } = props;

  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: scrollOffset,
  });

  const words = text.split(" ");

  return (
    <p ref={element} className={className}>
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
            italicIndexes={italicIndexes}
            startFromEnd={startFromEnd}
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
  italicIndexes: number[][];
  startFromEnd: boolean;
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
    italicIndexes,
    startFromEnd,
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
            italicIndexes={italicIndexes}
            startFromEnd={startFromEnd}
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
    italicIndexes,
    startFromEnd,
  } = props;
  const characterOpacity = useTransform(
    scrollYProgress,
    startFromEnd ? [1 - end, 1 - start] : [start, end],
    startFromEnd ? [1, 0] : [0.1, 1]
  );

  const italized = italicIndexes.find(
    (indexRange) =>
      start * totalCharCount >= indexRange[0] &&
      end * totalCharCount <= indexRange[1]
  );
  const bold =
    end * totalCharCount <= boldEndIndex &&
    start * totalCharCount >= boldStartIndex;

  return (
    <motion.span
      key={keyId}
      className={`hero-character${bold ? " bold" : ""}${
        italized ? " italic" : ""
      }`}
      style={{ opacity: characterOpacity }}
    >
      {children}
    </motion.span>
  );
};
