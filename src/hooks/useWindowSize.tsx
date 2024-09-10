import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("reset", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("reset", handleResize);
    };
  }, []);

  return windowWidth;
};
