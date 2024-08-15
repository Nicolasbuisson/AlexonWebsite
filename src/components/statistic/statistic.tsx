import { useInView } from "react-intersection-observer";
import "./statistic.css";

interface IProps {
  statString: string;
  statNumber: number;
  statStringBeforeNumber?: boolean;
  description: string;
}

export const Statistic = (props: IProps) => {
  const {
    statString,
    statNumber,
    statStringBeforeNumber = false,
    description,
  } = props;
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
  });
  return (
    <div className={`stats-container ${inView ? "show" : "hidden"}`} ref={ref}>
      <h3
        data-stat={statNumber}
        className={`${
          statStringBeforeNumber ? "before-number" : "after-number"
        } ${inView ? `stat-initializer-${statNumber}` : ""}`}
      >
        {statString}
      </h3>
      <h4>{description}</h4>
    </div>
  );
};
