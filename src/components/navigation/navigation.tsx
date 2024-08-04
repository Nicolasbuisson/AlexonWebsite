import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.css";

interface NavigationProps {
  transparent?: boolean;
  sticky?: boolean;
}

export const Navigation = (props: NavigationProps) => {
  const { transparent = false, sticky = false } = props;
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      document.getElementById("menu-container")!.style.right = "0%";
      document.getElementById("menu")!.style.opacity = "100%";
    } else {
      setBurgerClass("burger-bar unclicked");
      document.getElementById("menu-container")!.style.right = "-100%";
      document.getElementById("menu")!.style.opacity = "0%";
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className={sticky ? "sticky-navigation-container" : ""}>
      <nav className={transparent ? "transparent" : ""}>
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
