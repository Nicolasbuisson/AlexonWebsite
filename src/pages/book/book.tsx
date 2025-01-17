import { InlineWidget } from "react-calendly";
import { Navigation } from "../../components/navigation/navigation";
import "./book.css";
import { Footer } from "../../components/footer/footer";

export const Book = () => {
  return (
    <div className="book-container">
      <Navigation />
      <section className="book-section">
        <h2>Book a free consultation</h2>
        <div className="calendly-container">
          <InlineWidget
            url="https://calendly.com/contact-alexonmedia/freeconsultation"
            styles={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="booking-alternatives">
          <p>Or you can call us at:</p>
          <a href="tel:+15145577790">Canada/US: +1 514 557 7790</a>
          <a href="tel:+33783131299">France: +33 7 83 13 12 99</a>
          <p>Or you can write to us at:</p>
          <a href="mailto:contact@alexonmedia.com">contact@alexonmedia.com</a>
        </div>
      </section>
      <Footer />
    </div>
  );
};
