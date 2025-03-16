"use client";
import { StillImage } from "../../types/work";
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
}

const PRODUCTION_ITEMS_TABS: ProductionItemDetailsTab[] = [
  "Frame Gallery",
  "Photo Gallery",
  "Behind the Scenes",
  "Credits",
];

export const ProductionItemDetails = (props: ProductionItemDetailsProps) => {
  const { stills } = props;
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
          <Credits
            credits={[
              { title: "Director", name: "Big Dick Joe" },
              { title: "Creative Director", name: "Small Titty Nancy" },
              { title: "Assistant Creative Director", name: "Lil' Timmy" },
              { title: "Camera Car", name: "Not Tesla lmao" },
              { title: "Voice Talent", name: "Homegirl Adele" },
              { title: "Executive Director", name: "Caesar" },
              { title: "Drone Engineer", name: "Murab Mustafa" },
              { title: "BTS footage", name: "My Shadow" },
              { title: "Sound Design", name: "Darude Sandstorm" },
            ]}
          />
        </div>
      )}
    </div>
  );
};
