"use client";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { InstaItemProps, MediaType } from "../../types/insta";
import { config } from "../../config/config";
import "./insta.css";
import { InstaItem } from "./instaItem";
import { Carousel } from "../carousel/carousel";
import { useWindowSize } from "../../hooks/useWindowSize";

export const Insta = () => {
  const [instaItems, setInstaItems] = useState<InstaItemProps[]>(
    Array(6).fill(undefined)
  );

  const TOTAL_INSTA_ITEMS = 25;
  const userId = config.INSTA_USER_ID;
  const accessToken = config.INSTA_ACCESS_TOKEN;

  useEffect(() => {
    const fetchInstaItem = async (itemId: string): Promise<InstaItemProps> => {
      const instaItemURL = `https://graph.instagram.com/${itemId}?access_token=${accessToken}&fields=media_url,permalink,caption,media_type,thumbnail_url`;

      const res = await fetch(instaItemURL);
      const json = await res.json();

      const instaItem: InstaItemProps = {
        permaLink: json.permalink,
        mediaURL: json.media_url,
        mediaType: json.media_type,
        caption: json.caption,
        thumbnailURL:
          (json.media_type as MediaType) === "VIDEO" ? json.thumbnail_url : "",
      };
      return instaItem;
    };
    const fetchInstaItemList = async () => {
      if (!userId || !accessToken) {
        return;
      }

      const instaItemListURL = `https://graph.instagram.com/${userId}/media?access_token=${accessToken}`;

      const res = await fetch(instaItemListURL);
      const { data } = await res.json();

      const itemPromises: Promise<InstaItemProps>[] = [];

      for (let i = 0; i < TOTAL_INSTA_ITEMS; i++) {
        const itemId = data[i]?.id;
        const instaItemPromise = fetchInstaItem(itemId);
        itemPromises.push(instaItemPromise);
      }
      const items = await Promise.all(itemPromises);
      setInstaItems(items);
    };

    fetchInstaItemList();
  }, []);

  useLayoutEffect(() => {
    // use for lazy loading effect
    // render skeleton until image or video is fully loaded
    // once fully loaded, add the "loaded" class to fade in
    const instaGridItems = document.querySelectorAll(".insta-grid-item");
    instaGridItems.forEach((instaGridItem) => {
      const mediaItemImage = instaGridItem.querySelector("img");
      const mediaItemVideo = instaGridItem.querySelector("video");
      const loaded = () => {
        mediaItemImage?.classList.add("loaded");
        mediaItemVideo?.classList.add("loaded");
      };
      if (mediaItemVideo) {
        mediaItemVideo.onloadeddata = () => {
          loaded();
        };
      }
      if (mediaItemImage?.complete) {
        loaded();
      } else {
        mediaItemImage?.addEventListener("load", loaded);
      }
    });
  }, [instaItems]);

  const { width: windowWidth } = useWindowSize();

  const getPageSize = useCallback((): number => {
    if (windowWidth <= 440) {
      return 2;
    } else if (440 < windowWidth && windowWidth < 880) {
      return 4;
    } else {
      return 5;
    }
  }, [windowWidth]);

  return (
    <Carousel
      pageSize={getPageSize()}
      totalPages={Math.floor(TOTAL_INSTA_ITEMS / getPageSize())}
    >
      {instaItems.map((item, index) => {
        return item ? (
          <InstaItem
            key={item.mediaURL}
            permaLink={item.permaLink}
            mediaURL={item.mediaURL}
            mediaType={item.mediaType}
            caption={item.caption}
            thumbnailURL={item.thumbnailURL}
          ></InstaItem>
        ) : (
          <div className="insta-skeleton" key={"skeleton-" + index}></div>
        );
      })}
    </Carousel>
  );
};
