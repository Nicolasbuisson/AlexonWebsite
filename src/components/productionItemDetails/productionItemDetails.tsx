"use client";
import { CreditEntry, StillImage } from "../../types/work";
import { Credits } from "../credits/credits";
import { MasonryLayout } from "../masonry/masonry";
import "./productionItemDetails.css";
import { useState } from "react";

type ProductionItemDetailsTab =
  | "Frame Gallery"
  | "Photo Gallery"
  | "Credits"
  | "Behind the Scenes";

interface ProductionItemDetailsProps {
  stills: StillImage[];
  photos: StillImage[];
  bts: StillImage[];
  credits: CreditEntry[];
}

export const ProductionItemDetails = (props: ProductionItemDetailsProps) => {
  const { stills, photos, bts, credits } = props;
  const [tab, setTab] = useState<ProductionItemDetailsTab>("Frame Gallery");

  return (
    <div className="production-item-details">
      <div className="production-item-tabs">
        {stills.length > 0 && (
          <span
            onClick={() => {
              setTab("Frame Gallery");
            }}
            className={
              tab === "Frame Gallery" ? "selected-production-item-tab" : ""
            }
          >
            Frame Gallery
          </span>
        )}
        {photos.length > 0 && (
          <span
            onClick={() => {
              setTab("Photo Gallery");
            }}
            className={
              tab === "Photo Gallery" ? "selected-production-item-tab" : ""
            }
          >
            Photo Gallery
          </span>
        )}
        {bts.length > 0 && (
          <span
            onClick={() => {
              setTab("Behind the Scenes");
            }}
            className={
              tab === "Behind the Scenes" ? "selected-production-item-tab" : ""
            }
          >
            Behind the Scenes
          </span>
        )}
        {credits.length > 0 && (
          <span
            onClick={() => {
              setTab("Credits");
            }}
            className={tab === "Credits" ? "selected-production-item-tab" : ""}
          >
            Credits
          </span>
        )}
      </div>
      {tab === "Frame Gallery" && (
        <div className="fade-in">
          <MasonryLayout images={stills} />
        </div>
      )}
      {tab === "Photo Gallery" && (
        <div className="fade-in">
          <MasonryLayout images={photos} />
        </div>
      )}
      {tab === "Behind the Scenes" && (
        <div className="fade-in">
          <MasonryLayout images={bts} />
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
