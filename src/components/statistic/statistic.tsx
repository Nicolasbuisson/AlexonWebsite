import "./statistic.css";

interface IProps {
  stat: string;
  description: string;
}

export const Statistic = (props: IProps) => {
  const { stat, description } = props;
  return (
    <div className="stats-container">
      <h3>{stat}</h3>
      <h4>{description}</h4>
    </div>
  );
};
