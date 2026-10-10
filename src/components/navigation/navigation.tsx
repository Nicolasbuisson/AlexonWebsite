"use client";
import { RefObject, useState } from "react";
import Link from "next/link";
import "./navigation.css";
import { Socials } from "../socials/socials";
import useScrollPercentage from "../../hooks/useScrollPercentage";
import { FlipLink } from "../flipLink/flipLink";

interface NavigationProps {
  transparent?: boolean;
  sticky?: boolean;
  titleScroll?: boolean; //differentiate between scroll effect title and just static title
  showIcons?: boolean;
  ref?: RefObject<HTMLDivElement>;
  hideOnMount?: boolean;
}

export const Navigation = (props: NavigationProps) => {
  const {
    transparent = false,
    sticky = false,
    titleScroll = false,
    showIcons = false,
    ref,
    hideOnMount = false,
  } = props;

  useScrollPercentage(); // initialize css variable --scroll
  // lenis is owned by <SmoothScroll /> in the root layout, so it is a single
  // instance for the session instead of one per page

  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      document.getElementById("menu-container")!.style.right = "0%";
      document.getElementById("menu")!.style.opacity = "100%";
      // disable scrolling immediately, no layout shift thanks to scrollbar-gutter: stable
      document.body.style.overflow = "hidden";
      // lenis only checks that the attribute is there, its value is ignored
      document.body.setAttribute("data-lenis-prevent", "");
    } else {
      setBurgerClass("burger-bar unclicked");
      document.getElementById("menu-container")!.style.right = "-100%";
      document.getElementById("menu")!.style.opacity = "0%";
      // re-enable scrolling
      document.body.style.overflow = "auto";
      // removed, not set to "false" — any value at all keeps lenis switched off
      document.body.removeAttribute("data-lenis-prevent");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const navClasses: string = [
    transparent ? "transparent" : "",
    titleScroll ? "nav-scroll" : "",
  ].join(" ");

  return (
    <header
      ref={ref}
      className={
        sticky
          ? "navigation-container sticky-navigation-container"
          : "navigation-container"
      }
      style={hideOnMount ? { opacity: 0 } : {}}
    >
      <nav className={navClasses}>
        {showIcons ? <Socials className="nav-socials"></Socials> : <></>}
        <Link
          href="/"
          className={`nav-logo ${titleScroll ? "logo-scroll" : ""}`}
        >
          <img
            src={"https://d128kbp85lo7cj.cloudfront.net/logos/Full-white.png"}
            alt="Alexon home"
          ></img>
        </Link>
        <button
          type="button"
          className="burger-menu"
          onClick={updateMenu}
          aria-label={isMenuClicked ? "Close menu" : "Open menu"}
          aria-expanded={isMenuClicked}
          aria-controls="menu-container"
        >
          <span className={burger_class}></span>
          <span className={burger_class}></span>
          <span className={burger_class}></span>
        </button>
      </nav>
      <div id="menu-container">
        <ul className="menu" id="menu">
          <li>
            <FlipLink
              href="/"
              label="Home"
              onClick={() => window.scrollTo(0, 0)}
            ></FlipLink>
          </li>
          <li>
            <FlipLink
              href="/shortform"
              label="Short-Form"
              onClick={() => window.scrollTo(0, 0)}
            ></FlipLink>
          </li>
          <li>
            <FlipLink
              href="/productions"
              label="Productions"
              onClick={() => window.scrollTo(0, 0)}
            ></FlipLink>
          </li>
          <li>
            <FlipLink
              href="/about"
              label="About"
              onClick={() => window.scrollTo(0, 0)}
            ></FlipLink>
          </li>
          <li>
            <FlipLink
              href="/contact"
              label="Contact"
              onClick={() => window.scrollTo(0, 0)}
            ></FlipLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
