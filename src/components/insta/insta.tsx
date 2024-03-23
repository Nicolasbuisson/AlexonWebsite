import { useEffect, useState } from "react";
import { InstaItem } from "../../types/home";
import "./insta.css";

export const Insta = () => {
  const [instaItems, setInstaItems] = useState<InstaItem[]>([]);

  const userId = process.env.REACT_APP_INSTA_USER_ID;
  const accessToken = process.env.REACT_APP_INSTA_ACCESS_TOKEN;

  useEffect(() => {
    const fetchInstaItem = async (itemId: string): Promise<InstaItem> => {
      const instaItemURL = `https://graph.instagram.com/${itemId}?access_token=${accessToken}&fields=media_url,permalink`;

      const res = await fetch(instaItemURL);
      const json = await res.json();

      const instaItem: InstaItem = {
        permaLink: json.permalink,
        mediaURL: json.media_url,
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
      console.log(data);

      const items: InstaItem[] = [];

      for (let i = 0; i < 6; i++) {
        const itemId = data[i].id;
        const instaItem = await fetchInstaItem(itemId);
        items.push(instaItem);
      }
      setInstaItems(items);
    };

    fetchInstaItemList();
  }, []);

  // should think about conditional rendering here
  // TODO create your own skeleton, gray background with pulse animation from WebDevSimplified
  return (
    <div className="insta-grid">
      {instaItems.map((item) => {
        return <img src={item.mediaURL} className="insta-grid-item"></img>;
      })}
    </div>
  );
};
