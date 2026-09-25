"use client";
import { ReactNode, useEffect } from "react";
import "./horizontalScroller.css";

interface IProps {
  children: ReactNode;
  /**
   * Run edge to edge, cancelling the inline padding of the section it sits in.
   * Off by default, so a scroller inside an unpadded parent is unaffected.
   */
  fullBleed?: boolean;
}

export const HorizontalScroller = (props: IProps) => {
  const { children, fullBleed } = props;
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    const addAnimation = () => {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector(".scroller-inner");
        const scrollerInnerContent = Array.from(scrollerInner!.children);
        scrollerInnerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          item.classList.forEach((c) => {
            (duplicatedItem as Element).classList.add(c);
          });
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
    <div className="scroller" data-full-bleed={fullBleed ? "true" : undefined}>
      <div className="scroller-inner">{children}</div>
    </div>
  );
};
