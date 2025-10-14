"use client";
import { useInView } from "react-intersection-observer";
import "./pageLoader.css";
import { useEffect } from "react";

interface PageLoaderProps {
  timeoutMs?: number;
}

export const PageLoader = (props: PageLoaderProps) => {
  const { timeoutMs = 2200 } = props;
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
  });
  useEffect(() => {
    // once page is loaded, fade loader out
    // and remove it from dom
    const hideLoader = () => {
      const loader = document.querySelector(".page-loader");
      if (loader) {
        loader.classList.add("page-loader-hidden");
        loader.addEventListener("transitionend", () => {
          loader.remove();
        });
      }
    };

    setTimeout(() => {
      hideLoader();
    }, timeoutMs);
  }, []);

  return (
    <div className="page-loader" ref={ref}>
      <span
        className={`page-loader-counter ${inView ? "counter-initializer" : ""}`}
      >
        %
      </span>
    </div>
  );
};
