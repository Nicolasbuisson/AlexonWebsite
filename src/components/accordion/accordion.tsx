import "./accordion.css";
import { FaqProps } from "../../types/faq";

interface IProps {
  faqs: FaqProps[];
}

export const Accordion = (props: IProps) => {
  const { faqs } = props;

  const toggleAccordion = (panelToActivate: Element) => {
    const activeButton = panelToActivate.querySelector("button");
    const activePanelIsOpened = activeButton?.getAttribute("aria-expanded");

    if (activePanelIsOpened === "true") {
      panelToActivate
        ?.querySelector("button")
        ?.setAttribute("aria-expanded", "false");

      panelToActivate
        ?.querySelector(".accordion-content")
        ?.setAttribute("aria-hidden", "true");
    } else {
      panelToActivate
        ?.querySelector("button")
        ?.setAttribute("aria-expanded", "true");

      panelToActivate
        ?.querySelector(".accordion-content")
        ?.setAttribute("aria-hidden", "false");
    }
  };

  return (
    <div
      className="accordion"
      onClick={(e) => {
        const activePanel = (e.target as Element)?.closest(".accordion-panel");
        if (!activePanel) return;
        toggleAccordion(activePanel);
      }}
    >
      {faqs.map((faq) => {
        return (
          <div className="accordion-panel" key={faq.title}>
            <h4>
              <button className="accordion-trigger" aria-expanded="false">
                {faq.title}
              </button>
            </h4>
            <div className="accordion-content" aria-hidden="true">
              <div>
                <p>{faq.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
