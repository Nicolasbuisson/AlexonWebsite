import { Insta } from "./insta";
import "./instaSection.css";

export const InstaSection = () => {
  return (
    <section className="insta-section">
      <div>
        <a
          href="https://www.instagram.com/alexoonnn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="insta-title">@Alexoonnn</h3>
        </a>
        <Insta></Insta>
      </div>
    </section>
  );
};
