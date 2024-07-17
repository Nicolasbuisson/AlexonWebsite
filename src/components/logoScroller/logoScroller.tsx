import { useEffect } from "react";
import "./logoScroller.css";

export const LogoScroller = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    const addAnimation = () => {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector(".scroller-inner");
        const scrollerInnerContent = Array.from(scrollerInner!.children);
        scrollerInnerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          (duplicatedItem as Element).setAttribute("aria-hidden", "true");
          scrollerInner?.appendChild(duplicatedItem);
        });
      });
    };

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  return (
    <div className="scroller">
      <div className="scroller-inner">
        <img src={"/assets/logos/corona.png"} alt="logo" height="100px"></img>
        <img src={"/assets/logos/corona.png"} alt="logo" height="100px"></img>
        <img src={"/assets/logos/corona.png"} alt="logo" height="100px"></img>
        <img src={"/assets/logos/corona.png"} alt="logo" height="100px"></img>
        <img src={"/assets/logos/corona.png"} alt="logo" height="100px"></img>
        <img src={"/assets/logos/corona.png"} alt="logo" height="100px"></img>
      </div>
    </div>
  );
};
