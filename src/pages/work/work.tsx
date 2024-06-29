import { Link } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import { Navigation } from "../../components/navigation/navigation";
import "./work.css";
import { LogoScroller } from "../../components/logoScroller/logoScroller";

/* TODO
will have to dynamically create routes!
read from a json file?
video, stills (picture grid), project, text, more than one picture, boolean template type: reel, vimeo video...?
design template for individual project work page, inspire yourself from toast productions
*/
export const Work = () => {
  const cards = Array(12).fill(0);
  return (
    <div className="work-container">
      <Navigation></Navigation>
      <section className="work-section-container">
        <h2>Our Projects</h2>
        <div className="projects-grid">
          {cards.map((x, i) => {
            return (
              <Link
                to="/work/item"
                className="card"
                key={"work-grid-card-" + i}
              >
                <div className="stacked">
                  <img
                    src={require("../../assets/images/sunset-purple-tree.jpg")}
                    alt="project card"
                  ></img>
                  <h4>{`Project ${i}`}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="work-section-container">
        <h2>Our Clients</h2>
        <LogoScroller></LogoScroller>
      </section>
      <Footer></Footer>
    </div>
  );
};
