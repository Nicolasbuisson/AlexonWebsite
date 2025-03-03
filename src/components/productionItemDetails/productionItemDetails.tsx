"use client";
import { StillImage } from "../../types/work";
import { FrameGallery } from "../frameGallery/frameGallery";
import "./productionItemDetails.css";
import { useState } from "react";

type ProductionItemDetailsTab =
  | "Frame Gallery"
  | "Credits"
  | "Behind the Scenes";

interface ProductionItemDetailsProps {
  stills: StillImage[];
}

export const ProductionItemDetails = (props: ProductionItemDetailsProps) => {
  const { stills } = props;
  const [tab, setTab] = useState<ProductionItemDetailsTab>("Frame Gallery");

  return (
    <div className="production-item-details">
      <FrameGallery stills={stills} />
    </div>
  );
};
