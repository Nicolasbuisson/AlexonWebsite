import { Footer } from "../../components/footer/footer";
import { Navigation } from "../../components/navigation/navigation";
import "./contact.css";

export const Contact = () => {
  return (
    <section className="contact-section">
      <Navigation></Navigation>

      <div className="contact-grid">
        <div className="contact-grid-item">
          <img
            src={require("../../assets/images/sunset-purple-tree.jpg")}
            alt=""
            className="contact-grid-item-image"
          ></img>
        </div>
        <div className="contact-grid-item">
          <img
            src={require("../../assets/images/sunset-purple-tree.jpg")}
            alt=""
            className="contact-grid-item-image"
          ></img>
        </div>
        <div className="contact-grid-item">
          <img
            src={require("../../assets/images/sunset-purple-tree.jpg")}
            alt=""
            className="contact-grid-item-image"
          ></img>
        </div>
        <div className="contact-grid-item">
          <img
            src={require("../../assets/images/sunset-purple-tree.jpg")}
            alt=""
            className="contact-grid-item-image"
          ></img>
        </div>
        <div className="contact-grid-item">
          <img
            src={require("../../assets/images/sunset-purple-tree.jpg")}
            alt=""
            className="contact-grid-item-image"
          ></img>
        </div>
        <div className="contact-grid-item">
          <img
            src={require("../../assets/images/sunset-purple-tree.jpg")}
            alt=""
            className="contact-grid-item-image"
          ></img>
        </div>
        <div className="contact-grid-item">
          <img
            src={require("../../assets/images/sunset-purple-tree.jpg")}
            alt=""
            className="contact-grid-item-image"
          ></img>
        </div>
        <div className="contact-grid-item">
          <img
            src={require("../../assets/images/sunset-purple-tree.jpg")}
            alt=""
            className="contact-grid-item-image"
          ></img>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};
