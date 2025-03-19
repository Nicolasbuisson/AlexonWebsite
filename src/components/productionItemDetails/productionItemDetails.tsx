"use client";
import { CreditEntry, StillImage } from "../../types/work";
import { BehindTheScenesGallery } from "../behindTheScenesGallery/behindTheScenesGallery";
import { Credits } from "../credits/credits";
import { FrameGallery } from "../frameGallery/frameGallery";
import "./productionItemDetails.css";
import { useState } from "react";

type ProductionItemDetailsTab =
  | "Frame Gallery"
  | "Photo Gallery"
  | "Credits"
  | "Behind the Scenes";

interface ProductionItemDetailsProps {
  stills: StillImage[];
  credits: CreditEntry[];
}

const PRODUCTION_ITEMS_TABS: ProductionItemDetailsTab[] = [
  "Frame Gallery",
  "Photo Gallery",
  "Behind the Scenes",
  "Credits",
];

export const ProductionItemDetails = (props: ProductionItemDetailsProps) => {
  const { stills, credits } = props;
  const [tab, setTab] = useState<ProductionItemDetailsTab>("Frame Gallery");

  return (
    <div className="production-item-details">
      <div className="production-item-tabs">
        {PRODUCTION_ITEMS_TABS.map((tabValue) => {
          return (
            <span
              key={tabValue + "-tab"}
              onClick={() => {
                setTab(tabValue);
              }}
              className={tabValue === tab ? "selected-production-item-tab" : ""}
            >
              {tabValue}
            </span>
          );
        })}
      </div>
      {tab === "Frame Gallery" && (
        <div className="fade-in">
          <FrameGallery stills={stills} />
        </div>
      )}
      {tab === "Photo Gallery" && (
        <div className="fade-in">
          <FrameGallery stills={stills} />
        </div>
      )}
      {tab === "Behind the Scenes" && (
        <div className="fade-in">
          <BehindTheScenesGallery btsImages={stills} />
        </div>
      )}
      {tab === "Credits" && (
        <div className="fade-in">
          <Credits credits={credits} />
        </div>
      )}
    </div>
  );
};
