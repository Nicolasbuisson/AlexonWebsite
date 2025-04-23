import "./logoList.css";
import Image from "next/image";

interface ILogo {
  src: string;
  alt: string;
}

interface IProps {
  logos: ILogo[];
}
export const LogoList = (props: IProps) => {
  const { logos } = props;
  return (
    <div className="clients-logos-container">
      {logos.map((logo, i) => {
        return (
          <div className="client-logo-wrapper" key={logo.alt + i}>
            <Image src={logo.src} alt={logo.alt} fill />
          </div>
        );
      })}
    </div>
  );
};
