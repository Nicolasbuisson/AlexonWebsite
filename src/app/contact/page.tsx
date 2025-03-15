"use client";
import "./contact.css";
import { InlineWidget } from "react-calendly";
import { Navigation } from "../../components/navigation/navigation";

function Contact() {
  return (
    <div className="contact-container">
      <Navigation />
      <section className="contact-section">
        <h2>book a free consultation</h2>
        <div className="calendly-container">
          <InlineWidget
            url="https://calendly.com/contact-alexonmedia/freeconsultation"
            styles={{ height: "100%", width: "100%" }}
          />
        </div>
      </section>
    </div>
  );
}

export default Contact;
