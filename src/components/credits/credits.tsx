import "./credits.css";

interface CreditEntry {
  title: string;
  name: string;
}

interface CreditProps {
  credits: CreditEntry[];
}

export const Credits = (props: CreditProps) => {
  const { credits } = props;
  return (
    <ul className="credits-list">
      {credits.map((credit) => {
        return (
          <li>
            <span>{credit.title}</span>
            <span>{credit.name}</span>
          </li>
        );
      })}
    </ul>
  );
};
