"use client";
import "./heroParagraph.css";
import { useEffect, useRef } from "react";
import { useScroll, motion, MotionValue, useTransform } from "framer-motion";
import { config } from "../../config/config";

interface IProps {
  text: string;
  className?: string;
  scrollOffset?: any[];
  boldStartIndex?: number;
  boldEndIndex?: number;
  italicWordIndexes?: number[];
  startFromEnd?: boolean;
}

interface WordProps {
  children: string;
  keyId: string;
  start: number;
  end: number;
  scrollYProgress: MotionValue<number>;
  totalCharCount: number;
  boldStartIndex: number;
  boldEndIndex: number;
  startFromEnd: boolean;
  extraClasses?: string;
}

export const HeroParagraph = (props: IProps) => {
  const {
    text,
    className = "",
    scrollOffset = ["start 0.9", "start 0.4"],
    boldEndIndex = 0,
    boldStartIndex = 0,
    italicWordIndexes = [],
    startFromEnd = false,
  } = props;

  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: scrollOffset,
  });

  const words = text.split(" ");

  useEffect(() => {
    const asyncTestInsta = async () => {
      const userId = config.INSTA_USER_ID;
      const accessToken = config.INSTA_ACCESS_TOKEN;
      const instaItemListURL = `https://graph.instagram.com/${userId}/media?access_token=${accessToken}`;
      const instaItems = await fetch(instaItemListURL);
      const { data } = await instaItems.json();
      const itemId = data[0]?.id;
      if (itemId) {
        const instaItemURL = `https://graph.instagram.com/${itemId}?access_token=${accessToken}&fields=media_url,permalink,caption,media_type,thumbnail_url`;
        const res = await fetch(instaItemURL);
        const json = await res.json();
        console.log(json);
      }
    };
    asyncTestInsta();
  }, []);

  return (
    <p ref={element} className={className}>
      {words.map((word, i) => {
        const step = 1 / words.length;
        const start = i * step;
        const end = start + step;
        const foundIndex = italicWordIndexes.findIndex((index) => index === i);
        // foundIndex not equal to -1 means it exists
        const extraClasses =
          foundIndex !== -1
            ? italicWordIndexes[foundIndex] > 1 &&
              italicWordIndexes.includes(italicWordIndexes[foundIndex] - 1)
              ? "hero-paragraph-italic text-accent-solid"
              : "hero-paragraph-italic text-accent-linear-gradient"
            : "";
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
            startFromEnd={startFromEnd}
            extraClasses={extraClasses}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
};

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
    startFromEnd,
    extraClasses = "",
  } = props;
  const characters = children.split("");
  const amount = end - start;
  const step = amount / children.length;
  return (
    <span key={keyId} className={"hero-word " + extraClasses}>
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
    startFromEnd,
  } = props;
  const characterOpacity = useTransform(
    scrollYProgress,
    startFromEnd ? [1 - end, 1 - start] : [start, end],
    startFromEnd ? [1, 0] : [0.1, 1]
  );
  const bold =
    end * totalCharCount <= boldEndIndex &&
    start * totalCharCount >= boldStartIndex;

  return (
    <motion.span
      key={keyId}
      className={`hero-character ${bold ? "bold" : ""}`}
      style={{ opacity: characterOpacity }}
    >
      {children}
    </motion.span>
  );
};
