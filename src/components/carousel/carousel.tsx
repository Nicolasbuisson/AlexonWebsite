"use client";
import { ReactNode, useLayoutEffect, useState } from "react";
import "./carousel.css";

interface IProps {
  pageSize: number;
  totalPages: number;
  children: ReactNode;
  itemWidthMin?: number;
  itemWidthMax?: number;
  dynamicSize?: boolean;
  rootClass?: string;
}

export const Carousel = (props: IProps) => {
  const {
    pageSize,
    totalPages,
    children,
    itemWidthMin = 100,
    itemWidthMax = 312,
    dynamicSize = false,
    rootClass,
  } = props;

  const [index, setIndex] = useState<number>(0);

  const updateIndex = (index: number) => {
    const modulatedIndex =
      index < 0
        ? totalPages - 1 // if index is less than 0, go to the end
        : index >= totalPages
        ? 0 // if index is greater than total pages, go to start
        : Math.min(index, totalPages - 1); // else increment page accordingly
    setIndex(modulatedIndex);
    (
      document.querySelector(".carousel-container") as HTMLElement
    )?.style.setProperty("--carousel-offset", modulatedIndex.toString());
  };

  useLayoutEffect(() => {
    (
      document.querySelector(".carousel-container") as HTMLElement
    )?.style.setProperty("--carousel-items-per-page", pageSize.toString());
  }, [pageSize]);

  useLayoutEffect(() => {
    // I think this causes an issue on the initial render...
    const carouselContainer = document.querySelector(
      ".carousel-container"
    ) as HTMLElement;
    carouselContainer.style.setProperty(
      "--carousel-item-width-min",
      itemWidthMin.toString() + "px"
    );
    carouselContainer.style.setProperty(
      "--carousel-item-width-max",
      itemWidthMax.toString() + "px"
    );
  }, []);

  return (
    <div
      className={`carousel-container ${
        dynamicSize ? "dynamic-carousel-container" : ""
      }`}
      id="carousel-container"
    >
      <button
        className="carousel-previous-button"
        onClick={() => {
          updateIndex(index - 1);
        }}
      >
        <svg
          fill="#FFF"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z"></path>{" "}
          </g>
        </svg>
      </button>
      <button
        className="carousel-next-button"
        onClick={() => {
          updateIndex(index + 1);
        }}
      >
        <svg
          fill="#FFF"
          viewBox="0 0 32.00 32.00"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="5.952"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path>{" "}
          </g>
        </svg>
      </button>
      <div
        className={`carousel-mover ${
          dynamicSize ? "dynamic-carousel-mover" : ""
        } ${rootClass ? rootClass : ""}`}
      >
        {children}
      </div>
    </div>
  );
};
