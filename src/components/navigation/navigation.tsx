"use client";
import { useState } from "react";
import Link from "next/link";
import "./navigation.css";
import { Socials } from "../socials/socials";
import nextConfig from "../../../next.config";

interface NavigationProps {
  transparent?: boolean;
  sticky?: boolean;
  titleScroll?: boolean; //differentiate between scroll effect title and just static title
  showIcons?: boolean;
}

export const Navigation = (props: NavigationProps) => {
  const {
    transparent = false,
    sticky = false,
    titleScroll = false,
    showIcons = false,
  } = props;
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      document.getElementById("menu-container")!.style.right = "0%";
      document.getElementById("menu")!.style.opacity = "100%";
      // might be nicer to transition on the opacity then just display none that shit...
      // or also could be nice to keep it if it's at the top...
      // I think playing with the Z-index could fix this?
      document.getElementById("nav-logo")?.classList.add("hide");
    } else {
      setBurgerClass("burger-bar unclicked");
      document.getElementById("menu-container")!.style.right = "-100%";
      document.getElementById("menu")!.style.opacity = "0%";
      document.getElementById("nav-logo")?.classList.remove("hide");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const navClasses: string = [
    transparent ? "transparent" : "",
    titleScroll ? "nav-scroll" : "",
  ].join(" ");

  return (
    <header
      className={
        sticky
          ? "navigation-container sticky-navigation-container"
          : "navigation-container"
      }
    >
      <nav className={navClasses}>
        {showIcons ? <Socials className="nav-socials"></Socials> : <></>}
        <Link
          href="/"
          className={`nav-logo ${titleScroll ? "logo-scroll" : ""}`}
        >
          <img src={nextConfig.basePath + "/assets/logos/Full-white.png"}></img>
        </Link>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div id="menu-container">
        <ul className="menu" id="menu">
          <li>
            <Link
              href="/"
              className="link"
              onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/productions"
              className="link"
              onClick={() => window.scrollTo(0, 0)}
            >
              Productions
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="link"
              onClick={() => window.scrollTo(0, 0)}
            >
              About
            </Link>
          </li>
          <li className="services-menu">
            <Link
              href="/shortform"
              className="link services-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              Short Form
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="link"
              onClick={() => window.scrollTo(0, 0)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
