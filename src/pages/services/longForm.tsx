import "./longForm.css";
import { Accordion } from "../../components/accordion/accordion";
import { FaqProps } from "../../types/faq";

interface IProps {
  faqs: FaqProps[];
}

export const LongForm = (props: IProps) => {
  const { faqs } = props;
  return (
    <div>
      Long Form
      <section className="home-faq-section">
        <h3>
          Get the answers you need about Alexon Media's{" "}
          <h3>digital services</h3>
        </h3>
        <div className="home-faq-container">
          <Accordion faqs={faqs}></Accordion>
          <img src={import.meta.env.BASE_URL + "assets/images/lake.jpg"}></img>
        </div>
      </section>
    </div>
  );
};
