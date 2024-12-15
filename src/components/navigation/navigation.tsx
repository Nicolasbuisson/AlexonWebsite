import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.css";
import { Socials } from "../socials/socials";

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

  const servicesMenuClick = () => {
    const servicesMenu = document.getElementById("services-menu-content");
    servicesMenu?.setAttribute(
      "data-expanded",
      servicesMenu?.getAttribute("data-expanded") === "true" ? "false" : "true"
    );
  };

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
        <img
          src={import.meta.env.BASE_URL + "/assets/logos/Full-white.png"}
          id="nav-logo"
          className={`nav-logo ${titleScroll ? "logo-scroll" : ""}`}
        ></img>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div id="menu-container">
        <ul className="menu" id="menu">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/work" className="link">
              Work
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li className="services-menu">
            <h1 className="link" onClick={servicesMenuClick}>
              Services
            </h1>
            <div
              id="services-menu-content"
              className="services-menu-content"
              data-expanded="false"
            >
              <Link to="/services/shortform" className="link services-link">
                Short Form
              </Link>
              <Link to="/services/longform" className="link services-link">
                Long Form
              </Link>
            </div>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </header>
  );
};
