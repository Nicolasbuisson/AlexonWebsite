import { Insta } from "./insta";
import "./instaSection.css";

interface IInstaSection {
  additionalTitle?: string;
}

export const InstaSection = (props: IInstaSection) => {
  const { additionalTitle = "" } = props;
  return (
    <section className="insta-section">
      {additionalTitle && (
        <h3 className="insta-section-additional-title">{additionalTitle}</h3>
      )}
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
