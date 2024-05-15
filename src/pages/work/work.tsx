import { Footer } from "../../components/footer/footer";
import { Navigation } from "../../components/navigation/navigation";
import "./work.css";

// will have to dynamically create routes!
// read from a json file?
// picture, project, text, more than one picture?
export const Work = () => {
  const cards = Array(12).fill(0);
  return (
    <div className="work-container">
      <Navigation></Navigation>
      <section className="work-section-container">
        <div className="projects-grid">
          {cards.map((x, i) => {
            return (
              <div className="card stacked">
                <img
                  src={require("../../assets/images/sunset-purple-tree.jpg")}
                  alt="project card"
                ></img>
                <h4>{`Project ${i}`}</h4>
              </div>
            );
          })}
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};
