import { useEffect, useState } from "react";
import { InstaItemResponse } from "../../types/insta";
import { config } from "../../config/config";
import "./insta.css";
import { InstaItem } from "./instaItem";

export const Insta = () => {
  const [instaItems, setInstaItems] = useState<InstaItemResponse[]>([]);

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
        console.log(instaItem);
        items.push(instaItem);
      }
      setInstaItems(items);
    };

    fetchInstaItemList();
  }, []);

  // should think about conditional rendering here
  // TODO create your own skeleton, gray background with pulse animation from WebDevSimplified
  // cause right now it renders weird af
  // or might have to specify a height so that page doesn't grow once items are loaded in...
  return (
    <div className="insta-grid">
      {instaItems.map((item) => {
        return (
          <InstaItem
            key={item.mediaURL}
            permaLink={item.permaLink}
            mediaURL={item.mediaURL}
            mediaType={item.mediaType}
            caption={item.caption}
          ></InstaItem>
        );
      })}
    </div>
  );
};
