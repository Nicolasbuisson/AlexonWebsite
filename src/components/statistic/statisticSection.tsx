import { Statistic } from "./statistic";
import "./statisticSection.css";

export const StatisticSection = () => {
  return (
    <section className="stats-section">
      <h3>Some compelling statistics to share</h3>
      <div className="stats-container">
        <Statistic
          statNumber={73}
          statString="%"
          description="of consumers prefer to watch a short-form video to learn about a product or service"
        ></Statistic>
        <Statistic
          statNumber={48}
          statString=""
          description="minutes devoted daily to watching short form content on average"
        ></Statistic>
        <Statistic
          statNumber={1}
          statString="#"
          statStringBeforeNumber
          description="highest ROI out of any social media marketing strategy"
        ></Statistic>
      </div>
    </section>
  );
};
