import "./logoList.css";
import Image from "next/image";

interface ILogo {
  src: string;
  width: number;
  height: number;
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
          <Image
            key={logo.alt + i}
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt={logo.alt}
          />
        );
      })}
    </div>
  );
};
