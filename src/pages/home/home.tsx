import { Footer } from "../../components/footer/footer";
import { Navigation } from "../../components/navigation/navigation";
import "./home.css";

export const Home = () => {
  return (
    <section>
      <Navigation></Navigation>
      <h1>Home</h1>
      <div className="home-container"></div>
      {/* <img HOW TO PUT AN IMG WITH WEBPACK, MUST USE REQUIRE!
        src={require("../../assets/images/sunset-purple-tree.jpg")}
        alt=""
      ></img> */}
      <Footer></Footer>
    </section>
  );
};
