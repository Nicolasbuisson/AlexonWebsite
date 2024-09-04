import { ReactNode, useState } from "react";
import "./carousel.css";

interface IProps {
  total: number;
  pageSize: number;
  totalPages: number;
  children: ReactNode;
}

export const Carousel = (props: IProps) => {
  const { total, pageSize, totalPages, children } = props;

  const [index, setIndex] = useState<number>(0);

  const updateIndex = (index: number) => {
    // definitely use modulo %
    // 20 items
    // 4 pages of 5 items each
    setIndex(index % totalPages);
  };

  // need 2 arrows, 1 for back and 1 for front
  // make buttons position fixed?

  // use Carousel component in Insta component!
  // I think 25 posts total
  // so can do 5 pages of 5

  return (
    <div className="carousel-container">
      <button className="carousel-previous-button"></button>
      <button className="carousel-next-button"></button>
    </div>
  );
};
