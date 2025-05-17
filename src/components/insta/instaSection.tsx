import { InstaItemProps, MediaType } from "../../types/insta";
import { Insta } from "./insta";
import { config } from "../../config/config";
import "./instaSection.css";

interface IInstaSection {
  additionalTitle?: string;
}

export const InstaSection = async (props: IInstaSection) => {
  const { additionalTitle = "" } = props;

  const TOTAL_INSTA_ITEMS = 25;
  const userId = config.INSTA_USER_ID;
  const accessToken = config.INSTA_ACCESS_TOKEN;

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
    return items;
  };

  const instaItems = (await fetchInstaItemList()) ?? [];

  return (
    <section className="insta-section">
      {additionalTitle && (
        <h3 className="insta-section-additional-title">{additionalTitle}</h3>
      )}
      <div>
        <a
          href="https://www.instagram.com/alexoonnn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="insta-title">@Alexoonnn</h3>
        </a>
        <Insta
          instaItems={instaItems}
          totalItems={instaItems.length ? TOTAL_INSTA_ITEMS : 0}
        ></Insta>
      </div>
    </section>
  );
};
