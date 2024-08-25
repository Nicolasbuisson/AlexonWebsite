import "./logoList.css";

interface IProps {
  logos: string[];
}
export const LogoList = (props: IProps) => {
  const { logos } = props;
  return (
    <div className="clients-logos-container">
      {logos.map((logo, i) => {
        return <img key={logo + i} src={logo} alt="logo" height="100px"></img>;
      })}
    </div>
  );
};
