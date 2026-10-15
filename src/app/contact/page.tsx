import "./contact.css";
import type { Metadata } from "next";
import { Navigation } from "../../components/navigation/navigation";
import { CalendlyWidget } from "../../components/calendlyWidget/calendlyWidget";

export const metadata: Metadata = {
  title: "Contact Us — Book a Free Consultation",
  description:
    "Book a free consultation with Alexon Media to scope your next brand film or short-form content system. Pick a time that works and let's talk.",
};

function Contact() {
  return (
    <div className="contact-container">
      <Navigation />
      <section className="contact-section">
        <h2>book a free consultation</h2>
        <div className="calendly-container">
          <CalendlyWidget url="https://calendly.com/contact-alexonmedia/freeconsultation" />
        </div>
      </section>
    </div>
  );
}

export default Contact;
