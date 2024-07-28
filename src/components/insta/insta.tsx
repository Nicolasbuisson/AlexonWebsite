import { useEffect, useLayoutEffect, useState } from "react";
import { InstaItemResponse } from "../../types/insta";
import { config } from "../../config/config";
import "./insta.css";
import { InstaItem } from "./instaItem";

export const Insta = () => {
  const [instaItems, setInstaItems] = useState<InstaItemResponse[]>(
    Array(6).fill(undefined)
  );

  const userId = config.INSTA_USER_ID;
  const accessToken = config.INSTA_ACCESS_TOKEN;

  useEffect(() => {
    const fetchInstaItem = async (
      itemId: string
    ): Promise<InstaItemResponse> => {
      const instaItemURL = `https://graph.instagram.com/${itemId}?access_token=${accessToken}&fields=media_url,permalink,caption,media_type`;

      const res = await fetch(instaItemURL);
      const json = await res.json();

      const instaItem: InstaItemResponse = {
        permaLink: json.permalink,
        mediaURL: json.media_url,
        mediaType: json.media_type,
        caption: json.caption,
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

      const items: InstaItemResponse[] = [];

      for (let i = 0; i < 6; i++) {
        const itemId = data[i].id;
        const instaItem = await fetchInstaItem(itemId);
        items.push(instaItem);
      }
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
        mediaItemVideo.onloadeddata = (event) => {
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

  return (
    <div className="insta-grid">
      {instaItems.map((item, index) => {
        return item ? (
          <InstaItem
            key={item.mediaURL}
            permaLink={item.permaLink}
            mediaURL={item.mediaURL}
            mediaType={item.mediaType}
            caption={item.caption}
          ></InstaItem>
        ) : (
          <div className="insta-skeleton" key={"skeleton-" + index}></div>
        );
      })}
    </div>
  );
};
