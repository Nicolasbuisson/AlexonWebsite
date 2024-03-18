import { Footer } from "../../components/footer/footer";
import { Navigation } from "../../components/navigation/navigation";
import "./home.css";

export const Home = () => {
  return (
    <section>
      <Navigation></Navigation>
      <h1>Home</h1>
      <div className="home-container"></div>
      <Footer></Footer>
    </section>
  );
};
