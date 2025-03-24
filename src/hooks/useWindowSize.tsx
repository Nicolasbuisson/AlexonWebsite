"use client";
import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth); // set initial value on mount
    window.addEventListener("resize", handleResize);
    window.addEventListener("reset", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("reset", handleResize);
    };
  }, []);

  return windowWidth;
};
