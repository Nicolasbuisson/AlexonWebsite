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
            return (
              <div
                key={item.item}
                className="package-inclusion-list-item-wrapper"
              >
                <p className="package-inclusion-list-item">
                  {item.item}
                  {item.hoverText && (
                    <>
                      <svg
                        className="package-inclusion-list-item-info-icon"
                        width="22px"
                        height="22px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                          ></circle>
                          <path
                            d="M12 17V11"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          ></path>
                          <circle
                            cx="1"
                            cy="1"
                            r="1"
                            transform="matrix(1 0 0 -1 11 9)"
                            fill="#ffffff"
                          ></circle>
                        </g>
                      </svg>
                      <span className="package-inclusion-list-item-details">
                        {item.hoverText}
                      </span>
                    </>
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
