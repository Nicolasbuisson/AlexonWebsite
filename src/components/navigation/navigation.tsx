import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.css";
import useScrollPercentage from "../../hooks/useScrollPercentage";
import { Socials } from "../socials/socials";

interface NavigationProps {
  transparent?: boolean;
  sticky?: boolean;
  title?: string;
  showIcons?: boolean;
}

export const Navigation = (props: NavigationProps) => {
  const {
    transparent = false,
    sticky = false,
    title,
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
      document.getElementById("nav-title-id")?.classList.add("hide");
    } else {
      setBurgerClass("burger-bar unclicked");
      document.getElementById("menu-container")!.style.right = "-100%";
      document.getElementById("menu")!.style.opacity = "0%";
      document.getElementById("nav-title-id")?.classList.remove("hide");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const {} = useScrollPercentage();

  return (
    <div
      className={
        sticky
          ? "navigation-container sticky-navigation-container"
          : "navigation-container"
      }
    >
      <nav className={transparent ? "transparent" : ""}>
        {showIcons ? <Socials className="nav-socials"></Socials> : <></>}
        {title ? (
          <h1 className="nav-title" id="nav-title-id">
            {title}
          </h1>
        ) : (
          <></>
        )}
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div id="menu-container">
        <div className="menu" id="menu">
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
            <Link to="/story" className="link">
              Story
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
        </div>
      </div>

      <Outlet />
    </div>
  );
};
