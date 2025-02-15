import { ButtonBackgroundHoverEffect } from "../buttonBackgroundHoverEffect/buttonBackgroundHoverEffect";
import "./package.css";

interface IPackageItem {
  item: string;
  hoverText?: string;
}

interface IPackage {
  title: string;
  price: number;
  description: string;
  itemList: IPackageItem[];
}

export const Package = (props: IPackage) => {
  const { title, price, description, itemList } = props;
  return (
    <div className="package-container">
      <div>
        <h4 className="package-title">{title}</h4>
        <h4 className="package-price">
          ${price}
          <span>per month + tax</span>
        </h4>
        <hr className="package-divider" />
        <p className="package-description">{description}</p>
      </div>
      <div>
        <ButtonBackgroundHoverEffect
          text={"Book Call Now"}
          link="/contact"
          size="small"
          className="package-button"
        />
        <p className="package-inclusion-title">Includes</p>
        <div className="package-inclusion-list">
          {itemList.map((item) => {
            return <p key={item.item}>{item.item}</p>;
          })}
        </div>
      </div>
    </div>
  );
};
