import { useEffect, useState } from "react";

const useScrollPercentage = () => {
  // might not even need the state here, could remove it...
  // if I do pure CSS animation with --scroll variable remove it
  // if I want to do JSX animations, keep it
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const setScrollVariable = () => {
    // select html Element
    const htmlElement = document.documentElement;
    // ratio between how far user has scrolled and how big website is
    // clamped to 100
    const scrollRatio = Math.min(
      (htmlElement.scrollTop / htmlElement.clientHeight) * 100,
      100
    );
    setScrollPercentage(scrollRatio);
    // set CSS variable on html element to be used in CSS
    htmlElement.style.setProperty("--scroll", scrollRatio.toString());
  };

  useEffect(() => {
    document.addEventListener("scroll", setScrollVariable);
    // resizing can affect the scroll
    document.addEventListener("resize", setScrollVariable);
    // to handle page refreshing with scroll position not being at 0
    setScrollVariable();
  }, []);

  return scrollPercentage;
};

export default useScrollPercentage;
